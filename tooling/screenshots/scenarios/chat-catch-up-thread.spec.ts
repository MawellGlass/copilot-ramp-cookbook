import { test, expect, type Page } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Scenario: "Catch up on a Teams thread you were @mentioned in" (Stage 1 · Copilot Chat).
 * Mirrors walkthroughs/chat-catch-up-thread.md step-by-step.
 *
 * Output: ../../docs/screenshots/chat-catch-up-thread/{NN}-{name}.png
 *
 * ⚠️ SELECTORS ARE BEST-EFFORT. Verify with `npm run codegen` before a real run.
 *
 * NOTE: this prompt grounds on a Teams thread. The walkthrough's natural surface
 * is Copilot in Teams; this batch targets Microsoft 365 Copilot Chat
 * (m365.cloud.microsoft/chat). To capture the thread-grounded answer here, open
 * the relevant thread first (or paste it) so Copilot has something to summarize.
 * TODO(verify): if capturing inside Teams instead, change goto() to the Teams
 * Copilot side panel and re-pick selectors with codegen.
 */

const SLUG = 'chat-catch-up-thread';
const OUT_DIR = join(__dirname, '..', '..', 'docs', 'screenshots', SLUG);

const PROMPT = `Summarize this Teams thread for me. I was @mentioned but haven't read it. Tell me
specifically: what's being asked of me, by when, and what I'd need to decide or
reply to — plus the 2–3 lines of context I need to respond intelligently.`;

const REFINE = `Draft a reply that confirms I'll take the data-prep piece, and asks for an
extra day on the review since I'm out Thursday.`;

let shotIndex = 0;
async function shot(page: Page, name: string) {
  shotIndex += 1;
  const nn = String(shotIndex).padStart(2, '0');
  await page.screenshot({ path: join(OUT_DIR, `${nn}-${name}.png`), fullPage: false });
  console.log(`  📷 ${nn}-${name}.png`);
}

test.beforeAll(() => {
  mkdirSync(OUT_DIR, { recursive: true });
});

test('capture: catch up on a Teams thread', async ({ page }) => {
  test.setTimeout(0);

  // 1 — Open the thread and launch Copilot.
  await page.goto('https://m365.cloud.microsoft/chat/');
  // TODO(verify): confirm the chat composer selector with `npm run codegen`.
  const composer = page.getByRole('textbox').first();
  await composer.waitFor({ state: 'visible' });
  await shot(page, 'open-thread');

  // 2 — Paste the prompt.
  await composer.click();
  await composer.fill(PROMPT);
  await shot(page, 'prompt-entered');

  await composer.press('Enter');
  // TODO(verify): pick a stable "response finished" signal.
  await page.waitForTimeout(8000);
  await shot(page, 'response');

  // 3 — Check the "asked of me" list against the thread (captured above).
  // 4 — Act without leaving the chat — draft the reply.
  await composer.click();
  await composer.fill(REFINE);
  await composer.press('Enter');
  await page.waitForTimeout(8000);
  await shot(page, 'drafted-reply');

  expect(shotIndex).toBeGreaterThanOrEqual(4);
});
