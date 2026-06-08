import { test, expect, type Page } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Scenario: "Adapt a document or message for a different audience" (Stage 1 · Copilot Chat).
 * Mirrors walkthroughs/chat-adapt-audience.md step-by-step.
 *
 * Output: ../../docs/screenshots/chat-adapt-audience/{NN}-{name}.png
 *
 * ⚠️ SELECTORS ARE BEST-EFFORT. Verify with `npm run codegen` before a real run.
 *
 * NOTE: paste the original content (the doc/email/summary to adapt) into the
 * composer ahead of the prompt, and swap the bracketed placeholders (audience,
 * outcome, tone, length) for real values before capturing.
 */

const SLUG = 'chat-adapt-audience';
const OUT_DIR = join(__dirname, '..', '..', 'docs', 'screenshots', SLUG);

const PROMPT = `Rewrite this [document / email / summary] for [target audience].

They care most about [outcome — e.g., cost and risk / speed to market / compliance].
- Adjust tone to be [more direct / less technical / more formal / more conversational]
- Remove or explain any jargon from the original
- Make the key ask or recommendation unmissable — put it first
- Target length: [3 bullet points / one page / 200 words]`;

const LEAD_FIRST = `Move the recommendation to the very first line.`;

const LENGTH_CUT = `Cut this to [word count] without losing the recommendation or the main supporting reason.`;

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

test('capture: adapt content for a different audience', async ({ page }) => {
  test.setTimeout(0);

  // 1 — Paste the original content into Copilot Chat.
  await page.goto('https://m365.cloud.microsoft/chat/');
  // TODO(verify): confirm the chat composer selector with `npm run codegen`.
  const composer = page.getByRole('textbox').first();
  await composer.waitFor({ state: 'visible' });
  await shot(page, 'open-copilot');

  // 2 — Fill in the prompt (audience + outcome + tone + length).
  await composer.click();
  await composer.fill(PROMPT);
  await shot(page, 'prompt-entered');

  await composer.press('Enter');
  // TODO(verify): pick a stable "response finished" signal.
  await page.waitForTimeout(8000);
  await shot(page, 'adapted');

  // 3 — Check the lead — move the recommendation first.
  await composer.click();
  await composer.fill(LEAD_FIRST);
  await composer.press('Enter');
  await page.waitForTimeout(8000);
  await shot(page, 'lead-first');

  // 4 — Check for leftover jargon (inline refine, folded into the next shot).
  // 5 — Run a length check.
  await composer.click();
  await composer.fill(LENGTH_CUT);
  await composer.press('Enter');
  await page.waitForTimeout(8000);
  await shot(page, 'length-cut');

  expect(shotIndex).toBeGreaterThanOrEqual(5);
});
