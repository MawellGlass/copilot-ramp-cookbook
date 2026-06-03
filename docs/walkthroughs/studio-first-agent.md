---
title: Build your first Studio agent with a knowledge source + topic
stage: studio
roles: [maker]
tags: [copilot-studio, topics, knowledge, low-code, destination]
level: advanced
time: 45 min
status: walkthrough
prereqs: [copilot-studio-access, knowledge-source, publish-target]
updated: 2026-06-03
---

# Build your first Studio agent with a knowledge source + topic

> **One-line value.** Go beyond answering questions — build a real agent with designed conversations
> and structured logic, the kind you ship to hundreds of people.

**Stage:** Copilot Studio · **For:** Maker · **Level:** Advanced · **Time:** 45 min

## When to use this
This is the destination. Everything before this — using Chat, delegating to agents, building a
declarative agent — was the on-ramp. **Copilot Studio** is the pro-grade, low-code builder where you
make production agents.

You're here because your Stage 4 declarative agent hit a ceiling: you need more than "answer from
docs." You want a **designed conversation** — an agent that grounds on knowledge *and* drives a topic
(a structured flow with a clear happy path), so it does the right thing reliably, not just plausibly.
Studio gives you topics, richer grounding, testing, ALM, and a real publish-and-govern story.

## What you'll need
- **Copilot Studio access** (a Power Platform environment you can build in)
- A **knowledge source** — a SharePoint site, a set of docs, or a public URL the agent grounds on
- A **target** to publish to later (Teams and/or a website)
- A clear **use case** with one happy-path conversation you can name

## Try it now — the design
Before you click anything, outline the agent. Studio rewards a plan. Use this as your design prompt
(in Copilot Chat, or just on paper):

```
Outline a Copilot Studio agent for [use case]. Give me:
- The knowledge sources it should ground on
- 3 key topics (the structured conversations it needs to handle)
- The happy-path conversation for the most important topic, turn by turn
```

**Why this works:** a Studio agent is **knowledge + topics**, not just knowledge. Naming your 3 topics
and writing the happy path *first* means you build with intent instead of wiring trigger phrases at
random. The single biggest first-build mistake is skipping this and building topic-by-topic with no map.

## Step by step
1. **Create the agent in Copilot Studio.** Give it a name, description, and instructions — the same
   persona discipline from Stage 4 carries over.
   > 📷 _Screenshot 01 — the Copilot Studio create-agent screen._
2. **Add your knowledge source.** Point it at the SharePoint site / docs / URL. Test a question in the
   built-in chat to confirm grounding works before you add structure.
   > 📷 _Screenshot 02 — a knowledge source added and a grounded test answer._
3. **Build your first topic.** Create a topic for your most important flow — set its **trigger
   phrases**, then lay out the **happy-path** conversation node by node (questions, conditions,
   messages). This is the step Agent Builder couldn't do.
   > 📷 _Screenshot 03 — the topic authoring canvas with the happy-path nodes._
4. **Test in the Test pane.** Walk the happy path. Then deliberately go off-script to see how it falls
   back to knowledge — tighten trigger phrases and nodes until it behaves.
   > 📷 _Screenshot 04 — the Test pane walking the topic's happy path._
5. **Publish to a channel.** Publish the agent and connect it to **Teams** (and/or a website) so real
   users can reach it. You've shipped, not just built.
   > 📷 _Screenshot 05 — the publish screen with Teams as a target channel._

## Screenshots
Captured from the real product with the Playwright tool in `tooling/screenshots/` (see that folder's
README to run the loop yourself). Re-capture when the Copilot Studio UI changes — don't hand-edit
images.

<!-- Uncomment each line once the matching PNG has been captured into screenshots/studio-first-agent/ -->
<!-- ![01 — The Copilot Studio create-agent screen](../screenshots/studio-first-agent/01-create.png) -->
<!-- ![02 — A knowledge source added and a grounded test answer](../screenshots/studio-first-agent/02-knowledge.png) -->
<!-- ![03 — The topic authoring canvas with happy-path nodes](../screenshots/studio-first-agent/03-topic.png) -->
<!-- ![04 — The Test pane walking the topic's happy path](../screenshots/studio-first-agent/04-test.png) -->
<!-- ![05 — The publish screen with Teams as a target channel](../screenshots/studio-first-agent/05-publish.png) -->

> **Not captured yet.** The five anchors above are placeholders. Run the capture tool
> (`cd tooling/screenshots && npm install && npm run auth && npm run capture`), then uncomment the
> embeds. Until then the page ships text-only — honest beats fabricated.

## Make it better
Your first Studio agent is the foundation. The catalog stubs for this stage are the natural next builds:
- **Connect an action.** Let the agent *do* things — look up an order, create a ticket — via a
  connector or action, not just answer.
- **Add a tool / MCP integration.** Extend the agent with external tools for richer, real-world tasks.
- **Govern and monitor.** Once it's live, watch analytics, set guardrails, and manage versions with ALM.

> **📚 Learn more.** Start with the [Copilot Studio docs](https://learn.microsoft.com/en-us/microsoft-copilot-studio/)
> (get started → build → test → publish → govern), book the free hands-on
> [Copilot Studio in a Day](https://aka.ms/CSIAD) workshop, keep the
> [Copilot Studio Resources hub](https://aka.ms/copilotstudio/resources) bookmarked, and follow the
> product team's [Copilot Studio YouTube channel](https://www.youtube.com/@MicrosoftCopilotStudio).

## Watch out for
- **Topics need maintenance.** A designed conversation is powerful but isn't fire-and-forget — trigger
  phrases drift and flows need pruning. Plan to revisit.
- **Don't over-build the first one.** One knowledge source + one solid topic that you ship beats five
  half-finished topics that never publish. Get it live, then extend.
- **Governance is part of "done."** Before releasing to a wide audience, line up the publish + ALM +
  monitoring checklist — shipping to 500 users is a different bar than a demo.

## Where this leads (going deeper)
You've reached the destination — but the destination has depth. From here the journey is *within*
Studio: wire up **connectors and actions** so the agent takes action, add **MCP / tool integrations**,
nail the **publish + governance** story, and **measure ROI** to justify and expand the program. The
ramp got you here; Studio is where you keep building.

> **Next (within Stage 5):** Connect an agent to a system with a connector / action — _(stub in `CATALOG.md`)_

## Related
- [Agent Builder → Build a team-knowledge agent over a SharePoint site](../walkthroughs/agent-builder-team-knowledge.md) — the no-code agent you outgrew to get here
- Studio → Govern and monitor agents at scale _(stub in `CATALOG.md`)_
- Stage 5 Resources: see `RESOURCES.md` → Copilot Studio
