import { test, expect, type Page } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Scenario: "Share and co-edit an AI output with Copilot Pages"
 * (Stage 2 · First-Party Agents). Mirrors walkthroughs/first-party-copilot-pages.md.
 *
 * Output: ../../docs/screenshots/first-party-copilot-pages/{NN}-{name}.png
 *
 * ⚠️ SELECTORS ARE BEST-EFFORT. Verify with `npm run codegen` before a real run.
 *
 * NOTE: this flow starts in Microsoft 365 Copilot Chat, then clicks "Edit in
 * Pages" on a response to spawn a Loop-based page. The "Edit in Pages" button and
 * the Pages canvas / Share controls all need selector verification with codegen.
 */

const SLUG = 'first-party-copilot-pages';
const OUT_DIR = join(__dirname, '..', '..', 'docs', 'screenshots', SLUG);

const PROMPT = `Summarize the state of [project] based on our recent emails and documents.
Give me a brief suitable for sharing with the team as a working document.`;

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

test('capture: share an output with Copilot Pages', async ({ page }) => {
  test.setTimeout(0);

  // 1 — Get a Copilot output worth keeping.
  await page.goto('https://m365.cloud.microsoft/chat/');
  // TODO(verify): confirm the chat composer selector with `npm run codegen`.
  const composer = page.getByRole('textbox').first();
  await composer.waitFor({ state: 'visible' });
  await composer.click();
  await composer.fill(PROMPT);
  await composer.press('Enter');
  // TODO(verify): pick a stable "response finished" signal.
  await page.waitForTimeout(8000);
  await shot(page, 'copilot-output');

  // 2 — Click "Edit in Pages" in the response toolbar.
  // TODO(verify): confirm the "Edit in Pages" control with `npm run codegen`.
  const editInPages = page.getByRole('button', { name: /edit in pages|pages/i }).first();
  await editInPages.click();
  await page.waitForTimeout(4000);
  await shot(page, 'edit-in-pages');

  // 3 — Review and clean up the page (it's fully editable).
  await shot(page, 'page-editing');

  // 4 — Share the page.
  // TODO(verify): confirm the Share control selector with `npm run codegen`.
  const share = page.getByRole('button', { name: /share/i }).first();
  await share.click();
  await page.waitForTimeout(2000);
  await shot(page, 'share-page');

  // 5 — Collaborate in real time (comments, edits, @mentions).
  await shot(page, 'collaborate');

  expect(shotIndex).toBeGreaterThanOrEqual(5);
});
