import { test, expect, type Page } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Scenario: "Catch up on a long email thread in seconds" (Stage 1 · Copilot Chat).
 * Mirrors walkthroughs/chat-email-chain-summary.md step-by-step.
 *
 * Output: ../../docs/screenshots/chat-email-chain-summary/{NN}-{name}.png
 *
 * ⚠️ SELECTORS ARE BEST-EFFORT. Verify with `npm run codegen` before a real run.
 *
 * NOTE: this prompt grounds on an email thread. The walkthrough's natural surface
 * is Copilot in Outlook; this batch targets Microsoft 365 Copilot Chat. To
 * capture a grounded answer here, paste the thread body into the composer ahead
 * of the prompt (the md describes exactly this fallback).
 * TODO(verify): if capturing inside Outlook instead, change goto() to the
 * Outlook reading-pane Copilot panel and re-pick selectors with codegen.
 */

const SLUG = 'chat-email-chain-summary';
const OUT_DIR = join(__dirname, '..', '..', 'docs', 'screenshots', SLUG);

const PROMPT = `Summarize this email thread:
- What's the core issue or decision being discussed?
- What options or positions have been raised?
- Where do things stand right now?
- Is anything being asked of me specifically?`;

const DIG_DEEPER = `Who is taking the position that [X]? Quote the specific message.`;

const REPLY = `Draft a short reply that [agrees / raises a concern / asks for clarification on X].
2-3 sentences, professional tone.`;

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

test('capture: catch up on an email thread', async ({ page }) => {
  test.setTimeout(0);

  // 1 — Open the thread (paste it into the composer for the chat-surface capture).
  await page.goto('https://m365.cloud.microsoft/chat/');
  // TODO(verify): confirm the chat composer selector with `npm run codegen`.
  const composer = page.getByRole('textbox').first();
  await composer.waitFor({ state: 'visible' });
  await shot(page, 'open-thread');

  // 2 — Type or paste the prompt.
  await composer.click();
  await composer.fill(PROMPT);
  await shot(page, 'prompt-entered');

  // 3 — Read the summary.
  await composer.press('Enter');
  // TODO(verify): pick a stable "response finished" signal.
  await page.waitForTimeout(8000);
  await shot(page, 'summary');

  // 4 — Dig deeper if needed.
  await composer.click();
  await composer.fill(DIG_DEEPER);
  await composer.press('Enter');
  await page.waitForTimeout(8000);
  await shot(page, 'dig-deeper');

  // 5 — Reply from the summary.
  await composer.click();
  await composer.fill(REPLY);
  await composer.press('Enter');
  await page.waitForTimeout(8000);
  await shot(page, 'drafted-reply');

  expect(shotIndex).toBeGreaterThanOrEqual(5);
});
