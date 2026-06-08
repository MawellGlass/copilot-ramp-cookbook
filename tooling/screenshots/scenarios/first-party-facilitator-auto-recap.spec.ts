import { test, expect, type Page } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Scenario: "Auto-recap every meeting with Facilitator" (Stage 2 · First-Party Agents).
 * Mirrors walkthroughs/first-party-facilitator-auto-recap.md step-by-step.
 *
 * Output: ../../docs/screenshots/first-party-facilitator-auto-recap/{NN}-{name}.png
 *
 * ⚠️ SURFACE + SELECTORS ARE BEST-EFFORT. Facilitator is an IN-MEETING agent: it
 * lives in a Teams meeting with collaborative notes / Facilitator enabled. There
 * is no clean headless path — capturing this realistically means joining a live
 * Teams meeting and driving the Facilitator panel by hand. Treat this spec as a
 * scaffold: verify every selector and the meeting surface with `npm run codegen`,
 * and expect to take some shots manually.
 * TODO(verify): goto() points at Teams; confirm the meeting URL / panel selectors.
 */

const SLUG = 'first-party-facilitator-auto-recap';
const OUT_DIR = join(__dirname, '..', '..', 'docs', 'screenshots', SLUG);

const CATCH_UP = `@Facilitator catch me up — what have I missed, and is there anything assigned to me so far?`;

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

test('capture: auto-recap with Facilitator', async ({ page }) => {
  test.setTimeout(0);

  // 1 — Start (or join) a Teams meeting with Facilitator / collaborative notes on.
  // TODO(verify): replace with the actual meeting join URL; confirm the notes panel.
  await page.goto('https://teams.microsoft.com/');
  await page.waitForLoadState('domcontentloaded');
  await shot(page, 'facilitator-on');

  // 2 — Let it work: the collaborative notes panel fills in as people talk.
  // TODO(verify): this is a live-meeting state; capture once notes are populating.
  await shot(page, 'live-notes');

  // 3 — Catch up any time by @mentioning Facilitator in the meeting chat.
  // TODO(verify): confirm the meeting-chat composer selector with `npm run codegen`.
  const composer = page.getByRole('textbox').first();
  await composer.waitFor({ state: 'visible' });
  await composer.click();
  await composer.fill(CATCH_UP);
  await composer.press('Enter');
  await page.waitForTimeout(8000);
  await shot(page, 'catch-up');

  // 4 — Use the auto-recap after the meeting ends (decisions + action items).
  // TODO(verify): navigate to the post-meeting recap / notes once the meeting wraps.
  await shot(page, 'recap');

  expect(shotIndex).toBeGreaterThanOrEqual(4);
});
