import { test, expect, type Page } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Scenario: "Turn a meeting into tracked follow-ups" (Stage 1 · Copilot Chat).
 * Mirrors walkthroughs/chat-meeting-followups.md step-by-step.
 *
 * Output: ../../screenshots/chat-meeting-followups/{NN}-{name}.png
 * (relative to this file → lands in the repo's top-level screenshots/ folder)
 *
 * ⚠️ SELECTORS ARE BEST-EFFORT. The M365 Copilot DOM changes often. Before a
 * real capture run, verify each selector with `npm run codegen` (Playwright
 * picks them for you by clicking the live UI) and swap in whatever is current.
 * Per the content model: a fabricated/wrong screenshot is worse than none.
 */

const SLUG = 'chat-meeting-followups';
const OUT_DIR = join(__dirname, '..', '..', 'screenshots', SLUG);

const PROMPT = `Summarize the meeting "[meeting name]" from today. Give me:
- Decisions made
- Action items, each with an owner and a due date
- Any open questions that were not resolved
Format the action items as a table I can paste into an email.`;

const REFINE = `Any action item without a due date — set it to end of this week.
And the second item should be owned by Priya, not me.`;

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

test('capture: meeting follow-ups', async ({ page }) => {
  // Capturing is hands-on; give yourself room to nudge the UI between shots.
  test.setTimeout(0);

  // 1 — Open Copilot Chat.
  await page.goto('https://m365.cloud.microsoft/chat/');
  // TODO(verify): confirm the chat composer selector with `npm run codegen`.
  const composer = page.getByRole('textbox').first();
  await composer.waitFor({ state: 'visible' });
  await shot(page, 'open-copilot');

  // 2 — Type the prompt (don't send yet — capture the typed state).
  await composer.click();
  await composer.fill(PROMPT);
  await shot(page, 'prompt-entered');

  // 3 — Send and wait for the response to settle, then capture it.
  await composer.press('Enter');
  // TODO(verify): pick a stable "response finished" signal (e.g. a copy button
  // on the last message, or the stop-generating button disappearing).
  await page.waitForTimeout(8000);
  await shot(page, 'response');

  // 4 — Refine the table in place.
  await composer.click();
  await composer.fill(REFINE);
  await composer.press('Enter');
  await page.waitForTimeout(8000);
  await shot(page, 'refined-table');

  expect(shotIndex).toBeGreaterThanOrEqual(4);
});
