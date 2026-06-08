# Screenshot capture status

Tracks the 69 walkthroughs that currently lack live screenshots. We add Playwright specs and
staged (commented-out) embeds in small queued batches; **live capture is a human step**
(`npm run auth` → `npm run capture` → `npm run codegen`).

Legend: ☐ = not done · ☑ = done

Columns:

- **spec authored** — `tooling/screenshots/scenarios/{slug}.spec.ts` created from the
  `chat-meeting-followups` template (agent ticks this).
- **embeds staged** — the `## Screenshots` block in `docs/walkthroughs/{slug}.md` rewritten with the
  standard intro line + numbered captions, embeds wrapped in a `<!-- SCREENSHOTS PENDING CAPTURE -->`
  comment so nothing renders broken (agent ticks this).
- **captured (human)** — a maintainer ran `npm run capture` and the PNGs exist in
  `docs/screenshots/{slug}/` (human ticks this).
- **embeds live** — a maintainer uncommented the embeds in the walkthrough (human ticks this).

> The agent NEVER ticks the last two columns and NEVER creates or claims to have captured PNGs.
>
> **Exception (live-capture session):** Under explicit user direction, captures for
> `chat-meeting-followups`, `chat-adapt-audience`, `chat-meeting-agenda`, `chat-exec-briefing`,
> `chat-email-chain-summary`, and `chat-catch-up-thread` were taken directly from the signed-in
> Microsoft 365 Copilot session in the demo tenant and the embeds published. The Stage 2 first-party
> walkthroughs `first-party-bizchat-grounded` (5 shots) and `first-party-copilot-pages` (4 shots)
> were likewise captured live from BizChat / Copilot Pages and published. `first-party-planner-agent`
> (4 shots) was captured live with the Planner (Frontier) agent and published. These rows are ticked
> through all four columns.

| slug | stage | spec authored | embeds staged | captured (human) | embeds live |
|------|-------|:-------------:|:-------------:|:----------------:|:-----------:|
| agent-builder-faq-agent | agent-builder | ☐ | ☐ | ☐ | ☐ |
| agent-builder-meeting-prep-agent | agent-builder | ☐ | ☐ | ☐ | ☐ |
| agent-builder-onboarding-agent | agent-builder | ☐ | ☐ | ☐ | ☐ |
| agent-builder-research-librarian | agent-builder | ☐ | ☐ | ☐ | ☐ |
| agent-builder-sprint-review-summarizer | agent-builder | ☐ | ☐ | ☐ | ☐ |
| agent-builder-voice-content-coach | agent-builder | ☐ | ☐ | ☐ | ☐ |
| agent-builder-voice-of-customer | agent-builder | ☐ | ☐ | ☐ | ☐ |
| chat-adapt-audience | chat | ☑ | ☑ | ☑ | ☑ |
| chat-catch-up-thread | chat | ☑ | ☑ | ☑ | ☑ |
| chat-email-chain-summary | chat | ☑ | ☑ | ☑ | ☑ |
| chat-exec-briefing | chat | ☑ | ☑ | ☑ | ☑ |
| chat-meeting-agenda | chat | ☑ | ☑ | ☑ | ☑ |
| chat-meeting-followups | chat | ☑ | ☑ | ☑ | ☑ |
| chat-plan-week | chat | ☑ | ☑ | ☐ | ☐ |
| chat-prep-1on1 | chat | ☑ | ☑ | ☐ | ☐ |
| cowork-competitive-comparison | cowork | ☐ | ☐ | ☐ | ☐ |
| cowork-customer-health-digest | cowork | ☐ | ☐ | ☐ | ☐ |
| cowork-hiring-loop | cowork | ☐ | ☐ | ☐ | ☐ |
| cowork-incident-postmortem | cowork | ☐ | ☐ | ☐ | ☐ |
| cowork-market-research-brief | cowork | ☐ | ☐ | ☐ | ☐ |
| cowork-onboarding-plan | cowork | ☐ | ☐ | ☐ | ☐ |
| cowork-qbr-prep-cycle | cowork | ☐ | ☐ | ☐ | ☐ |
| cowork-rfp-response | cowork | ☐ | ☐ | ☐ | ☐ |
| first-party-agents-in-channels | first-party | ☐ | ☐ | ☐ | ☐ |
| first-party-agents-in-communities | first-party | ☐ | ☐ | ☐ | ☐ |
| first-party-bizchat-grounded | first-party | ☑ | ☑ | ☑ | ☑ |
| first-party-career-self-assessment | first-party | ☐ | ☐ | ☐ | ☐ |
| first-party-copilot-pages | first-party | ☑ | ☑ | ☑ | ☑ |
| first-party-employee-self-service | first-party | ☑ | ☑ | ☐ | ☐ |
| first-party-facilitator-auto-recap | first-party | ☑ | ☑ | ☐ | ☐ |
| first-party-idea-coach-proposal | first-party | ☐ | ☐ | ☐ | ☐ |
| first-party-interpreter-live-translation | first-party | ☐ | ☐ | ☐ | ☐ |
| first-party-planner-agent | first-party | ☑ | ☑ | ☑ | ☑ |
| first-party-project-manager | first-party | ☐ | ☐ | ☐ | ☐ |
| first-party-sales-agent-brief | first-party | ☐ | ☐ | ☐ | ☐ |
| first-party-skills-stretch-assignment | first-party | ☐ | ☐ | ☐ | ☐ |
| first-party-workforce-insights | first-party | ☐ | ☐ | ☐ | ☐ |
| foundry-ab-shadow-deploy | foundry | ☐ | ☐ | ☐ | ☐ |
| foundry-autonomous-orchestration | foundry | ☐ | ☐ | ☐ | ☐ |
| foundry-cost-optimization | foundry | ☐ | ☐ | ☐ | ☐ |
| foundry-evaluate-monitor | foundry | ☐ | ☐ | ☐ | ☐ |
| foundry-fine-tune-serve | foundry | ☐ | ☐ | ☐ | ☐ |
| foundry-first-agent | foundry | ☐ | ☐ | ☐ | ☐ |
| foundry-govern-secure | foundry | ☐ | ☐ | ☐ | ☐ |
| foundry-graduate-from-studio | foundry | ☐ | ☐ | ☐ | ☐ |
| foundry-mcp-tools | foundry | ☐ | ☐ | ☐ | ☐ |
| foundry-red-team-eval | foundry | ☐ | ☐ | ☐ | ☐ |
| studio-authentication | studio | ☐ | ☐ | ☐ | ☐ |
| studio-autonomous-triggers | studio | ☐ | ☐ | ☐ | ☐ |
| studio-fabric-agent | studio | ☐ | ☐ | ☐ | ☐ |
| studio-functional-engineering-oncall | studio | ☐ | ☐ | ☐ | ☐ |
| studio-functional-events-coordination | studio | ☐ | ☐ | ☐ | ☐ |
| studio-functional-field-service-triage | studio | ☐ | ☐ | ☐ | ☐ |
| studio-functional-finance-budget-qa | studio | ☐ | ☐ | ☐ | ☐ |
| studio-functional-finance-expense | studio | ☐ | ☐ | ☐ | ☐ |
| studio-functional-hr-onboarding | studio | ☐ | ☐ | ☐ | ☐ |
| studio-functional-hr-policy-faq | studio | ☐ | ☐ | ☐ | ☐ |
| studio-functional-it-access-request | studio | ☐ | ☐ | ☐ | ☐ |
| studio-functional-it-helpdesk | studio | ☐ | ☐ | ☐ | ☐ |
| studio-functional-legal-compliance | studio | ☐ | ☐ | ☐ | ☐ |
| studio-functional-legal-contract | studio | ☐ | ☐ | ☐ | ☐ |
| studio-functional-marketing-campaign | studio | ☐ | ☐ | ☐ | ☐ |
| studio-functional-procurement-sourcing | studio | ☐ | ☐ | ☐ | ☐ |
| studio-functional-sales-intel | studio | ☐ | ☐ | ☐ | ☐ |
| studio-functional-sales-proposal | studio | ☐ | ☐ | ☐ | ☐ |
| studio-functional-support-deflection | studio | ☐ | ☐ | ☐ | ☐ |
| studio-multi-turn-conversation | studio | ☐ | ☐ | ☐ | ☐ |
| studio-power-automate-flow | studio | ☐ | ☐ | ☐ | ☐ |
| studio-test-evaluate | studio | ☐ | ☐ | ☐ | ☐ |

**Totals:** 69 pending · agent-builder 7 · chat 8 · cowork 8 · first-party 14 · foundry 10 · studio 22.

_Image-backed walkthroughs already complete (not tracked here): agent-builder-persona-instructions,
agent-builder-share-and-feedback, agent-builder-starter-prompts, agent-builder-team-knowledge,
agent-builder-vs-studio, chat-brainstorm, chat-document-catch-up, chat-project-plan,
chat-prompt-of-the-day, chat-rewrite-email, chat-weekly-status, cowork-deck-from-notes,
cowork-end-to-end-task, cowork-multi-doc-synthesis, cowork-recipe-library,
cowork-recurring-weekly-digest, first-party-agents-overview, first-party-analyst-dataset,
first-party-learning-agent, first-party-researcher-deep-dive, studio-connector-action,
studio-first-agent, studio-govern-monitor, studio-mcp-tool-integration, studio-publish,
studio-roi-business-case (26 total)._
