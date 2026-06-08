import { test, expect, type Page } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Scenario: "Build a meeting agenda from context and notes" (Stage 1 · Copilot Chat).
 * Mirrors walkthroughs/chat-meeting-agenda.md step-by-step.
 *
 * Output: ../../docs/screenshots/chat-meeting-agenda/{NN}-{name}.png
 *
 * ⚠️ SELECTORS ARE BEST-EFFORT. Verify with `npm run codegen` before a real run.
 *
 * NOTE: this prompt works best when grounded on real context. Before capturing,
 * paste previous meeting notes / a project brief into the composer, and swap the
 * bracketed placeholders (meeting type, audience, topic, duration) for real values.
 */

const SLUG = 'chat-meeting-agenda';
const OUT_DIR = join(__dirname, '..', '..', 'docs', 'screenshots', SLUG);

const PROMPT = `I'm running a [30-minute / 60-minute] [project sync / stakeholder update / team standup]
with [audience] about [topic].

Based on [these notes / this background / the last time we met], draft an agenda with:
- Time slots for each item
- A one-line goal for each agenda item
- One "parking lot" bucket at the end for items we should defer

Total meeting time: [30 minutes].`;

const ADJUST_TIMING = `Shorten [item] to 5 minutes and redistribute the time to [other item].`;

const PRE_READS = `For each agenda item, suggest one piece of pre-read material from my notes that attendees should review.`;

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

test('capture: build a meeting agenda', async ({ page }) => {
  test.setTimeout(0);

  // 1 — Paste your context into the chat.
  await page.goto('https://m365.cloud.microsoft/chat/');
  // TODO(verify): confirm the chat composer selector with `npm run codegen`.
  const composer = page.getByRole('textbox').first();
  await composer.waitFor({ state: 'visible' });
  await shot(page, 'open-copilot');

  // 2 — Run the prompt with meeting type, audience, and time filled in.
  await composer.click();
  await composer.fill(PROMPT);
  await shot(page, 'prompt-entered');

  await composer.press('Enter');
  // TODO(verify): pick a stable "response finished" signal.
  await page.waitForTimeout(8000);
  await shot(page, 'agenda');

  // 3 — Adjust timing.
  await composer.click();
  await composer.fill(ADJUST_TIMING);
  await composer.press('Enter');
  await page.waitForTimeout(8000);
  await shot(page, 'adjust-timing');

  // 4 — Add pre-reads.
  await composer.click();
  await composer.fill(PRE_READS);
  await composer.press('Enter');
  await page.waitForTimeout(8000);
  await shot(page, 'pre-reads');

  // 5 — Paste into the meeting invite (no UI capture needed).
  expect(shotIndex).toBeGreaterThanOrEqual(5);
});
