import { defineConfig } from '@playwright/test';

/**
 * Two-project flow:
 *   setup   — you log in to Microsoft 365 ONCE (handles MFA in a real browser),
 *             and the authenticated session is saved to .auth/state.json.
 *   capture — every scenario reuses that saved session, so no login prompts.
 *
 * Run `npm run auth` first, then `npm run capture`. Re-run auth whenever the
 * saved session expires (you'll see a login screen in the captured shots).
 */
export default defineConfig({
  testDir: './scenarios',
  // Capturing is a human-in-the-loop, visual task — keep it serial and visible.
  workers: 1,
  fullyParallel: false,
  reporter: 'list',
  use: {
    headless: false,
    viewport: { width: 1440, height: 900 },
    // Crisp 2x screenshots for retina-quality docs.
    deviceScaleFactor: 2,
    storageState: '.auth/state.json',
    baseURL: 'https://m365.cloud.microsoft/',
  },
  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
      // The login run must NOT try to load a (not-yet-existing) saved session.
      use: { storageState: undefined },
    },
    {
      name: 'capture',
      testIgnore: /auth\.setup\.ts/,
      dependencies: ['setup'],
    },
  ],
});
