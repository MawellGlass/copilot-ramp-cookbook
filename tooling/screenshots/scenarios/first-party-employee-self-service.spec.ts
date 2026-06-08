import { test, expect, type Page } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Scenario: "Answer routine HR and IT questions with Employee Self-Service"
 * (Stage 2 · First-Party Agents). Mirrors walkthroughs/first-party-employee-self-service.md.
 *
 * Output: ../../docs/screenshots/first-party-employee-self-service/{NN}-{name}.png
 *
 * ⚠️ SURFACE + SELECTORS ARE BEST-EFFORT. The Employee Self-Service agent is a
 * tenant-specific prebuilt agent grounded on your org's approved HR/IT sources.
 * It lives in the Microsoft 365 Copilot agent rail / Agent Store, so the answers
 * only appear in a tenant where it's enabled and grounded.
 * TODO(verify): goto() opens the Copilot app; select the Employee Self-Service
 * agent from the agent rail (or its deep link) before sending — confirm with
 * `npm run codegen`.
 */

const SLUG = 'first-party-employee-self-service';
const OUT_DIR = join(__dirname, '..', '..', 'docs', 'screenshots', SLUG);

const PROMPT = `How much PTO do I have left, what's the policy on carrying it over, and how do I
request time off? Link me to the source for each so I can double-check.`;

const ESCALATE = `This is a non-standard situation — [briefly describe]. Who's the right person
or team to take this to, and what should I include when I reach out?`;

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

test('capture: Employee Self-Service answers', async ({ page }) => {
  test.setTimeout(0);

  // 1 — Open Employee Self-Service and ask plainly.
  await page.goto('https://m365.cloud.microsoft/chat/');
  // TODO(verify): select the Employee Self-Service agent from the agent rail first,
  // then confirm its composer selector with `npm run codegen`.
  const composer = page.getByRole('textbox').first();
  await composer.waitFor({ state: 'visible' });
  await shot(page, 'open-agent');

  await composer.click();
  await composer.fill(PROMPT);
  await composer.press('Enter');
  // TODO(verify): pick a stable "response finished" signal.
  await page.waitForTimeout(8000);

  // 2 — Read the answer and the source.
  await shot(page, 'answer-with-source');

  // 3 — Take the next action inline (route to the request form / right team).
  await shot(page, 'take-action');

  // 4 — Escalate cleanly when it's not routine.
  await composer.click();
  await composer.fill(ESCALATE);
  await composer.press('Enter');
  await page.waitForTimeout(8000);
  await shot(page, 'escalate');

  expect(shotIndex).toBeGreaterThanOrEqual(4);
});
