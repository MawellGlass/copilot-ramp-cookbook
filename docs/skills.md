---
title: Skills Catalog
---

# Skills Catalog

A **skill** is a **reusable, packaged capability you save once and reuse — or share — instead of
rebuilding it from scratch.** On the ramp, skills show up in two places: a **Cowork recipe** (a
multi-step task you capture so the team can rerun it) and a **Studio tool** (an action, connector, or
MCP tool that lets an agent *do* something in a real system). Different surfaces, same instinct —
capture it once, reuse it.

!!! warning "A note on the word *skill* in Copilot Studio"
    Copilot Studio has a feature literally named **Skills** — and it means something narrower than the
    cookbook's sense. There, a *skill* is an existing **pro-code agent** (built with the Bot Framework
    or the **Microsoft 365 Agents SDK**) that you register so your Studio agent can call it as a tool.
    The Studio entries in this catalog are **tools/actions** (connector actions, flows, MCP tools) —
    *not* that feature. See [Use skills in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-use-skills).

This page is the **catalog** — the reusable skills worth building first, grouped by where they live.
Each links to the [walkthrough](CATALOG.md) that builds or describes it. Think of skills as the
durable counterpart to the prompts and walkthroughs in each stage: a prompt is something you *run*; a
skill is something you *keep*.

!!! note "Not to be confused with…"
    "Skill" is an overloaded word. On this site it means a **reusable capability** (the definition
    above). It is **not**:

    - the **[Skills agent](walkthroughs/first-party-skills-stretch-assignment.md)** — a first-party
      agent that helps you find a *career* stretch assignment;
    - your personal **skill level** (new / some / experienced) — the slider on the
      [role paths](start-by-role.md) that tailors a journey to your experience; or
    - the **Skills** feature *inside Copilot Studio* — a narrower, product-specific thing: registering
      an existing **pro-code agent** (Bot Framework or **Microsoft 365 Agents SDK**) so your Studio
      agent can call it as a tool. The Studio items in this catalog are **tools/actions**, not that
      feature.

    When this page says "skill," it always means *a reusable capability you save and reuse*.

---

## Why skills matter

The difference between a team that *uses* Copilot and a team that *compounds* with it is reuse. A
Cowork hand-off that saved half a day, an agent action that looks up a record in a real system —
each is worth far more when it's **captured, named, and rerunnable by someone who didn't build
it**. Skills are how one person's best workflow becomes everyone's default.

!!! borrow "Borrow, don't build"
    The exact feature names and limits move fast — Microsoft owns the authoritative reference. When a
    detail matters for customer-facing work, go to the source:

    - [Which Copilot is right for you](https://learn.microsoft.com/en-us/copilot/) — names and maps every Copilot
    - [Microsoft 365 Copilot documentation](https://learn.microsoft.com/en-us/copilot/microsoft-365/) — the reference for Cowork and how it runs multi-step tasks
    - [Copilot Studio documentation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/) — the reference for actions, connectors, and tools

---

## Cowork skills — reusable recipes

In [Stage 3 · Cowork](stages/stage-3-cowork.md), a skill is a **reusable recipe**: a multi-step
task captured once — with its name, inputs, and expected output — so anyone on the team can rerun it
cold instead of reinventing the prompt. The ones worth capturing first:

<div class="grid cards" markdown>

-   **[Recurring weekly digest](walkthroughs/cowork-recurring-weekly-digest.md)**

    Describe the Monday-morning digest once and let it run every week without re-prompting.

-   **[Customer-health digest](walkthroughs/cowork-customer-health-digest.md)**

    Rank your whole book of business worst-first, on a schedule — so you know where to spend the week.

-   **[Multi-document brief](walkthroughs/cowork-multi-doc-synthesis.md)**

    A repeatable "stack of documents → one coherent brief" recipe.

-   **[QBR prep cycle](walkthroughs/cowork-qbr-prep-cycle.md)**

    Account data → deck → talking points → follow-ups, run as one rerunnable flow.

-   **[Incident postmortem](walkthroughs/cowork-incident-postmortem.md)**

    Reconstruct timeline, root cause, and actions from scattered sources into one blameless draft.

-   **[Build a recipe library](walkthroughs/cowork-recipe-library.md)**

    Capture any great Cowork run as a reusable recipe so it doesn't die with the session.

</div>

## Studio skills — tools an agent can call

In [Stage 5 · Copilot Studio](stages/stage-5-studio.md), a skill becomes a **reusable capability that
lets an agent *do* something** in a real system. In the product you build these as **tools** — a
connector action against a system of record, a Power Automate flow, or an MCP tool — and reuse them
across agents.

!!! info "How Copilot Studio uses the word *skill*"
    The entries below are Studio **tools/actions** — that's what you add and click in the maker.
    Copilot Studio *also* has a feature literally named **Skills**: registering an existing **pro-code
    agent** (Bot Framework or **Microsoft 365 Agents SDK**) so your agent can call it as a tool. This
    catalog uses *skill* in the cookbook's broader sense; none of the entries below are the Studio
    **Skills** feature. See [Use skills in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-use-skills).

The platform tools worth building first:

<div class="grid cards" markdown>

-   **[Connector action](walkthroughs/studio-connector-action.md)**

    Let an agent look up records, create tickets, and trigger workflows — not just answer.

-   **[MCP tool integration](walkthroughs/studio-mcp-tool-integration.md)**

    Extend an agent with external tools via the Model Context Protocol.

-   **[Power Automate flow](walkthroughs/studio-power-automate-flow.md)**

    Connect an agent to real business systems through a flow.

-   **[Fabric data agent connection](walkthroughs/studio-fabric-agent.md)**

    Ground an agent on your warehouse and semantic models — answer from data, not just documents.

-   **[Autonomous event trigger](walkthroughs/studio-autonomous-triggers.md)**

    Have an agent act when something happens — no user prompt required.

-   **[Multi-turn conversation design](walkthroughs/studio-multi-turn-conversation.md)**

    A reusable topic that asks what it needs to know and recovers gracefully.

</div>

---

## Where this leads

The arc is the same instinct growing up. A Cowork recipe is a skill you *describe*; a Studio action
is a skill you *build*. The moment a recipe is stable, repeated, and worth making bulletproof, it's
ready to graduate into a real capability in [Stage 5 · Copilot Studio](stages/stage-5-studio.md) —
an action against a real system, governed and shared.

> **Next:** [Stage 3 · Cowork](stages/stage-3-cowork.md) — where a saved recipe becomes a team skill · or [Stage 5 · Studio](stages/stage-5-studio.md) for actions and tools.
