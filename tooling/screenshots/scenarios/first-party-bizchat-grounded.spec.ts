import { test, expect, type Page } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Scenario: "Find answers across your organization's content with BizChat"
 * (Stage 2 · First-Party Agents). Mirrors walkthroughs/first-party-bizchat-grounded.md.
 *
 * Output: ../../docs/screenshots/first-party-bizchat-grounded/{NN}-{name}.png
 *
 * ⚠️ SELECTORS ARE BEST-EFFORT. Verify with `npm run codegen` before a real run.
 *
 * NOTE: BizChat = Microsoft 365 Copilot Chat in Work mode, grounded on your org's
 * content graph. The signed-in account (from `npm run auth`) must have access to
 * the SharePoint / email / Teams content the answer draws from. Swap "[topic]"
 * for a real internal topic so the answer is genuinely grounded and cited.
 */

const SLUG = 'first-party-bizchat-grounded';
const OUT_DIR = join(__dirname, '..', '..', 'docs', 'screenshots', SLUG);

const PROMPT = `Find information about [topic] from across our company's SharePoint, emails, and Teams.
Summarize what you find and tell me where each piece of information came from.`;

const NARROW_SCOPE = `Only look in SharePoint sites related to [team / project name].`;

const FOLLOW_UP = `Who is the owner of that policy document and when was it last updated?`;

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

test('capture: find answers with BizChat', async ({ page }) => {
  test.setTimeout(0);

  // 1 — Open Microsoft 365 Copilot Chat (BizChat, Work mode).
  await page.goto('https://m365.cloud.microsoft/chat/');
  // TODO(verify): confirm the chat composer selector with `npm run codegen`.
  const composer = page.getByRole('textbox').first();
  await composer.waitFor({ state: 'visible' });
  await shot(page, 'open-copilot');

  // 2 — Ask your question in plain language.
  await composer.click();
  await composer.fill(PROMPT);
  await shot(page, 'prompt-entered');

  // 3 — Check the citations.
  await composer.press('Enter');
  // TODO(verify): pick a stable "response finished" signal.
  await page.waitForTimeout(8000);
  await shot(page, 'cited-answer');

  // 4 — Narrow the scope if needed.
  await composer.click();
  await composer.fill(NARROW_SCOPE);
  await composer.press('Enter');
  await page.waitForTimeout(8000);
  await shot(page, 'narrow-scope');

  // 5 — Ask a follow-up to go deeper.
  await composer.click();
  await composer.fill(FOLLOW_UP);
  await composer.press('Enter');
  await page.waitForTimeout(8000);
  await shot(page, 'follow-up');

  expect(shotIndex).toBeGreaterThanOrEqual(5);
});
