---
title: Design a multi-turn conversation with fallback and clarification
stage: studio
roles: [maker]
tags: [studio, conversation-design, topics, fallback]
level: intermediate
time: 30 min
status: walkthrough
prereqs: [copilot-studio-license, environment-access]
updated: 2026-06-03
---

# Design a multi-turn conversation with fallback and clarification

> Build an agent that asks what it needs to know before it answers — and recovers gracefully when a user says something unexpected.

**Stage:** Copilot Studio · **For:** Maker · **Level:** Intermediate · **Time:** 30 min

## When to use this

Your agent needs context before it can give a useful answer — "which product?", "which region?", "what's your employee ID?" — and single-turn topics don't cover that. Or users keep saying things your topic triggers don't handle, leading to dead ends and "I didn't understand that."

This walkthrough covers two core conversation design patterns: **clarification loops** (getting required context from users) and **fallback handling** (recovering gracefully when a topic doesn't match).

## What you'll need

- **Copilot Studio** access and an existing agent
- A topic that currently gives the same answer regardless of user context (good candidate for clarification)
- An understanding of what your agent's "unknown" failure mode looks like (check the conversation transcripts)

## Part 1: Building a clarification loop

### When to use clarification
Use a clarification question when the answer genuinely depends on user context that can't be inferred from the trigger phrase alone. Ask *at most* 2-3 questions per topic — if you need more, the topic scope is probably too broad.

### Step by step

1. **Identify the decision point.** In your topic, find the branch where you'd give different answers based on context. That's where the clarification question goes.

2. **Add a Question node.** Before the answer node, insert a **Question** node. Write the question in plain, conversational language:
   - ✅ `"Which product are you asking about?"`
   - ❌ `"Please specify the product_id parameter."`

3. **Define expected responses.** Use the **Multiple choice** question type when the options are known and finite. This keeps the conversation on-rails and lets Studio match responses confidently.

4. **Branch based on the answer.** Add a **Condition** node after the question that routes to different answer nodes based on the variable value.

5. **Validate the flow.** Test every branch in the Studio test panel — not just the happy path.

### Handling unexpected answers to a clarification question

If the user says something that doesn't match any option:

- Add a "None of the above" option that routes to: `"I can only help with [A], [B], or [C]. For anything else, please contact [support]."`
- Or use an **Other** branch to retry the question once: `"I didn't catch that — did you mean [A] or [B]?"`

Never loop more than once on the same clarification question.

## Part 2: Designing fallback topics

### The system fallback topic

Copilot Studio has a built-in **Fallback** system topic that fires when no other topic matches. By default it says something generic. You should customize it.

### Step by step

1. **Open the Fallback topic** in the system topics list.

2. **Replace the default message** with something that helps the user recover:
   ```
   I'm not sure I understood that. I'm best at helping with:
   - [Topic 1]
   - [Topic 2]
   - [Topic 3]
   
   You can ask me about any of those, or contact [support team] for anything else.
   ```

3. **Add a retry path.** After the message, add a Question node: `"Is there something from that list I can help with?"` with your main topic areas as options. This gives users a guided re-entry instead of a dead end.

4. **Log fallback frequency.** In the Analytics tab, monitor the Escalation Rate and Unrecognized Intents. High fallback rates mean trigger phrases need tuning or new topics need building.

### Graceful escalation

If the user is stuck after one retry, route to a human escalation path:

```
I'm sorry I couldn't help with that. Let me connect you with [support team].
[Link to support ticket / Teams channel / email]
```

Don't loop endlessly — a dead end is better than a frustrating loop.

## Tips and design principles

- **One question, one variable.** Don't ask compound questions ("What product and what region?"). Ask one at a time.
- **Show options when possible.** Choices reduce ambiguity and make the agent feel more reliable.
- **Fallback is a signal, not a failure.** High fallback rates tell you which topics to build next.
- **Test with real users, not just yourself.** The questions real users ask rarely match what the builder expected.

## Next:

[:octicons-arrow-right-24: Configure an autonomous event-triggered agent](studio-autonomous-triggers.md)
