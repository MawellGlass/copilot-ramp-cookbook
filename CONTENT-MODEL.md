# Content Model — how every page is built

This is the **locked spec** for content. Two object types: **catalog stubs** (breadth) and
**rich walkthroughs** (depth). Both use the same frontmatter so the site can filter across them.

---

## Frontmatter schema (every Markdown file)

```yaml
---
title: Turn a meeting into tracked follow-ups        # human title
stage: chat                                          # chat | first-party | cowork | agent-builder | studio | foundry
roles: [end-user, champion]                          # any of: end-user, champion, manager, maker, developer, it-admin
tags: [meetings, productivity, teams, outlook]       # free-form, used for the filter chips
level: starter                                       # starter | intermediate | advanced
time: 5 min                                          # realistic time to do it
status: walkthrough                                  # stub | walkthrough  (stub = catalog only, not yet expanded)
prereqs: [m365-copilot-license]                      # what must be true first
updated: 2026-06-03
---
```

**Controlled vocabularies** (keep these tight so filters stay clean):

- `stage`: `chat`, `first-party`, `cowork`, `agent-builder`, `studio`, `foundry`
- `roles`: `end-user`, `champion`, `manager`, `maker`, `developer`, `it-admin`
- `level`: `starter`, `intermediate`, `advanced`
- `status`: `stub` (catalog entry only) → `walkthrough` (fully expanded page)

---

## The rich-walkthrough template

Every full walkthrough follows this exact section order. **Do not reorder or skip sections** —
consistency is what makes the site feel trustworthy and scannable.

```markdown
# {Title}

> **One-line value.** What the reader gets out of this, in a sentence.

**Stage:** {stage} · **For:** {roles} · **Level:** {level} · **Time:** {time}

## When to use this
2–3 sentences. The real-world trigger ("You just got out of a 45-minute meeting and...").
Frame it as a situation, not a feature.

## What you'll need
- License / surface (e.g., "M365 Copilot in Teams")
- Any data or access (e.g., "the meeting had transcription on")
- Skill level assumed

## Try it now — the prompt
The copy-paste prompt, in a code block, with the variable parts clearly marked:

    Summarize today's [meeting name]. Pull out:
    - decisions made
    - action items with owners and due dates
    - anything left unresolved
    Format as a table I can paste into email.

Then 1–2 sentences on *why this prompt works* (specific ask, named output format, etc.).

## Step by step
Numbered steps with what the reader does AND what they should see back. Each step that has a
matching screenshot ends with an inline anchor `> 📷 _Screenshot NN — short caption._` whose number
maps to a file in the gallery below.

1. Open ... → you'll see ...
   > 📷 _Screenshot 01 — Copilot side panel open._
2. Paste the prompt → Copilot returns ...
   > 📷 _Screenshot 02 — structured action-item table._
3. Refine: "make the due dates this week" → ...

## Screenshots
The captured-from-the-real-product gallery. Images are produced by the Playwright capture tool
(`tooling/screenshots/`) and land in `screenshots/{slug}/`. Embed each shot in order, with a caption
that matches its inline anchor above. If a shot doesn't exist yet, leave the embed commented out and
the inline `> 📷` anchor in place — never fabricate a UI image.

```markdown
![01 — Copilot side panel open next to the Teams meeting recap](../screenshots/{slug}/01-open-copilot.png)
![02 — Structured action-item table with owners and due dates](../screenshots/{slug}/02-response.png)
```

**Naming convention:** `screenshots/{slug}/{NN}-{short-name}.png` — `{slug}` matches the walkthrough
filename (e.g. `chat-meeting-followups`), `{NN}` is a zero-padded order index, `{short-name}` is a
kebab-case label. Walkthroughs live in `walkthroughs/`, so the relative embed path is
`../screenshots/{slug}/{NN}-{short-name}.png`.

## Make it better
Follow-up prompts / refinements that level up the result. This is where power emerges.
- "Now draft an email to the owners with their action items."
- "Flag any action item that doesn't have a due date."

## Watch out for
Honest limitations & gotchas. Builds trust.
- Needs the transcript; won't work if recording was off.
- Double-check owners — Copilot can mis-attribute who said what.

## Where this leads (the ramp)
1–2 sentences pointing to the **next stage**. This is the connective tissue of the whole site.
> Once you're doing this by hand every day, the **[Facilitator agent](../first-party/...)**
> can do it automatically after every meeting — that's Stage 2.

## Related
- Links to sibling use cases and the stage's Resources section.
```

---

## Authoring rules

1. **Every prompt must be copy-pasteable.** Mark variables with `[square brackets]`.
2. **Always end with "Where this leads."** The ramp is the product. A walkthrough that doesn't
   point to the next rung is incomplete.
3. **Be honest in "Watch out for."** Customers trust the site *because* it names limits.
4. **No fabricated UI.** If you're not certain a button exists or is named X, describe the action
   ("open the agent's settings") rather than inventing a label. Verify against the linked Microsoft docs.
5. **Grounding > memory.** Product surfaces move fast. When in doubt, link the official doc in
   `RESOURCES.md` rather than describing stale UI.
6. **Keep stubs to 5 lines.** A stub is title + value + sample prompt. Don't half-write a walkthrough.
7. **Screenshots are captured, never faked.** Every image in the `## Screenshots` gallery must come
   from the Playwright capture tool running the real scenario (`tooling/screenshots/`). Follow the
   `screenshots/{slug}/{NN}-{short-name}.png` convention. Until a shot is captured, keep the inline
   `> 📷` anchor and leave the gallery embed commented out — a missing image is fine; a fabricated one
   breaks the site's trust contract.

---

## Stub format (for the catalog)

A catalog stub is the lightweight form — breadth without the production cost:

```markdown
### {Title}
**Stage:** {stage} · **For:** {roles} · `status: stub`
{One-line value.}
**Sample prompt:** `{a single paste-ready prompt}`
```

Stubs live in `CATALOG.md` and graduate into `walkthroughs/{stage}-{slug}.md` when expanded.
