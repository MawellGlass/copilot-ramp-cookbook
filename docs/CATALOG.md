# Use-Case Catalog

The full backlog across the journey. Each entry is a **stub** (title · value · sample prompt) until it
graduates into a rich walkthrough under `walkthroughs/`. This is the "large swathe of use cases" — broad
now, deepened on a cadence.

Filter mentally by **Stage** (the heading) and **For:** (the role tag). On the live site these become
clickable filter chips.

Legend — `★` = recommended starting point for that stage · `→ walkthrough` = already fully expanded.

---

## Stage 1 · Copilot Chat
_Everyone starts here. Goal: a daily habit and a first "wow."_

### ★ Turn a meeting into tracked follow-ups → walkthrough
**For:** end-user, champion · `status: walkthrough`
Decisions, owners, and due dates captured in 5 minutes instead of re-watching the recording.
**Sample prompt:** `Summarize "[meeting]" — decisions, action items with owners + due dates, open questions. Table format.`
→ Fully written: `walkthroughs/chat-meeting-followups.md`

### Catch up on a Teams thread you were @mentioned in → walkthrough
**For:** end-user · `status: walkthrough`
Get the gist and what's being asked of you without scrolling 80 messages.
**Sample prompt:** `Summarize this chat and tell me specifically what's being asked of me and by when.`
→ Fully written: `walkthroughs/chat-catch-up-thread.md`

### Draft a status update from your week's activity → walkthrough
**For:** end-user, manager · `status: walkthrough`
Turn a week of emails, chats, and meetings into a crisp update.
**Sample prompt:** `Based on my last 5 working days of email and Teams activity, draft a 5-bullet status update for my manager.`
→ Fully written: `walkthroughs/chat-weekly-status.md`

### Rewrite an email for a tougher audience → walkthrough
**For:** end-user · `status: walkthrough`
Make a rambling draft tighter, clearer, and appropriately diplomatic.
**Sample prompt:** `Rewrite this email to be 40% shorter, more direct, and polite to a skeptical exec. Keep the ask obvious.`
→ Fully written: `walkthroughs/chat-rewrite-email.md`

### Get up to speed on a long document fast → walkthrough
**For:** end-user, manager · `status: walkthrough`
A 30-page doc reduced to what matters for *your* role.
**Sample prompt:** `Summarize this document for a [sales engineer]. What are the 3 things I most need to know and any risks?`
→ Fully written: `walkthroughs/chat-document-catch-up.md`

### Prep for a 1:1 in two minutes → walkthrough
**For:** manager, end-user · `status: walkthrough`
Walk into a 1:1 with talking points pulled from recent shared work.
**Sample prompt:** `Help me prep for my 1:1 with [name]. Summarize our recent threads and suggest 3 topics to raise.`
→ Fully written: `walkthroughs/chat-prep-1on1.md`

### Build a first-draft project plan → walkthrough
**For:** champion, manager · `status: walkthrough`
Go from a blank page to a structured plan you can edit.
**Sample prompt:** `Draft a project plan for [goal]: phases, milestones, owners, and risks. Table format.`
→ Fully written: `walkthroughs/chat-project-plan.md`

### Champion kit: run a "Prompt of the Day" for your team → walkthrough
**For:** champion · `status: walkthrough`
A repeatable adoption ritual that builds the habit across a team.
**Sample prompt:** `Give me 5 starter prompts a [marketing] team could use daily, each with the business value in one line.`
→ Fully written: `walkthroughs/chat-prompt-of-the-day.md`

---

## Stage 2 · First-Party Agents
_Use what Microsoft already built. Goal: experience delegation before building anything._

> **Start with the roster.** Microsoft bundles a set of prebuilt agents into the M365 Copilot license —
> each tuned for a specific job. The overview page enumerates every one with its use case so you delegate
> to the right agent instead of prompting from scratch.

### The first-party agents included with your M365 Copilot license → walkthrough
**For:** end-user, champion, manager, maker, it-admin · `status: walkthrough`
The field guide to the whole roster — what each built-in agent (Researcher, Analyst, Facilitator, Interpreter, Project Manager, and more) is for, and which to open first.
**Sample prompt:** `I need to [task]. Which built-in M365 Copilot agent is built for this, and how should I phrase the ask?`
→ Fully written: `walkthroughs/first-party-agents-overview.md`

### ★ Auto-recap every meeting with Facilitator → walkthrough
**For:** end-user, champion · `status: walkthrough`
The Facilitator agent generates recaps and follow-ups automatically — the hands-free version of the Stage 1 win.
**Sample prompt:** `(In a Teams meeting) @Facilitator catch me up on what I missed and list open action items.`
→ Fully written: `walkthroughs/first-party-facilitator-auto-recap.md`

### Deep-dive a topic with Researcher → walkthrough
**For:** end-user, manager, maker · `status: walkthrough`
Multi-step research with sources, synthesized into a brief.
**Sample prompt:** `@Researcher build a brief on [topic]: current state, key players, and what changed in the last 6 months. Cite sources.`
→ Fully written: `walkthroughs/first-party-researcher-deep-dive.md`

### Analyze a dataset with Analyst → walkthrough
**For:** manager, maker · `status: walkthrough`
Ask questions of a spreadsheet in natural language and get charts back.
**Sample prompt:** `@Analyst from this sales file, show the top 5 products by margin and the month-over-month trend.`
→ Fully written: `walkthroughs/first-party-analyst-dataset.md`

### Translate a conversation in real time with Interpreter → walkthrough
**For:** end-user · `status: walkthrough`
Run a cross-language meeting without a human interpreter.
**Sample prompt:** `(In a meeting) @Interpreter translate between English and Spanish for this call.`
→ Fully written: `walkthroughs/first-party-interpreter-live-translation.md`

### Keep a project on track with Project Manager agent → walkthrough
**For:** champion, manager · `status: walkthrough`
Let the agent track tasks, nudge owners, and surface slippage.
**Sample prompt:** `@Project Manager track the action items from this plan and flag anything at risk of slipping.`
→ Fully written: `walkthroughs/first-party-project-manager.md`

### Agents in Channels: post team-wide answers → walkthrough
**For:** champion, it-admin · `status: walkthrough`
Drop a shared agent into a channel so the whole team can self-serve.
**Sample prompt:** `(In a channel) @[agent] what's our current onboarding checklist for new hires?`
→ Fully written: `walkthroughs/first-party-agents-in-channels.md`

### Surface adoption signals with Workforce/Workplace insights → walkthrough
**For:** champion, manager · `status: walkthrough`
Understand how your team is actually using Copilot to target enablement.
**Sample prompt:** `Where is my team getting the most value from Copilot, and where are they underusing it?`
→ Fully written: `walkthroughs/first-party-workforce-insights.md`

### Agents in Communities: shared answers in Viva Engage → walkthrough
**For:** champion, it-admin · `status: walkthrough`
Put a shared agent where a broad community already gathers, so common questions self-serve.
**Sample prompt:** `(In a Viva Engage community) @[agent] what's our policy on [topic]?`
→ Fully written: `walkthroughs/first-party-agents-in-communities.md`

### Upskill in the flow of work with the Learning agent → walkthrough
**For:** end-user, champion · `status: walkthrough`
Surface the right learning content (including LinkedIn Learning) at the moment a skill is needed.
**Sample prompt:** `I need to get up to speed on [skill] for a project next week — point me to the right learning.`
→ Fully written: `walkthroughs/first-party-learning-agent.md`

### Answer routine HR/IT questions with Employee Self-Service → walkthrough
**For:** end-user, it-admin · `status: walkthrough`
Benefits, policies, and "how do I…" answered from approved sources — no ticket required.
**Sample prompt:** `How much PTO do I have left and how do I request it?`
→ Fully written: `walkthroughs/first-party-employee-self-service.md`

---

## Stage 3 · Cowork
_Let Copilot run multi-step work for you. Goal: comfort delegating whole tasks, not single prompts._

### ★ Hand off an end-to-end task to Cowork → walkthrough
**For:** champion, end-user · `status: walkthrough`
Describe an outcome and let Cowork plan and execute the steps across your M365 tools.
**Sample prompt:** `Pull last month's support emails, group them by theme, and draft a summary deck of the top 5 issues.`
→ Fully written: `walkthroughs/cowork-end-to-end-task.md`

### Stand up a recurring weekly digest → walkthrough
**For:** champion, manager · `status: walkthrough`
A scheduled task that compiles and sends a digest every Monday.
**Sample prompt:** `Every Monday at 8am, summarize new high-priority emails and Teams since Friday and send me a digest.`
→ Fully written: `walkthroughs/cowork-recurring-weekly-digest.md`

### Multi-document synthesis into a single brief → walkthrough
**For:** maker, manager · `status: walkthrough`
Several source files reconciled into one coherent output.
**Sample prompt:** `Read these 4 documents and produce one reconciled brief, flagging where they disagree.`
→ Fully written: `walkthroughs/cowork-multi-doc-synthesis.md`

### Build a deck from raw notes → walkthrough
**For:** end-user, champion · `status: walkthrough`
Messy notes → a structured, presentable slide deck.
**Sample prompt:** `Turn these meeting notes into a 6-slide deck: problem, options, recommendation, plan, risks, ask.`
→ Fully written: `walkthroughs/cowork-deck-from-notes.md`

### Champion kit: a "Cowork recipe" library for your org → walkthrough
**For:** champion · `status: walkthrough`
Curate reusable multi-step tasks the whole team can rerun (à la coworkcookbook.com).
**Sample prompt:** `Draft 5 reusable Cowork task descriptions for a [finance] team, each with the inputs it needs.`
→ Fully written: `walkthroughs/cowork-recipe-library.md`

---

## Stage 4 · Agent Builder
_Build simple declarative agents inside M365 Copilot. Goal: first taste of *making*, not just using._

### ★ Build a "team knowledge" agent over a SharePoint site → walkthrough
**For:** maker, champion · `status: walkthrough`
Point a declarative agent at your docs so the team can ask questions of them.
**Sample prompt (config):** `Create an agent grounded on [SharePoint site] that answers policy questions and always cites the source doc.`
→ Fully written: `walkthroughs/agent-builder-team-knowledge.md`

### Give your agent a focused persona and instructions → walkthrough
**For:** maker · `status: walkthrough`
Shape tone, scope, and refusal behavior with natural-language instructions.
**Sample prompt (config):** `Instructions: You are an onboarding buddy. Only answer from the HR site. If unsure, point to the HR team.`
→ Fully written: `walkthroughs/agent-builder-persona-instructions.md`

### Add starter prompts so users know what to ask → walkthrough
**For:** maker, champion · `status: walkthrough`
Lower the blank-box problem with suggested questions.
**Sample prompt (config):** `Add 4 starter prompts a new hire would ask in their first week.`
→ Fully written: `walkthroughs/agent-builder-starter-prompts.md`

### Share an agent with a team and gather feedback → walkthrough
**For:** champion, it-admin · `status: walkthrough`
Pilot with a small group and iterate on the instructions.
**Sample prompt:** `Draft a short message announcing the [onboarding] agent and asking 5 pilots for feedback.`
→ Fully written: `walkthroughs/agent-builder-share-and-feedback.md`

### Decide: declarative agent vs. full Copilot Studio → walkthrough
**For:** maker, it-admin · `status: walkthrough`
Know when you've outgrown Agent Builder and need Studio's power.
**Sample prompt:** `Compare what I can do in Agent Builder vs Copilot Studio for [my use case]. When should I graduate?`
→ Fully written: `walkthroughs/agent-builder-vs-studio.md`

---

## Stage 5 · Copilot Studio
_Build real, production-grade agents. The destination._

### ★ Build your first Studio agent with a knowledge source + topic → walkthrough
**For:** maker · `status: walkthrough`
Go beyond declarative: custom topics, structured conversations, and richer grounding.
**Sample prompt:** `Outline a Copilot Studio agent for [use case]: knowledge sources, 3 key topics, and the happy-path conversation.`
→ Fully written: `walkthroughs/studio-first-agent.md`

### Connect an agent to a system with a connector / action → walkthrough
**For:** maker, it-admin · `status: walkthrough`
Let the agent *do* things — look up an order, create a ticket — via actions.
**Sample prompt:** `Design the action flow for an agent that looks up an order status from [system] and replies to the customer.`
→ Fully written: `walkthroughs/studio-connector-action.md`

### Add an MCP / tool integration to your agent → walkthrough
**For:** maker · `status: walkthrough`
Extend the agent with external tools (the pattern Sean's F&O MCP demo uses).
**Sample prompt:** `What MCP tools would a [supply chain] agent need, and what should each one do?`
→ Fully written: `walkthroughs/studio-mcp-tool-integration.md`

### Publish your agent to Teams and the web → walkthrough
**For:** maker, it-admin · `status: walkthrough`
Ship the agent to where users already are.
**Sample prompt:** `Walk me through the publish + governance checklist before releasing a Studio agent to 500 users.`
→ Fully written: `walkthroughs/studio-publish.md`

### Govern and monitor agents at scale → walkthrough
**For:** it-admin · `status: walkthrough`
ALM, analytics, and guardrails for a fleet of agents.
**Sample prompt:** `What should I monitor weekly across my published Copilot Studio agents, and what are the red flags?`
→ Fully written: `walkthroughs/studio-govern-monitor.md`

### Measure ROI and build the business case → walkthrough
**For:** manager, champion · `status: walkthrough`
Tie agent usage to outcomes to justify and expand the program.
**Sample prompt:** `Help me build an ROI model for our [support] agent: inputs, assumptions, and the metrics to track.`
→ Fully written: `walkthroughs/studio-roi-business-case.md`

---

_Count: 5 stages, ~35 use cases, spanning all 5 roles. **The catalog is now fully written — 35 of ~35
full walkthroughs, 0 stubs remaining.** Every entry across all five stages is a rich, template-locked
walkthrough with screenshot scaffolding and grounded resource links. The **flagship spine** (all five ★
starters) anchors the journey end-to-end; **Stage 2 is fully written** (the roster overview plus a
dedicated page for every Microsoft-built agent — Researcher, Analyst, Facilitator, Interpreter, Project
Manager, Agents in Channels, Agents in Communities, Workforce insights, Learning, Employee Self-Service);
and the final five (1 Chat champion ritual, 1 Cowork recipe library, 1 Agent Builder pilot, 2 Studio
maker/admin pages) close out the backlog. Next milestone is **Phase 7 · Go public** (MkDocs Material +
GitHub Pages) and the screenshot-capture pass._
