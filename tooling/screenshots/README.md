# Screenshot capture tool

Replicates Sean's loop: drive the **real** Copilot UI with Playwright from VS Code, snap numbered
screenshots, and drop them into the docs. Captured images — never mockups — are what make the
walkthroughs trustworthy.

## What it does

1. You log in to Microsoft 365 **once** in a real browser (handles MFA).
2. Playwright saves that authenticated session to `.auth/state.json`.
3. Each scenario script reuses the session, runs the walkthrough's steps in the live product, and
   saves `{NN}-{name}.png` files into `docs/screenshots/{slug}/` (the MkDocs-served folder).
4. You uncomment the matching embeds in the walkthrough — done.

## Prerequisites

- **Node.js 18+**
- **VS Code** with the **Playwright Test for VSCode** extension (`ms-playwright.playwright`) — lets you
  run/record scenarios and step through them with the Inspector.
- A Microsoft 365 account with a Copilot license.

## One-time setup

```bash
cd tooling/screenshots
npm install
npx playwright install chromium
```

## The capture loop

```bash
# 1. Log in once. A browser opens and parks on the M365 sign-in page.
#    Finish login + MFA, land on the signed-in M365 home, then click ▶ Resume
#    in the Playwright Inspector. Your session is saved to .auth/state.json.
npm run auth

# 2. Capture. Each scenario runs in a visible browser and writes numbered PNGs.
npm run capture
```

Output lands in `../../docs/screenshots/{slug}/` (the MkDocs-served `docs/screenshots/` folder), e.g.
`docs/screenshots/chat-meeting-followups/01-open-copilot.png`.

Then in the walkthrough (`docs/walkthroughs/{slug}.md`), reference them as
`../screenshots/{slug}/{NN}-{name}.png` under `## Screenshots`.

## Verifying selectors (important)

The Copilot DOM changes often, so the selectors in each `scenarios/*.spec.ts` are marked
`TODO(verify)`. The fastest fix is Playwright's recorder — click through the live UI and it writes
correct selectors for you:

```bash
npm run codegen
```

Paste the picked selectors into the scenario and re-run `npm run capture`.

## Adding a new scenario

1. Copy `scenarios/chat-meeting-followups.spec.ts` to `scenarios/{slug}.spec.ts`.
2. Set `SLUG` to match the walkthrough filename, update the prompts and steps.
3. Keep the `shot(page, 'name')` helper — it auto-numbers (`01-`, `02-`, …) so files sort correctly.
4. Run `npm run capture`, then embed the shots in `walkthroughs/{slug}.md`.

## Files

| File | Purpose |
|------|---------|
| `package.json` | npm scripts: `auth`, `capture`, `capture:headless`, `codegen` |
| `playwright.config.ts` | Two projects — `setup` (login) and `capture` (reuses the session) |
| `auth.setup.ts` | One-time manual login; saves `.auth/state.json` |
| `scenarios/*.spec.ts` | One file per walkthrough; the numbered `shot()` helper lives here |
| `.gitignore` | Keeps `node_modules/`, `.auth/`, and test artifacts out of git |

> **Never commit `.auth/state.json`** — it's a live session token. `.gitignore` already excludes it.
