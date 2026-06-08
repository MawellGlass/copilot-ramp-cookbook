import { test, expect, type Page } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Scenario: "Draft an exec briefing from background materials" (Stage 1 · Copilot Chat).
 * Mirrors walkthroughs/chat-exec-briefing.md step-by-step.
 *
 * Output: ../../docs/screenshots/chat-exec-briefing/{NN}-{name}.png
 *
 * ⚠️ SELECTORS ARE BEST-EFFORT. Verify with `npm run codegen` before a real run.
 * A fabricated/wrong screenshot is worse than none.
 *
 * NOTE: this prompt grounds on source material (a doc, deck, or email thread).
 * Before capturing, paste the background content into the composer (or open the
 * doc in Copilot for Word) so the briefing has something to draw from. Swap the
 * "[audience]" placeholder for a real audience.
 */

const SLUG = 'chat-exec-briefing';
const OUT_DIR = join(__dirname, '..', '..', 'docs', 'screenshots', SLUG);

const PROMPT = `Based on [this document / the attached materials], draft a 5-point exec briefing for a
10-minute conversation with [audience / VP of Finance / the leadership team].
Lead with the business outcome.
Keep each point to one sentence.
Flag the one thing most likely to generate a question.`;

const REWRITE_LEAD = `Rewrite point 1 to lead with the outcome for [audience], not the activity.`;

const EXPAND_QUESTION = `Expand on the point most likely to generate pushback. What's the risk,
and what's the best short answer if they challenge it?`;

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

test('capture: draft an exec briefing', async ({ page }) => {
  test.setTimeout(0);

  // 1 — Open the source material / Copilot Chat.
  await page.goto('https://m365.cloud.microsoft/chat/');
  // TODO(verify): confirm the chat composer selector with `npm run codegen`.
  const composer = page.getByRole('textbox').first();
  await composer.waitFor({ state: 'visible' });
  await shot(page, 'open-copilot');

  // 2 — Paste the prompt with the audience filled in.
  await composer.click();
  await composer.fill(PROMPT);
  await shot(page, 'prompt-entered');

  // 3 — Check the lead. (The 5-point briefing returns here.)
  await composer.press('Enter');
  // TODO(verify): pick a stable "response finished" signal.
  await page.waitForTimeout(8000);
  await shot(page, 'briefing');

  // 3 (refine) — Rewrite point 1 to lead with the outcome.
  await composer.click();
  await composer.fill(REWRITE_LEAD);
  await composer.press('Enter');
  await page.waitForTimeout(8000);
  await shot(page, 'rewrite-lead');

  // 4 — Expand the "likely question".
  await composer.click();
  await composer.fill(EXPAND_QUESTION);
  await composer.press('Enter');
  await page.waitForTimeout(8000);
  await shot(page, 'expand-question');

  // 5 — Copy to meeting notes / invite (no UI capture needed).
  expect(shotIndex).toBeGreaterThanOrEqual(5);
});
