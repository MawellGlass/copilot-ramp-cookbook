---
title: Draft an exec briefing from background materials
stage: chat
roles: [end-user, manager, champion]
tags: [comms, briefing, exec, outlook, word]
level: starter
time: 10 min
status: walkthrough
prereqs: [m365-copilot-license]
updated: 2026-06-03
---

# Draft an exec briefing from background materials

> **One-line value.** Walk into any exec meeting with sharp talking points — pulled from your docs, not written from scratch at 8 PM.

**Stage:** Copilot Chat · **For:** End user, Manager · **Level:** Starter · **Time:** 10 min

## When to use this

You have a meeting with a VP or C-suite stakeholder in two hours. There's a project brief, a deck, a few email threads — but no time to read them all, synthesize the key points, and draft talking points that lead with business outcomes.

This walkthrough turns a pile of materials into a punchy exec briefing in one prompt. The output is a short list of points you can use as notes, paste into a meeting invite, or share ahead of the call.

## What you'll need

- **M365 Copilot license** — Copilot in Word, Teams, or Microsoft 365 Copilot Chat
- A document, deck, or email thread to ground the briefing on (upload or reference it)
- 2 minutes to review and sharpen the output

## Try it now — the prompt

Open Copilot in Word (with your doc open) or in Microsoft 365 Copilot Chat and paste:

```
Based on [this document / the attached materials], draft a 5-point exec briefing for a
10-minute conversation with [audience / VP of Finance / the leadership team].
Lead with the business outcome.
Keep each point to one sentence.
Flag the one thing most likely to generate a question.
```

**Why this prompt works:** It constrains the length ("5 points"), defines the format ("one sentence each"), names the audience so Copilot can calibrate tone, and asks for the "likely question" — which forces Copilot to surface risk rather than just summarize positively.

## Step by step

1. **Open the source material.** In Word (with the doc open) or paste the content into Microsoft 365 Copilot Chat. Multiple sources — a doc and some emails — can all go into the chat.
2. **Paste the prompt** with your audience filled in. If it's a large doc, reference it by name; if it's an email thread, paste the thread directly.
3. **Check the lead.** Is point 1 a business outcome, or is it an activity? If it starts with "We are implementing…" ask:
   ```
   Rewrite point 1 to lead with the outcome for [audience], not the activity.
   ```
4. **Expand the "likely question":**
   ```
   Expand on the point most likely to generate pushback. What's the risk,
   and what's the best short answer if they challenge it?
   ```
5. **Copy to your meeting notes or invite.** A 5-point briefing in the calendar invite body is all the prep most attendees need.

## Tips and variants

- **Tighter output:** add `"Each point max 20 words."` to the prompt.
- **Two-sided view:** add `"Include one 'concern' bullet — something a skeptic might raise."`
- **From a deck:** open the PowerPoint in Copilot — it reads slide titles and speaker notes with the same prompt.
- **Prep someone else:** forward the Copilot output to whoever is actually in the meeting.

## Next:

[:octicons-arrow-right-24: Adapt the output for a different audience](chat-adapt-audience.md)
