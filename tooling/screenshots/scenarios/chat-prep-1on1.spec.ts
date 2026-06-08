import { test, expect, type Page } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Scenario: "Prep for a 1:1 in two minutes" (Stage 1 · Copilot Chat).
 * Mirrors walkthroughs/chat-prep-1on1.md step-by-step.
 *
 * Output: ../../docs/screenshots/chat-prep-1on1/{NN}-{name}.png
 * (relative to this file → lands in docs/screenshots/, which MkDocs serves and
 *  the walkthrough references as ../screenshots/{slug}/{NN}-{name}.png)
 *
 * ⚠️ SELECTORS ARE BEST-EFFORT. The M365 Copilot DOM changes often. Before a
 * real capture run, verify each selector with `npm run codegen` (Playwright
 * picks them for you by clicking the live UI) and swap in whatever is current.
 * Per the content model: a fabricated/wrong screenshot is worse than none.
 *
 * NOTE: this prompt grounds on your shared email + Teams activity with a real
 * person. Swap "[name]" for a real colleague before capturing so the recap has
 * something to draw from.
 */

const SLUG = 'chat-prep-1on1';
const OUT_DIR = join(__dirname, '..', '..', 'docs', 'screenshots', SLUG);

const PROMPT = `Help me prep for my 1:1 with [name]. Summarize what we've been working on together
over the last two weeks across email and Teams, flag anything still open or waiting
on either of us, and suggest 3 topics worth raising. Keep it to half a screen.`;

const REFINE = `They mentioned feeling stretched last time. Add a check-in question about
workload, and reorder the topics so the blocker we share is first.`;

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

test('capture: prep for a 1:1', async ({ page }) => {
  // Capturing is hands-on; give yourself room to nudge the UI between shots.
  test.setTimeout(0);

  // 1 — Open Copilot and paste the prompt with their name.
  await page.goto('https://m365.cloud.microsoft/chat/');
  // TODO(verify): confirm the chat composer selector with `npm run codegen`.
  const composer = page.getByRole('textbox').first();
  await composer.waitFor({ state: 'visible' });
  await shot(page, 'open-copilot');

  // (type the prompt — don't send yet — capture the typed state)
  await composer.click();
  await composer.fill(PROMPT);
  await shot(page, 'prompt-entered');

  // 2 — Read the recap, the open items, and the suggested topics.
  await composer.press('Enter');
  // TODO(verify): pick a stable "response finished" signal (e.g. a copy button
  // on the last message, or the stop-generating button disappearing).
  await page.waitForTimeout(8000);
  await shot(page, 'response');

  // 3 — Sanity-check the "open / waiting on" list (captured in the response above).
  // 4 — Sharpen it for this specific conversation.
  await composer.click();
  await composer.fill(REFINE);
  await composer.press('Enter');
  await page.waitForTimeout(8000);
  await shot(page, 'refined');

  expect(shotIndex).toBeGreaterThanOrEqual(4);
});
