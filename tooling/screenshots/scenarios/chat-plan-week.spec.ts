import { test, expect, type Page } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Scenario: "Plan your week from your calendar and inbox" (Stage 1 · Copilot Chat).
 * Mirrors walkthroughs/chat-plan-week.md step-by-step.
 *
 * Output: ../../docs/screenshots/chat-plan-week/{NN}-{name}.png
 *
 * ⚠️ SELECTORS ARE BEST-EFFORT. Verify with `npm run codegen` before a real run.
 *
 * NOTE: this prompt grounds on your own calendar + inbox, so it needs a signed-in
 * account with a populated week (the auth state from `npm run auth`). Swap the
 * "[meeting name]" placeholder for a real meeting before the prep-item shot.
 */

const SLUG = 'chat-plan-week';
const OUT_DIR = join(__dirname, '..', '..', 'docs', 'screenshots', SLUG);

const PROMPT = `Look at my calendar and inbox for this week. Tell me:

1. My three most important commitments and what I need to be prepared for each
2. Any open threads or pending decisions I should close before Friday
3. One meeting or task I can safely deprioritize this week
4. Any back-to-backs or time crunches I should know about so I can plan around them`;

const MEETING_PREP = `What do I need to know for [meeting name] — who's attending, what's the agenda, any open items from before?`;

const FOCUS_BLOCK = `Which meeting on my calendar this week is least critical and could be declined or shortened?`;

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

test('capture: plan your week', async ({ page }) => {
  test.setTimeout(0);

  // 1 — Open Microsoft 365 Copilot Chat (grounded on calendar + inbox).
  await page.goto('https://m365.cloud.microsoft/chat/');
  // TODO(verify): confirm the chat composer selector with `npm run codegen`.
  const composer = page.getByRole('textbox').first();
  await composer.waitFor({ state: 'visible' });
  await shot(page, 'open-copilot');

  // 2 — Run the weekly-planning prompt.
  await composer.click();
  await composer.fill(PROMPT);
  await shot(page, 'prompt-entered');

  await composer.press('Enter');
  // TODO(verify): pick a stable "response finished" signal.
  await page.waitForTimeout(8000);
  await shot(page, 'weekly-brief');

  // 3 — Act on the prep items (drill into one meeting).
  await composer.click();
  await composer.fill(MEETING_PREP);
  await composer.press('Enter');
  await page.waitForTimeout(8000);
  await shot(page, 'meeting-prep');

  // 4 — Clear the open threads (offline action, no capture).
  // 5 — Protect a focus block.
  await composer.click();
  await composer.fill(FOCUS_BLOCK);
  await composer.press('Enter');
  await page.waitForTimeout(8000);
  await shot(page, 'focus-block');

  expect(shotIndex).toBeGreaterThanOrEqual(5);
});
