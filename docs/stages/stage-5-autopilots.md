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

**Scout** is the flagship example today: a first-party autonomous agent that works proactively on your behalf. For now this stage is about **Scout specifically** — as the category grows, more Autopilots and patterns will land here.

---

## Skills in Autopilots

This is where the **[Skills Catalog](../skills.md)** meets always-on agents. A *skill* is a reusable, packaged capability you save once and reuse — and an Autopilot like Scout is something you can **equip with skills** so it can carry that task out autonomously.

- A **Cowork recipe** ([Stage 3](stage-3-cowork.md)) is a skill you *describe* and run on demand.
- An **Autopilot skill** is that same instinct handed to an always-on agent: the capability Scout draws on to do the job in the background, without you starting it each time.

That's the honest scope today — the way you equip and manage Autopilot skills is still emerging and gated alongside the rest of the stage, so the catalog keeps the **Autopilots (Scout) skills** lens scoped to what exists now and will grow as the capability does. See **[Skills Catalog → Autopilots](../skills.md#autopilots-scout-skills)**.

---

## Where this leads

<div class="rc-exit" markdown>
<div class="rc-exit-text" markdown>
**Need an agent that does more than its ready-made job?** When you need real actions against a system of record, custom topics, MCP tools, or org-wide publishing and governance, you've outgrown adopting an Autopilot and you're ready to *build*. That's the low-code destination.
</div>
[Continue to Stage 6 · Copilot Studio →](stage-6-studio.md){ .rc-exit-cta }
</div>
