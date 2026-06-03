---
title: Agents in Channels — post team-wide answers
stage: first-party
roles: [champion, it-admin]
tags: [first-party, teams, channels, shared-agent, self-service]
level: intermediate
time: 10 min
status: walkthrough
prereqs: [m365-copilot-license, teams-admin-or-owner]
updated: 2026-06-03
---

# Agents in Channels — post team-wide answers

> **One-line value.** Drop a shared agent into a Teams channel so the whole team can @mention it and
> self-serve answers — instead of the same five questions landing in your DMs every week.

**Stage:** First-Party Agents · **For:** Champion, IT/Admin · **Level:** Intermediate · **Time:** 10 min

## When to use this
Every team has a person who knows "where's the onboarding checklist?" and "what's our PTO policy?" — and
that person is drowning in repeat questions. Putting an agent **in the channel** changes the model: the
knowledge lives where the team already works, anyone can @mention it, and the answer is visible to
everyone who had the same question. It's the first-party move from *one person answers* to *the channel
answers*.

This one straddles two roles: champions drive the adoption, IT/admins make sure it's set up and scoped
safely. It's a natural bridge toward *building* an agent in the next stages.

## What you'll need
- **M365 Copilot license** and rights to add an agent to the channel (team owner or admin)
- A channel with a real, recurring question pattern (onboarding, policies, "how do I…")
- The knowledge source the agent should answer from — and clarity on who's allowed to see it

## Try it now — the prompt
Once the agent is in the channel, anyone can call it by name:

```
@[agent] what's our current onboarding checklist for new hires, and who do they
contact for laptop setup?
```

And as the champion setting it up, frame its job clearly:

```
This agent answers from the team's onboarding and policy docs only. Keep answers
short, always link the source doc, and if it's not in the docs, say so and point to
the People & Culture channel.
```

**Why this works:** the user prompt is a real question the whole team shares; the setup framing scopes
the agent to *trusted sources*, demands *citations*, and defines a *graceful "I don't know."* — the three
things that make a shared agent trustworthy in public.

## Step by step
1. **Add the agent to the channel.** As owner/admin, add the prebuilt or shared agent so it appears in
   the channel's app list and is @mentionable.
   > 📷 _Screenshot 01 — adding a shared agent to a Teams channel._
2. **Scope and instruct it.** Point it at the right knowledge source and give it the short, cite-the-
   source, say-when-unsure instructions above.
   > 📷 _Screenshot 02 — scoping the channel agent to its knowledge source._
3. **Test it in the open with a real question.** @mention it the way a teammate would and confirm the
   answer is right *and* cites the source doc.
   > 📷 _Screenshot 03 — the agent answering an @mention with a cited source._
4. **Announce it so people actually use it:**
   ```
   Draft a short channel post introducing the agent: what it answers, how to
   @mention it, and one example question to try.
   ```

## Screenshots
Captured from the real product with the Playwright tool in `tooling/screenshots/` (see that folder's
README to run the loop yourself). Re-capture when the Teams UI changes — don't hand-edit images.

<!-- Uncomment each line once the matching PNG has been captured into screenshots/first-party-agents-in-channels/ -->
<!-- ![01 — Adding a shared agent to a Teams channel](../screenshots/first-party-agents-in-channels/01-add.png) -->
<!-- ![02 — Scoping the channel agent to its knowledge source](../screenshots/first-party-agents-in-channels/02-scope.png) -->
<!-- ![03 — The agent answering an @mention with a cited source](../screenshots/first-party-agents-in-channels/03-answer.png) -->

> **Not captured yet.** The three anchors above are placeholders. Run the capture tool
> (`cd tooling/screenshots && npm install && npm run auth && npm run capture`), then uncomment the
> embeds. Until then the page ships text-only — honest beats fabricated.

## Make it better
A channel agent gets better with use:
- **Watch what it can't answer.** The questions it punts on are your backlog — they tell you which doc
  to write or add to its knowledge next.
- **Right-size who can add agents.** IT: decide whether channel owners self-serve or route through a
  small approval step, so the channel doesn't fill with redundant agents.
- **Promote the good ones.** A channel agent that's clearly earning its keep is the perfect candidate to
  rebuild as a proper declarative agent in the next stage.

> **📚 Learn more.** The [Agents in Microsoft 365 Adoption Hub](https://adoption.microsoft.com/en-us/copilot/)
> covers shared and channel agents, and Nicole Herskowitz's (CVP, M365 Copilot) blog on
> [enabling human-agent teams](https://www.microsoft.com/en-us/microsoft-365/blog/2025/09/18/microsoft-365-copilot-enabling-human-agent-teams/)
> frames how agents work alongside a team.

## Watch out for
- **It answers in public — scope it tightly.** Anything in the agent's knowledge can surface to everyone
  in the channel. IT and the champion should agree on the source set *before* it goes live.
- **Permissions still apply, but verify.** Confirm the agent isn't surfacing content some channel
  members shouldn't see. Test with a non-admin account.
- **A wrong public answer is a loud one.** Because replies are visible to all, errors erode trust fast.
  Keep the "cite the source / say when unsure" instruction strict.

## Where this leads (the ramp)
You just felt the limits of a *prebuilt* shared agent — useful, but you couldn't shape it much. The next
rung is **building** one yourself: point a declarative agent at exactly the docs you want, give it a
persona, and own how it behaves. That's **Stage 4 · Agent Builder**.

> **Next:** [Agent Builder → Build a team-knowledge agent over a SharePoint site](../walkthroughs/agent-builder-team-knowledge.md)

## Related
- [First-Party → Auto-recap every meeting with Facilitator](../walkthroughs/first-party-facilitator-auto-recap.md) — the Stage 2 flagship
- [Agent Builder → Build a team-knowledge agent over a SharePoint site](../walkthroughs/agent-builder-team-knowledge.md) — the build-it-yourself version
- Stage 2 Resources: see `RESOURCES.md` → First-Party Agents
