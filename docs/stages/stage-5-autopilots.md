---
title: "Stage 5 · Autonomous & Always-On Agents"
stage: autopilots
---

# Stage 5 · Autonomous & Always-On Agents

*Formerly framed here as "Autopilots."*

> **Agents that run in the background. Hand a recurring job to a ready-made or triggered agent that watches, decides, and acts on an event or a schedule — without being prompted each time.**

**The shift:** from "I run an agent when I need it" to "an agent runs *for* me." Stages 1–4 were all on-demand — you start a chat, call an agent, kick off a recipe, or build a simple one. This stage flips the model: the agent is *always on* or *event-triggered*, doing a defined job continuously rather than waiting for your prompt. It's the bridge between **adopting** prebuilt agents (Stage 4) and **building** governed ones (Stage 6).

!!! info "An emerging stage — availability varies"
    Autonomous and always-on agents are a **fast-moving, gated** capability. Which agents you can run,
    and whether they act autonomously, depends on your **license, product, and region** — and the lineup
    keeps changing. This stage is marked **pioneer** for that reason — it's real and worth adopting where
    you have it, but **not every user will have access yet**. Treat the Microsoft product hubs as the source
    of truth and re-check before any customer-facing claim. Start from
    [Agents in Microsoft 365](https://adoption.microsoft.com/en-us/ai-agents/agents-in-microsoft-365/).

---

## When you're ready for this stage

You've got a job that shouldn't wait for you to start it — monitoring a queue, watching for a signal, keeping something up to date, or kicking off the same follow-through every time an event happens. You've already felt the pull in earlier stages ("an agent will soon do this on autopilot") and now the always-on version exists.

!!! question "Going the wrong way?"
    These are **ready-made or triggered agents** — you adopt them or wire them to an event, you don't
    hand-engineer them. If you just need a simple, on-demand agent for you and a few teammates, that's
    [Stage 4 · Agent Builder](stage-4-agent-builder.md). If you need real actions against a system of
    record, custom logic, or org-wide publishing, that's [Stage 6 · Copilot Studio](stage-6-studio.md).
    Not sure you're ready? See [right-sizing: Stage 5 → Stage 4](../right-sizing.md#autopilots-to-agent-builder).

## What you need

- Access to an autonomous or always-on agent in your tenant — confirm availability with your IT admin, since it's gated and varies by license.
- A clearly defined, recurring job the agent can own, with a trigger or signal that should set it off.
- Comfort with delegation: you set the goal and the guardrails, the agent runs continuously.

---

## What this stage is

These are **autonomous and always-on agents**. Where an Agent Builder agent answers when you call it, an agent here is given a job and a trigger, then runs in the background — noticing when something happens, deciding what to do, and acting — surfacing results or asking for a check-in rather than waiting for a prompt.

There's no single branded product for this. Instead, the **always-on, autonomous pattern shows up across Microsoft's portfolio**: ready-made agents that run on a schedule, role-specific agents in Microsoft 365, security agents that investigate on their own, and event-triggered agents you build yourself in Copilot Studio. Several are role- or department-specific and live in their own product areas rather than a single hub.

---

## The autonomous pattern across Microsoft's portfolio { #which-autopilots-microsoft-offers }

The same always-on, autonomous pattern appears in several places. The roster below is the current shape of what's emerging — each is gated and varies by license, so confirm status before you rely on it.

!!! warning "Verify before you rely on any of these"
    **Availability, gating, and naming vary by license, product, and region**, and this space is moving
    fast. Some of these overlap in name with the *on-demand* specialists in
    [Stage 2 · First-Party Agents](stage-2-first-party.md) — but here the emphasis is on running
    **autonomously**. Treat the Microsoft product hubs as the source of truth and confirm status before any
    customer-facing claim.

<div class="grid cards rc-skill-grid" markdown>

-   **Sales Agent** · _Microsoft 365 Copilot_

    A role-specific agent that researches and qualifies leads in the background, so sellers walk into every conversation already briefed.

    <span class="rc-meta"><span class="rc-chip rc-chip-skill">[Check current status](https://adoption.microsoft.com/en-us/ai-agents/agents-in-microsoft-365/)</span></span>

-   **Customer Service Agent** · _Copilot Service / Dynamics 365_

    Handles common customer cases on its own and escalates to a person only when human judgment is needed.

    <span class="rc-meta"><span class="rc-chip rc-chip-skill">[Check current status](https://adoption.microsoft.com/en-us/ai-agents/agents-in-microsoft-365/)</span></span>

-   **Security Copilot agents** · _Security Copilot_

    Agents that investigate alerts — like reported phishing — on their own and hand analysts a recommended verdict to act on.

    <span class="rc-meta"><span class="rc-chip rc-chip-skill">[Check current status](https://learn.microsoft.com/en-us/copilot/security/)</span></span>

-   **Triggered agents you build** · _Copilot Studio_

    The build-your-own path: wire an agent to an event or schedule so it acts automatically when something happens — the on-ramp to Stage 6.

    <span class="rc-meta"><span class="rc-chip rc-chip-skill">[Check current status](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-triggers-about)</span></span>

</div>

These aren't a single branded family — they're the autonomous pattern surfacing across Microsoft's products. As the space grows, more will land here. The rest of this stage focuses on the **patterns** common to all of them, so you're ready whichever one reaches you first.

---

## Start here — if you only do three things

You can't fully drive this stage until an autonomous agent reaches your tenant — so the first move is to find out where you stand, then line up the recurring job you'll hand off the moment it's switched on.

<div class="grid cards rc-pinned" markdown>

-   <span class="rc-habit">Habit 1<small>Day 1</small></span>

    **[Check what's switched on for you](#which-autopilots-microsoft-offers)**

    These agents are gated — confirm availability for your tenant, license, and region before you plan around them.

    <span class="rc-meta"><span class="rc-chip rc-chip-role">👤 End user</span> <span class="rc-chip rc-chip-skill">Gated · verify</span></span>

-   <span class="rc-habit">Habit 2<small>Week 1</small></span>

    **[Pick one recurring job to hand off](#all-walkthroughs)**

    Choose a single always-on pattern below — a queue to watch, a digest to keep current, or a follow-through to automate.

    <span class="rc-meta"><span class="rc-chip rc-chip-role">👤 Manager</span> <span class="rc-chip rc-chip-skill">Example · gated</span></span>

-   <span class="rc-habit">Habit 3<small>Month 1</small></span>

    **[Equip it with the right skills](#skills-in-autopilots)**

    Give the agent the reusable capabilities it needs to carry the job out on its own, drawn from the Skills Catalog.

    <span class="rc-meta"><span class="rc-chip rc-chip-role">👤 Champion</span> <span class="rc-chip rc-chip-skill">Gated · emerging</span></span>

</div>

---

## Patterns { #all-walkthroughs }

!!! note "Illustrative patterns, not click-by-click pages"
    Availability varies by license, product, and region, so these are **illustrative patterns** rather than
    step-by-step walkthroughs. Each shows the shape of an always-on job and who it's for. Where a real build
    exists, it links to the [Triggered agents in Copilot Studio](../walkthroughs/studio-autonomous-triggers.md)
    walkthrough; the rest point to the [Skills Catalog](../skills.md#autopilots-scout-skills).

<div id="rc-filterbar"></div>

<div class="rc-scrollbox" markdown>

<section class="rc-bucket" markdown>

### Watch & alert
An autonomous agent keeps an eye on a queue or signal and raises a hand only when something needs a human.

<div class="grid cards rc-grid" markdown>

-   **[Watch a queue and flag what needs you](../skills.md#autopilots-scout-skills)**

    An autonomous agent monitors an inbox, channel, or ticket queue and surfaces only the items that need your judgment — the rest it handles or holds.

    <span class="rc-meta" data-time="10" data-roles="end-user"><span class="rc-chip rc-chip-time">⏱ 10 min</span> <span class="rc-chip rc-chip-role">👤 End user</span></span>

-   **[Stand watch during a launch or incident](../skills.md#autopilots-scout-skills)**

    An always-on agent keeps an eye on the release window and pings the right people the moment a signal looks off.

    <span class="rc-meta" data-time="15" data-roles="manager"><span class="rc-chip rc-chip-time">⏱ 15 min</span> <span class="rc-chip rc-chip-role">👤 Manager</span></span>

</div>

</section>

<section class="rc-bucket" markdown>

### Keep things current
An autonomous agent maintains something on a cadence so it's never stale and no one has to remember to refresh it.

<div class="grid cards rc-grid" markdown>

-   **[Run an always-on weekly digest](../skills.md#autopilots-scout-skills)**

    The Monday digest an agent assembles and posts on schedule — the standing version of a Cowork recipe.

    <span class="rc-meta" data-time="10" data-roles="champion"><span class="rc-chip rc-chip-time">⏱ 10 min</span> <span class="rc-chip rc-chip-role">👤 Champion</span></span>

-   **[Keep a customer-health list fresh](../skills.md#autopilots-scout-skills)**

    The worst-first account ranking, recomputed continuously so the list is current whenever you open it.

    <span class="rc-meta" data-time="10" data-roles="manager"><span class="rc-chip rc-chip-time">⏱ 10 min</span> <span class="rc-chip rc-chip-role">👤 Manager</span></span>

</div>

</section>

<section class="rc-bucket" markdown>

### Trigger the follow-through
An event fires and a triggered Studio agent runs the routine next steps end-to-end, so nothing slips between the cracks.

<div class="grid cards rc-grid" markdown>

-   **[Run the same follow-through on every trigger](../walkthroughs/studio-autonomous-triggers.md)**

    When a defined event happens, a triggered Studio agent kicks off the predictable next steps without waiting to be asked.

    <span class="rc-meta" data-time="5" data-roles="end-user"><span class="rc-chip rc-chip-time">⏱ 5 min</span> <span class="rc-chip rc-chip-role">👤 End user</span></span>

-   **[Hand off recurring busywork end-to-end](../walkthroughs/studio-autonomous-triggers.md)**

    A defined, repeating job a triggered agent owns from signal to result — you set the goal and the guardrails once.

    <span class="rc-meta" data-time="15" data-roles="champion"><span class="rc-chip rc-chip-time">⏱ 15 min</span> <span class="rc-chip rc-chip-role">👤 Champion</span></span>

</div>

</section>

</div>

---

## Skills for an autonomous agent { #skills-in-autopilots }

This is where the **[Skills Catalog](../skills.md)** meets always-on agents. A *skill* is a reusable, packaged capability you save once and reuse — and an autonomous agent is something you can **equip with skills** so it can carry that task out on its own.

- A **Cowork recipe** ([Stage 3](stage-3-cowork.md)) is a skill you *describe* and run on demand.
- An **autonomous-agent skill** is that same instinct handed to an always-on agent: the capability it draws on to do the job in the background, without you starting it each time.

A few illustrative examples of what an always-on agent could be equipped with — the set is **emerging and gated**, so treat these as the shape of things rather than a finished menu:

<div class="rc-scrollbox" markdown>

<div class="grid cards rc-skill-grid" markdown>

-   **[Always-on weekly digest](../skills.md#autopilots-scout-skills)**

    The Monday digest an agent assembles and posts on schedule — no one has to remember to start it.

    <span class="rc-meta"><span class="rc-chip rc-chip-skill">🧩 Example · gated</span></span>

-   **[Inbox & signal triage](../skills.md#autopilots-scout-skills)**

    An agent watches for what actually needs you and surfaces it, so the noise never reaches your desk.

    <span class="rc-meta"><span class="rc-chip rc-chip-skill">🧩 Example · gated</span></span>

-   **[Continuous customer-health watch](../skills.md#autopilots-scout-skills)**

    The worst-first account-ranking recipe from Cowork, kept always-on so the list is never stale.

    <span class="rc-meta"><span class="rc-chip rc-chip-skill">🧩 Example · gated</span></span>

</div>

</div>

That's the honest scope today — the way you equip and manage these skills is still emerging and gated alongside the rest of the stage, so the catalog keeps its always-on skills lens scoped to what exists now and will grow as the capability does. See **[Skills Catalog → always-on skills](../skills.md#autopilots-scout-skills)**.

---

!!! borrow "Borrow, don't build"
    This stage is the definition of *adopt before you build*. Don't reverse-engineer an autonomous agent —
    start from Microsoft's ready-made roster and the official build-your-own triggers, and confirm what's
    available to you before you plan around it.

    - [Agents in Microsoft 365](https://adoption.microsoft.com/en-us/ai-agents/agents-in-microsoft-365/) — the current roster of ready-made agents
    - [Copilot Studio event triggers](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-triggers-about) — the build-your-own path for event-driven agents
    - [Security Copilot](https://learn.microsoft.com/en-us/copilot/security/) — autonomous agents for security teams
    - [Agent governance + Agent 365](https://aka.ms/agent365/resources) — how to govern autonomous agents at scale

    The full curated set for this stage lives in [Resources → Stage 5](../RESOURCES.md).

!!! info "Security at this stage"
    Autonomy raises the stakes: an agent that acts on a trigger runs with **maker credentials** and can
    reach whatever data and connectors it's authorized for, so **DLP data policies**, scoped triggers, and
    admin review matter from day one. See the full picture in **[Security & Governance](../empowerment/security.md)**.

---

## Where this leads

<div class="rc-exit" markdown>
<div class="rc-exit-text" markdown>
**Need an agent that does more than its ready-made job?** When you need real actions against a system of record, custom topics, MCP tools, or org-wide publishing and governance, you've outgrown adopting a ready-made agent and you're ready to *build*. That's the low-code destination.
</div>
[Continue to Stage 6 · Copilot Studio →](stage-6-studio.md){ .rc-exit-cta }
</div>
