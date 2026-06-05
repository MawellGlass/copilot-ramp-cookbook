---
title: "Customer Support: deflect and draft, escalate the rest"
stage: studio
roles: [maker, it-admin]
tags: [copilot-studio, customer-support, deflection, escalation, functional]
level: intermediate
time: 3–4 hours
status: walkthrough
updated: 2026-06-05
---

# Customer Support: deflect and draft, escalate the rest

> Put a grounded support assistant inside your team: it answers common questions from approved help content, drafts a send-ready reply, deflects the easy ones on self-serve, and escalates the edge cases — so humans spend their time on the hard tickets.

**Stage:** Copilot Studio · **For:** Customer support teams, support ops, CX leads · **Level:** Intermediate · **Time:** 3–4 hours

---

## When to use this

Reach for this when your support team answers the same questions over and over, and the answers already exist in your help center and macros. An internal deflection agent surfaces the grounded answer, drafts the reply in your voice, and — on a self-serve channel — resolves the repetitive ones before they become tickets. It's the **inward-facing cousin** of a customer-facing agent: same knowledge, but it helps your agents and deflects internally rather than talking to customers directly.

**Why Stage 5:** This is more than a search box. The agent runs intake, retrieves a grounded answer, checks a live known-issues feed, drafts a reply, and routes out-of-scope questions to the right queue — updating the ticket through Power Automate. That branching plus the ticketing action is Copilot Studio's wheelhouse. When you eventually need an agent that faces customers *and* takes real actions at scale, that's the graduation to the [external Foundry support agent](../solutions/foundry-support-agent.md).

---

## What you'll need

- A Copilot Studio environment and maker permissions
- Your help center / KB, approved response macros, and product FAQ
- A live known-issues / incident feed
- An escalation routing guide mapped to your real support queues
- A Power Automate connector to your support tool (Zendesk, ServiceNow, Dynamics)
- Agreement from support ops on the "grounded or escalate" rule

---

## Design before you build

The defining design decision is **grounded or escalate — nothing in between**. The agent answers only from approved content; when there's no grounded answer, it escalates rather than improvising. A confidently wrong support answer erodes trust and creates rework. And drafts stay drafts: the agent never messages customers directly — a human reviews and sends.

Start from this prompt and adapt it:

```
You are the Support Deflection assistant for [Company Name]'s support team.

Help support agents resolve customer questions faster — and, on the self-serve
channel, deflect common questions before they become tickets. Answer from
approved help content only and draft replies agents can send.

When a question comes in:
1. Answer from our help center, macros, and known-issues — cited.
2. Draft a send-ready reply in our support voice for the agent to review.
3. Check active known issues; if it matches one, surface it instead of
   suggesting troubleshooting.
4. If out of scope (billing dispute, account change, suspected bug), escalate
   to the right queue with a short summary.

Rules:
- Answer only from approved content. No grounded answer → say so and escalate.
- Drafts are for a human to review and send — never message customers directly.
```

---

## Step by step

1. **Create the agent.** In Copilot Studio, create the deflection agent and paste the system prompt. Name it for the team (e.g. "Support Assistant").
2. **Connect knowledge.** Add the help center, response macros, product FAQ, the known-issues feed, and the escalation routing guide.
3. **Build the intake + grounded-answer topic.** Take the question, retrieve a cited answer, and jump to escalation if there's no confident match.
4. **Build the reply-drafting topic.** Draft a send-ready response in the support voice — answer, steps/link, friendly close.
5. **Build the known-issue topic.** Check the active feed before suggesting troubleshooting; surface the known issue and workaround when it matches.
6. **Build the escalation topic.** Route out-of-scope questions to the correct queue with a summary.
7. **Add the ticket action.** Wire Power Automate to create/update the ticket with the drafted reply and disposition. Always include an inline fallback.
8. **Pilot, then measure.** Roll out to a small support team, baseline deflection rate and handle time, then expand.

---

## Make it better

- Add **sentiment-aware routing** so frustrated customers reach a human faster.
- Recommend (and help author) **new macros** for repeated questions that had no grounded answer.
- **Graduate to Foundry** when you need a customer-facing, action-taking agent at scale.

---

## Watch out for

- **Improvised answers.** No grounded answer means escalate — never invent policy, entitlements, or steps. Verify the "no match" path.
- **Stale known issues.** A dead feed sends agents to troubleshoot a known bug. Keep it live.
- **Drafts becoming auto-sends.** Keep the human review step real; the agent never messages customers directly.
- **Measuring deflection wrong.** Baseline before launch so the deflection number means something.

---

> **📚 Learn more.** [Copilot Studio docs](https://learn.microsoft.com/en-us/microsoft-copilot-studio/) · [Knowledge sources](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio) · [Power Automate](https://learn.microsoft.com/en-us/power-automate/)

---

!!! tip "Ready to build? Use the solution template."
    The [Customer Support Deflection Agent solution template](../solutions/support-deflection-agent.md) has the system prompt, topic specs, knowledge-source table, the Studio-vs-Foundry comparison, Power Automate ticket spec, and a full test matrix.
