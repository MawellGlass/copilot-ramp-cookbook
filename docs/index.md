---
title: Copilot Ramp Cookbook
hide:
  - navigation
  - toc
---

<div class="unofficial-ribbon">
  <strong>⚠️ Unofficial.</strong> A personal / community project — not affiliated with, endorsed by, or an official resource of Microsoft. Product names &amp; trademarks belong to Microsoft.
</div>

<span class="home-eyebrow">From your first chat to production agents</span>

# Get started with Microsoft Copilot — then grow all the way to building agents.

<p class="home-lede">Most people stall at "I have Copilot, now what?" This cookbook lays out a natural ramp: start by <em>using</em> Copilot, get comfortable letting agents do work for you, then take the leap to <em>building</em> your own — first in Agent Builder, then in Copilot Studio, and into Foundry when you need pro-code.</p>

<div class="journey">
  <a class="step" href="stages/stage-1-chat/"><span class="n">STAGE 1</span><span class="t">Copilot Chat</span><span class="d">A daily habit and a first "wow."</span></a>
  <span class="arrow">→</span>
  <a class="step" href="stages/stage-2-first-party/"><span class="n">STAGE 2</span><span class="t">First-Party Agents</span><span class="d">Delegate to what Microsoft already built.</span></a>
  <span class="arrow">→</span>
  <a class="step" href="stages/stage-3-cowork/"><span class="n">STAGE 3</span><span class="t">Cowork</span><span class="d">Hand off whole multi-step tasks.</span></a>
  <span class="arrow">→</span>
  <a class="step" href="stages/stage-4-agent-builder/"><span class="n">STAGE 4</span><span class="t">Agent Builder</span><span class="d">Your first taste of <em>making</em>.</span></a>
  <span class="arrow">→</span>
  <a class="step dest" href="stages/stage-5-studio/"><span class="n">STAGE 5</span><span class="t">Copilot Studio</span><span class="d">Build real, production-grade agents.</span></a>
  <span class="arrow">→</span>
  <a class="step dest" href="stages/stage-6-foundry/"><span class="n">STAGE 6</span><span class="t">Foundry</span><span class="d">The pro-code frontier, when you need it.</span></a>
</div>

<p class="audience"><strong>Who it's for:</strong> end users who want a first win · champions rolling Copilot out to a team · managers building the case · makers ready to build their first agent · developers engineering pro-code agents in Foundry · IT/admins enabling each stage safely.</p>

## Find your starting point

Not every tool is for every person. This is where each role tends to spend time day to day — a heavier dot means you're more likely to live there. Click any stage to jump to it.

<div class="matrix-wrap">
<table class="home-matrix">
<thead><tr>
  <th class="corner">Your role</th>
  <th><a href="stages/stage-1-chat/"><span class="stagenum">STAGE 1</span>Copilot Chat</a></th>
  <th><a href="stages/stage-2-first-party/"><span class="stagenum">STAGE 2</span>First-Party</a></th>
  <th><a href="stages/stage-3-cowork/"><span class="stagenum">STAGE 3</span>Cowork</a></th>
  <th><a href="stages/stage-4-agent-builder/"><span class="stagenum">STAGE 4</span>Agent Builder</a></th>
  <th><a href="stages/stage-5-studio/"><span class="stagenum">STAGE 5</span>Studio</a></th>
  <th><a href="stages/stage-6-foundry/"><span class="stagenum">STAGE 6</span>Foundry</a></th>
</tr></thead>
<tbody>
<tr><th>End user</th>  <td class="lvl3"><span class="dot">●●●</span></td><td class="lvl3"><span class="dot">●●●</span></td><td class="lvl2"><span class="dot">●●○</span></td><td class="lvl0"><span class="dot">○○○</span></td><td class="lvl0"><span class="dot">○○○</span></td><td class="lvl0"><span class="dot">○○○</span></td></tr>
<tr><th>Champion</th>  <td class="lvl3"><span class="dot">●●●</span></td><td class="lvl3"><span class="dot">●●●</span></td><td class="lvl2"><span class="dot">●●○</span></td><td class="lvl2"><span class="dot">●●○</span></td><td class="lvl1"><span class="dot">●○○</span></td><td class="lvl0"><span class="dot">○○○</span></td></tr>
<tr><th>Manager</th>   <td class="lvl3"><span class="dot">●●●</span></td><td class="lvl2"><span class="dot">●●○</span></td><td class="lvl3"><span class="dot">●●●</span></td><td class="lvl1"><span class="dot">●○○</span></td><td class="lvl1"><span class="dot">●○○</span></td><td class="lvl0"><span class="dot">○○○</span></td></tr>
<tr><th>Maker</th>     <td class="lvl2"><span class="dot">●●○</span></td><td class="lvl2"><span class="dot">●●○</span></td><td class="lvl2"><span class="dot">●●○</span></td><td class="lvl3"><span class="dot">●●●</span></td><td class="lvl3"><span class="dot">●●●</span></td><td class="lvl1"><span class="dot">●○○</span></td></tr>
<tr><th>Developer</th> <td class="lvl2"><span class="dot">●●○</span></td><td class="lvl1"><span class="dot">●○○</span></td><td class="lvl2"><span class="dot">●●○</span></td><td class="lvl1"><span class="dot">●○○</span></td><td class="lvl3"><span class="dot">●●●</span></td><td class="lvl3"><span class="dot">●●●</span></td></tr>
<tr><th>IT / admin</th><td class="lvl2"><span class="dot">●●○</span></td><td class="lvl2"><span class="dot">●●○</span></td><td class="lvl2"><span class="dot">●●○</span></td><td class="lvl2"><span class="dot">●●○</span></td><td class="lvl3"><span class="dot">●●●</span></td><td class="lvl3"><span class="dot">●●●</span></td></tr>
</tbody>
</table>
</div>

<div class="matrix-key">
  <span class="k3"><b>●●●</b> Primary — lives here</span>
  <span class="k2"><b>●●○</b> Regular</span>
  <span class="k1"><b>●○○</b> Occasional</span>
  <span class="k0"><b>○○○</b> Rarely</span>
</div>

Each stage has an **overview**, **use cases** you can filter by your role, and **curated Microsoft resources**. Start anywhere — but the ramp is the point.

[Start at Stage 1 → Copilot Chat](stages/stage-1-chat.md){ .md-button .md-button--primary }

!!! tip "Leading a rollout, not just learning yourself?"
    The stages above ramp an *individual*. If you're standing up Copilot for an *organization*, see
    **[Build your AI empowerment team](empowerment/index.md)** — who's on the team, and a
    [decision tree](empowerment/decision-tree.md) for routing each idea to the right tool.

---

<div class="home-resources">
<p class="res-heading">📚 Start learning right now — the cross-journey set</p>
<p class="res-sub">You don't have to drill into a stage to start. These first-party hubs span the whole journey — the best front doors for any role. Every link is Microsoft-direct.</p>
<div class="reslist">
  <a class="reslink" href="https://learn.microsoft.com/en-us/copilot/" target="_blank" rel="noopener">
    <span class="rt"><span aria-hidden="true">→</span>Which Copilot is right for you</span>
    <span class="rd">Microsoft Learn hub mapping every Copilot — M365, Studio, Power Platform, Security, Fabric, Azure, GitHub.</span>
    <span class="src">Microsoft · learn.microsoft.com</span>
  </a>
  <a class="reslink" href="https://adoption.microsoft.com/en-us/copilot/" target="_blank" rel="noopener">
    <span class="rt"><span aria-hidden="true">→</span>M365 Copilot Adoption Hub</span>
    <span class="rd">The flagship adoption site — get started, leaders, communities, and "go further."</span>
    <span class="src">Microsoft · adoption.microsoft.com</span>
  </a>
  <a class="reslink" href="https://adoption.microsoft.com/en-us/copilot/success-kit/" target="_blank" rel="noopener">
    <span class="rt"><span aria-hidden="true">→</span>Copilot Success Kit</span>
    <span class="rd">Role-based downloadable kit: implementation framework, technical readiness, enablement templates.</span>
    <span class="src">Microsoft · adoption.microsoft.com</span>
  </a>
  <a class="reslink" href="https://adoption.microsoft.com/en-us/scenario-library/" target="_blank" rel="noopener">
    <span class="rt"><span aria-hidden="true">→</span>Microsoft Scenario Library</span>
    <span class="rd">Role / function / industry use cases with sample prompts — the deepest first-party use-case bank.</span>
    <span class="src">Microsoft · adoption.microsoft.com</span>
  </a>
  <a class="reslink" href="https://aka.ms/agentresources" target="_blank" rel="noopener">
    <span class="rt"><span aria-hidden="true">→</span>Agent Resources (CAT front door)</span>
    <span class="rd">Curated hub for all things agents, from the Microsoft Copilot Acceleration Team.</span>
    <span class="src">Microsoft · aka.ms</span>
  </a>
  <a class="reslink" href="https://www.youtube.com/c/MicrosoftMechanicsSeries" target="_blank" rel="noopener">
    <span class="rt"><span aria-hidden="true">▶</span>Microsoft Mechanics</span>
    <span class="rd">Microsoft's official "how the tech works" channel, hosted by Jeremy Chapman (Director, M365).</span>
    <span class="src">Microsoft · YouTube</span>
  </a>
</div>
<p class="res-rule">Stage-specific links live on each stage page and in full in <a href="RESOURCES/">Resources</a>.</p>
</div>

---

## How to read a walkthrough

Every walkthrough on this site follows the same shape, so you always know where to look:

- **Try it now — the prompt.** A copy-paste prompt you can run in under a minute.
- **Step by step.** The full path, with screenshots.
- **Make it better / Watch out for.** How to level up, and the traps to avoid.
- **Where this leads.** The next rung on the ramp.

The fastest way to start: open **[Turn a meeting into tracked follow-ups](walkthroughs/chat-meeting-followups.md)** and paste the prompt into Copilot Chat.

---

## Where this came from

The ramp is inspired by the grassroots, use-case-first spirit of [Sean Galliher's Cowork Cookbook](https://coworkcookbook.com/) (a community project, unofficial). Where his book goes deep on Cowork across business processes, this site goes *wide* across the five-stage journey — pointing you toward Microsoft's own [Copilot hub](https://learn.microsoft.com/en-us/copilot/) and [Adoption Hub](https://adoption.microsoft.com/en-us/copilot/) at every step.
