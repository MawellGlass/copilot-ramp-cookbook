import { test } from '@playwright/test';
import { existsSync } from 'node:fs';

/**
 * One-time login. Opens a real browser, parks on the M365 sign-in page, and
 * waits for YOU to finish logging in (username + password + MFA). When you're
 * sitting on the signed-in M365 home, hit ▶ Resume in the Playwright Inspector
 * and the authenticated session is written to .auth/state.json.
 *
 * The `capture` project reuses that file, so you only do this once (until it
 * expires). Re-run `npm run auth` if captures start showing a login screen.
 */
test('manual sign-in, then save the session', async ({ page }) => {
  // No timeout — you might take a minute or two to clear MFA.
  test.setTimeout(0);

  await page.goto('https://m365.cloud.microsoft/');

  // Hands control to you in the Playwright Inspector window.
  // Log in fully, land on the signed-in M365 home, THEN click Resume.
  await page.pause();

  await page.context().storageState({ path: '.auth/state.json' });

  if (existsSync('.auth/state.json')) {
    console.log('\n✅ Session saved to .auth/state.json — run `npm run capture`.\n');
  }
});
