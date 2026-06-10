---
title: "Stage 5 · Autopilots"
stage: autopilots
---

# Stage 5 · Autopilots

> **Always-on agents that work in the background. Hand a recurring job to a ready-made autonomous agent — like Scout — that watches, decides, and acts without being prompted each time.**

**The shift:** from "I run an agent when I need it" to "an agent runs *for* me." Stages 1–4 were all on-demand — you start a chat, call an agent, kick off a recipe, or build a simple one. Autopilots flip the model: the agent is *always on*, triggered by events and signals rather than a prompt, doing a defined job continuously.

!!! info "An emerging stage — availability varies"
    Autopilots are a newer, **gated** capability: Microsoft announced **Scout** and the broader
    *Autopilots* always-on agent category in 2026, and access is still rolling out by tenant, license,
    and region. This stage is marked **pioneer** for that reason — it's real and worth adopting where you
    have it, but **not every user will have access yet**. Treat the first-party product hubs as the source
    of truth and re-check before customer-facing claims.

---

## When you're ready for this stage

You've got a job that shouldn't wait for you to start it — monitoring a queue, watching for a signal, keeping something up to date, or kicking off the same follow-through every time an event happens. You've already felt the pull in earlier stages ("an agent will soon do this on autopilot") and now the always-on version exists.

!!! question "Going the wrong way?"
    Autopilots are **ready-made autonomous agents you adopt**, not ones you engineer. If you need real
    actions against a system of record, custom logic, or org-wide publishing, that's
    [Stage 6 · Copilot Studio](stage-6-studio.md). If you just need a simple, on-demand agent for you and a
    few teammates, that's [Stage 4 · Agent Builder](stage-4-agent-builder.md).

## What you need

- Access to an Autopilots-class agent (such as **Scout**) in your tenant — confirm availability with your IT admin, since it's gated.
- A clearly defined, recurring job the agent can own, with a trigger or signal that should set it off.
- Comfort with delegation: you set the goal and the guardrails, the agent runs continuously.

---

## What Autopilots are

Autopilots are **always-on, autonomous agents**. Where an Agent Builder agent answers when you call it, an Autopilot is given a job and a trigger, then runs in the background — noticing when something happens, deciding what to do, and acting — surfacing results or asking for a check-in rather than waiting for a prompt.

**Scout** is the flagship example today: a first-party autonomous agent that works proactively on your behalf. But it isn't the only one — Microsoft is bringing a growing set of autonomous agents to market that follow the same always-on pattern, several of them role- or department-specific and living in their own product areas rather than a single hub.

---

## Which Autopilots Microsoft offers

Scout is the general-purpose Autopilot for knowledge workers, but the always-on, autonomous pattern shows up across Microsoft's portfolio. The roster below is the current shape of what's emerging.

!!! warning "Verify before you rely on any of these"
    **Availability, gating, and naming vary by license, product, and region**, and the category is moving
    fast. Some of these also overlap in name with the *on-demand* specialists in
    [Stage 2 · First-Party Agents](stage-2-first-party.md) — but here they run **autonomously**. Treat the
    first-party product hubs as the source of truth and confirm status before any customer-facing claim.

<div class="grid cards rc-skill-grid" markdown>

-   **Scout** · _flagship_

    A general-purpose always-on agent for knowledge workers — it proactively watches, researches, and surfaces what you need without being asked each time. The headline Autopilot and the focus of this stage.

    <span class="rc-meta"><span class="rc-chip rc-chip-skill">Gated · rolling out</span></span>

-   **Sales Agent** · _Microsoft 365 Copilot_

    Autonomously researches and qualifies leads and drafts outreach in the background, so sellers walk into every conversation already briefed.

    <span class="rc-meta"><span class="rc-chip rc-chip-skill">Check current status</span></span>

-   **Customer Service Agent** · _Copilot Service / Dynamics 365_

    Handles common customer cases end-to-end on its own, escalating to a person only when human judgment is needed.

    <span class="rc-meta"><span class="rc-chip rc-chip-skill">Check current status</span></span>

-   **Security triage agents** · _Security Copilot_

    Always-on agents that investigate alerts — like reported phishing — autonomously and hand analysts a recommended verdict to act on.

    <span class="rc-meta"><span class="rc-chip rc-chip-skill">Check current status</span></span>

</div>

As the category grows, more Autopilots and patterns will land here. The rest of this stage focuses on **Scout**, since it's the one most knowledge workers will reach first.

---

## Start here — if you only do three things

You can't fully drive this stage until Scout reaches your tenant — so the first move is to find out where you stand, then line up the recurring job you'll hand off the moment it's switched on.

<div class="grid cards rc-pinned" markdown>

-   <span class="rc-habit">Habit 1<small>Day 1</small></span>

    **[Check whether Scout is switched on for you](#which-autopilots-microsoft-offers)**

    Autopilots are gated — confirm availability for your tenant, license, and region before you plan around them.

    <span class="rc-meta"><span class="rc-chip rc-chip-role">👤 End user</span> <span class="rc-chip rc-chip-skill">Gated · verify</span></span>

-   <span class="rc-habit">Habit 2<small>Week 1</small></span>

    **[Pick one recurring job to hand off](#all-walkthroughs)**

    Choose a single always-on pattern below — a queue to watch, a digest to keep current, or a follow-through to automate.

    <span class="rc-meta"><span class="rc-chip rc-chip-role">👤 Manager</span> <span class="rc-chip rc-chip-skill">Example · gated</span></span>

-   <span class="rc-habit">Habit 3<small>Month 1</small></span>

    **[Equip it with the right skills](#skills-in-autopilots)**

    Give Scout the reusable capabilities it needs to carry the job out on its own, drawn from the Skills Catalog.

    <span class="rc-meta"><span class="rc-chip rc-chip-role">👤 Champion</span> <span class="rc-chip rc-chip-skill">Gated · emerging</span></span>

</div>

---

## All walkthroughs

These are **starter patterns** for Scout, not click-by-click pages — illustrative until Autopilots are switched on in your tenant. Each shows the rough effort to stand it up and who it's for, so filter by role or time to find your first one.

<div id="rc-filterbar"></div>

<div class="rc-scrollbox" markdown>

<section class="rc-bucket" markdown>

### Watch & alert
Scout keeps an eye on a queue or signal and raises a hand only when something needs a human.

<div class="grid cards rc-grid" markdown>

-   **[Watch a queue and flag what needs you](../skills.md#autopilots-scout-skills)**

    Scout monitors an inbox, channel, or ticket queue and surfaces only the items that need your judgment — the rest it handles or holds.

    <span class="rc-meta" data-time="10" data-roles="end-user"><span class="rc-chip rc-chip-time">⏱ 10 min</span> <span class="rc-chip rc-chip-role">👤 End user</span></span>

-   **[Stand watch during a launch or incident](../skills.md#autopilots-scout-skills)**

    Scout keeps an eye on the release window and pings the right people the moment a signal looks off.

    <span class="rc-meta" data-time="15" data-roles="manager"><span class="rc-chip rc-chip-time">⏱ 15 min</span> <span class="rc-chip rc-chip-role">👤 Manager</span></span>

</div>

</section>

<section class="rc-bucket" markdown>

### Keep things current
Scout maintains something on a cadence so it's never stale and no one has to remember to refresh it.

<div class="grid cards rc-grid" markdown>

-   **[Run an always-on weekly digest](../skills.md#autopilots-scout-skills)**

    The Monday digest Scout assembles and posts on schedule — the standing version of a Cowork recipe.

    <span class="rc-meta" data-time="10" data-roles="champion"><span class="rc-chip rc-chip-time">⏱ 10 min</span> <span class="rc-chip rc-chip-role">👤 Champion</span></span>

-   **[Keep a customer-health list fresh](../skills.md#autopilots-scout-skills)**

    The worst-first account ranking, recomputed continuously so the list is current whenever you open it.

    <span class="rc-meta" data-time="10" data-roles="manager"><span class="rc-chip rc-chip-time">⏱ 10 min</span> <span class="rc-chip rc-chip-role">👤 Manager</span></span>

</div>

</section>

<section class="rc-bucket" markdown>

### Trigger the follow-through
An event fires and Scout runs the routine next steps end-to-end, so nothing slips between the cracks.

<div class="grid cards rc-grid" markdown>

-   **[Run the same follow-through on every trigger](../skills.md#autopilots-scout-skills)**

    When a defined event happens, Scout kicks off the predictable next steps without waiting to be asked.

    <span class="rc-meta" data-time="5" data-roles="end-user"><span class="rc-chip rc-chip-time">⏱ 5 min</span> <span class="rc-chip rc-chip-role">👤 End user</span></span>

-   **[Hand off recurring busywork end-to-end](../skills.md#autopilots-scout-skills)**

    A defined, repeating job Scout owns from signal to result — you set the goal and the guardrails once.

    <span class="rc-meta" data-time="15" data-roles="champion"><span class="rc-chip rc-chip-time">⏱ 15 min</span> <span class="rc-chip rc-chip-role">👤 Champion</span></span>

</div>

</section>

</div>

---

## Skills in Autopilots

This is where the **[Skills Catalog](../skills.md)** meets always-on agents. A *skill* is a reusable, packaged capability you save once and reuse — and an Autopilot like Scout is something you can **equip with skills** so it can carry that task out autonomously.

- A **Cowork recipe** ([Stage 3](stage-3-cowork.md)) is a skill you *describe* and run on demand.
- An **Autopilot skill** is that same instinct handed to an always-on agent: the capability Scout draws on to do the job in the background, without you starting it each time.

A few illustrative examples of what an always-on agent could be equipped with — the set is **emerging and gated**, so treat these as the shape of things rather than a finished menu:

<div class="rc-scrollbox" markdown>

<div class="grid cards rc-skill-grid" markdown>

-   **[Always-on weekly digest](../skills.md#autopilots-scout-skills)**

    The Monday digest Scout assembles and posts on schedule — no one has to remember to start it.

    <span class="rc-meta"><span class="rc-chip rc-chip-skill">🧩 Example · gated</span></span>

-   **[Inbox & signal triage](../skills.md#autopilots-scout-skills)**

    Scout watches for what actually needs you and surfaces it, so the noise never reaches your desk.

    <span class="rc-meta"><span class="rc-chip rc-chip-skill">🧩 Example · gated</span></span>

-   **[Continuous customer-health watch](../skills.md#autopilots-scout-skills)**

    The worst-first account-ranking recipe from Cowork, kept always-on so the list is never stale.

    <span class="rc-meta"><span class="rc-chip rc-chip-skill">🧩 Example · gated</span></span>

</div>

</div>

That's the honest scope today — the way you equip and manage Autopilot skills is still emerging and gated alongside the rest of the stage, so the catalog keeps the **Autopilots (Scout) skills** lens scoped to what exists now and will grow as the capability does. See **[Skills Catalog → Autopilots](../skills.md#autopilots-scout-skills)**.

---

## Where this leads

<div class="rc-exit" markdown>
<div class="rc-exit-text" markdown>
**Need an agent that does more than its ready-made job?** When you need real actions against a system of record, custom topics, MCP tools, or org-wide publishing and governance, you've outgrown adopting an Autopilot and you're ready to *build*. That's the low-code destination.
</div>
[Continue to Stage 6 · Copilot Studio →](stage-6-studio.md){ .rc-exit-cta }
</div>
