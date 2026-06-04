---
title: Path Finder
hide: [toc]
---

# Path Finder

Answer two quick questions about your scenario and we'll point you at the Copilot surface that fits — Chat,
a first-party agent, Cowork, Agent Builder, Copilot Studio, or Microsoft Foundry. It's the
[decision tree](decision-tree.md), made clickable.

!!! warning "Unofficial — a guide, not a rule"
    This routes the *typical* case. Real decisions also weigh licensing, data sensitivity, and who owns the
    result. Treat the recommendation as a starting point, then confirm against
    [Licensing & Prerequisites](../prerequisites.md) and Microsoft's
    [which Copilot is right for you](https://learn.microsoft.com/en-us/copilot/) hub.

<div id="path-wizard" markdown="0">

<style>
#path-wizard { font-family: inherit; --pw-accent: var(--md-primary-fg-color); }

.pw-card {
  border: 1px solid var(--md-default-fg-color--lightest);
  border-radius: 12px;
  padding: 1.75rem 1.75rem 2rem;
  background: var(--md-default-bg-color);
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
}

/* progress */
.pw-progress { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1.25rem; }
.pw-dot {
  width: 0.7rem; height: 0.7rem; border-radius: 50%;
  background: var(--md-default-fg-color--lightest); transition: background 0.25s, transform 0.25s;
}
.pw-dot.active { background: var(--pw-accent); transform: scale(1.25); }
.pw-dot.done { background: var(--pw-accent); opacity: 0.5; }
.pw-step-label {
  font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;
  color: var(--md-default-fg-color--light); margin-left: auto;
}

/* question */
.pw-q { font-size: 1.4rem; font-weight: 700; line-height: 1.3; margin: 0 0 0.4rem; }
.pw-sub { color: var(--md-default-fg-color--light); margin: 0 0 1.4rem; font-size: 0.95rem; }

/* options */
.pw-options { display: grid; gap: 0.85rem; }
@media (min-width: 720px) { .pw-options.cols-2 { grid-template-columns: 1fr 1fr; } }
.pw-option {
  display: flex; align-items: flex-start; gap: 0.9rem; text-align: left;
  padding: 1rem 1.1rem; border: 1.5px solid var(--md-default-fg-color--lightest);
  border-radius: 10px; background: var(--md-code-bg-color); cursor: pointer;
  font-family: inherit; font-size: 1rem; color: var(--md-default-fg-color);
  transition: border-color 0.15s, transform 0.1s, box-shadow 0.15s; width: 100%;
}
.pw-option:hover { border-color: var(--pw-accent); transform: translateY(-2px); box-shadow: 0 4px 14px rgba(0,0,0,0.08); }
.pw-option:focus-visible { outline: 2px solid var(--pw-accent); outline-offset: 2px; }
.pw-option .ico { font-size: 1.5rem; line-height: 1.2; flex-shrink: 0; }
.pw-option .txt b { display: block; font-weight: 700; margin-bottom: 0.15rem; }
.pw-option .txt span { font-size: 0.85rem; color: var(--md-default-fg-color--light); }

/* nav buttons */
.pw-actions { display: flex; align-items: center; gap: 0.75rem; margin-top: 1.5rem; }
.pw-btn {
  display: inline-flex; align-items: center; gap: 0.4rem; cursor: pointer;
  padding: 0.45rem 1rem; border-radius: 6px; font-family: inherit; font-size: 0.88rem;
  border: 1px solid var(--md-default-fg-color--lighter); background: transparent;
  color: var(--md-default-fg-color--light); transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.pw-btn:hover { border-color: var(--pw-accent); color: var(--pw-accent); }
.pw-btn.primary { background: var(--pw-accent); border-color: var(--pw-accent); color: var(--md-primary-bg-color); }
.pw-btn.primary:hover { opacity: 0.9; color: var(--md-primary-bg-color); }
.pw-spacer { flex: 1; }

/* result */
.pw-result { animation: pwFade 0.35s ease; }
@keyframes pwFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
.pw-result-badge {
  font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--pw-accent); margin-bottom: 0.5rem;
}
.pw-result-head { display: flex; align-items: center; gap: 0.85rem; margin-bottom: 0.4rem; }
.pw-result-head .ico { font-size: 2.4rem; line-height: 1; }
.pw-result-head h2 { margin: 0; font-size: 1.7rem; font-weight: 800; }
.pw-tagline { color: var(--md-default-fg-color--light); font-size: 1.02rem; margin: 0 0 1.2rem; }
.pw-detail { margin: 1rem 0; }
.pw-detail h4 {
  font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
  color: var(--md-default-fg-color--light); margin: 0 0 0.3rem;
}
.pw-detail p { margin: 0; line-height: 1.55; }
.pw-alt {
  margin-top: 1.2rem; padding: 0.85rem 1rem; border-left: 3px solid var(--pw-accent);
  background: var(--md-code-bg-color); border-radius: 0 8px 8px 0; font-size: 0.9rem;
  color: var(--md-default-fg-color--light);
}
.pw-cta {
  display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 1.4rem;
  padding: 0.6rem 1.3rem; border-radius: 8px; background: var(--pw-accent);
  color: var(--md-primary-bg-color) !important; font-weight: 700; text-decoration: none;
  transition: opacity 0.15s, transform 0.1s;
}
.pw-cta:hover { opacity: 0.92; transform: translateY(-1px); }
.pw-crumbs { font-size: 0.8rem; color: var(--md-default-fg-color--lighter); margin-bottom: 0.9rem; }
.pw-crumbs span { color: var(--md-default-fg-color--light); }
</style>

<div class="pw-card" id="pw-card" aria-live="polite"></div>

<script>
(function () {
  // ── Decision graph (mirrors empowerment/decision-tree.md) ──────────────────
  var TREE = {
    start: {
      step: 1,
      q: "How often will you need this?",
      sub: "Start with the process, not the product \u2014 the rhythm of the work points you to the right surface. You don't need to know the tools yet.",
      cols: 2,
      options: [
        { ico: "\u26A1", title: "Once or occasionally",
          desc: "A specific task in front of me right now.", next: "once" },
        { ico: "\uD83D\uDD01", title: "Again and again",
          desc: "A repeatable need my team or org will reuse.", next: "recurring" }
      ]
    },
    once: {
      step: 2,
      q: "What does the task look like?",
      sub: "It's a one-off. Pick the shape that matches the work.",
      options: [
        { ico: "\uD83D\uDCAC", title: "A quick, single step",
          desc: "Draft, summarize, rewrite, or answer \u2014 right now.", next: "r_chat" },
        { ico: "\uD83D\uDE80", title: "A multi-step job to hand off",
          desc: "Several steps I'd rather delegate and let run.", next: "r_cowork" },
        { ico: "\uD83E\uDD16", title: "A specialized job",
          desc: "Deep research, data analysis, or facilitation.", next: "r_fpa" }
      ]
    },
    recurring: {
      step: 2,
      q: "Who will use it, and what does it need?",
      sub: "It'll happen again and again. How far does it need to reach?",
      options: [
        { ico: "\uD83E\uDDF1", title: "Just me or my team \u2014 keep it simple",
          desc: "A prompt and a few reference files, no code.", next: "r_ab" },
        { ico: "\uD83C\uDFE2", title: "The whole org \u2014 governed",
          desc: "Real knowledge, actions, connectors, and lifecycle.", next: "r_studio" },
        { ico: "\uD83D\uDEF0\uFE0F", title: "Engineered at scale",
          desc: "Pro-code, autonomous, custom models or MCP.", next: "r_foundry" }
      ]
    }
  };

  var RESULTS = {
    r_chat: {
      ico: "\uD83D\uDCAC", name: "Stage 1 \u00B7 Chat", stage: "Stage 1",
      tagline: "The fastest value. A single task in the flow of work rarely needs anything more than Chat.",
      why: "Your need is a one-off, single step \u2014 draft, summarize, rewrite, or answer \u2014 and you want it now. Chat handles it right inside the apps you already use.",
      watch: "If you find yourself pasting the same instructions over and over, that's a signal the work might graduate to an agent.",
      alt: "Recurring version of this task? Look at <b>Stage 4 \u00B7 Agent Builder</b> to package it.",
      href: "../../stages/stage-1-chat/", cta: "Go to Stage 1 \u00B7 Chat"
    },
    r_fpa: {
      ico: "\uD83E\uDD16", name: "Stage 2 \u00B7 First-party agents", stage: "Stage 2",
      tagline: "Before you build, check what Microsoft already ships. The best agent is the one you don't have to make.",
      why: "You need a specialist — research, analysis, facilitation — and there's a good chance it already exists in your license, ready to use.",
      watch: "Coverage varies by license and tenant settings. Confirm the agent is available to you before you plan around it.",
      alt: "Nothing fits? You may need to build \u2014 see <b>Stage 4 \u00B7 Agent Builder</b> or <b>Stage 5 \u00B7 Copilot Studio</b>.",
      href: "../../stages/stage-2-first-party/", cta: "Go to Stage 2 \u00B7 First-party agents"
    },
    r_cowork: {
      ico: "\uD83D\uDE80", name: "Stage 3 \u00B7 Cowork", stage: "Stage 3",
      tagline: "When a job is multi-step but you only need it this once, hand the whole thing off rather than standing up a reusable agent.",
      why: "The job has several steps, but it's a one-off. Cowork takes the delegation and runs it end to end.",
      watch: "If the same multi-step job recurs weekly, building a reusable agent will pay off over repeating the hand-off.",
      alt: "Same task every week? Package it as a <b>Stage 4 \u00B7 Agent Builder</b> agent.",
      href: "../../stages/stage-3-cowork/", cta: "Go to Stage 3 \u00B7 Cowork"
    },
    r_ab: {
      ico: "\uD83E\uDDF1", name: "Stage 4 \u00B7 Agent Builder", stage: "Stage 4",
      tagline: "The right home when the same task keeps recurring and a prompt-plus-files agent solves it.",
      why: "The need recurs, but it's just instructions plus a few reference files \u2014 no code, no connectors. Personal or team scope.",
      watch: "Need real knowledge sources, actions, or org-wide governance? That's where Agent Builder stops and Studio begins.",
      alt: "Outgrowing it? Graduate the working agent into <b>Stage 5 \u00B7 Copilot Studio</b> \u2014 cheaper than over-building on day one.",
      href: "../../stages/stage-4-agent-builder/", cta: "Go to Stage 4 \u00B7 Agent Builder"
    },
    r_studio: {
      ico: "\uD83C\uDFE2", name: "Stage 5 \u00B7 Copilot Studio", stage: "Stage 5",
      tagline: "Where agents grow up: real knowledge sources, connectors and actions, publishing, monitoring, and governance.",
      why: "The need recurs and has to reach the whole org \u2014 with grounded knowledge, actions or connectors, and a lifecycle you can manage. That's Studio's home turf.",
      watch: "Studio is low-code, not no-code. Budget time for environments, data boundaries, and a publish/monitor loop.",
      alt: "Need pro-code, custom models, or autonomous agents at scale? Step up to <b>Microsoft Foundry</b>.",
      href: "../../stages/stage-5-studio/", cta: "Go to Stage 5 \u00B7 Copilot Studio"
    },
    r_foundry: {
      ico: "\uD83D\uDEF0\uFE0F", name: "Microsoft Foundry", stage: "Foundry",
      tagline: "The pro-code frontier: autonomous and triggered agents, custom models, evaluation, and MCP tools at scale.",
      why: "You've outgrown low-code. The need is engineered \u2014 custom models, autonomous or triggered execution, evaluation pipelines, or MCP tools \u2014 run and operated like software.",
      watch: "This is a developer platform. Make sure you have the engineering ownership and governance to run it.",
      alt: "Most teams reach Foundry by graduating a <b>Studio</b> agent \u2014 not by starting here.",
      href: "https://learn.microsoft.com/en-us/azure/ai-foundry/", cta: "Explore Microsoft Foundry", external: true
    }
  };

  var INTRO = {
    intro: true,
    ico: "\uD83E\uDDED",
    q: "Find your starting surface",
    sub: "Two questions. Thirty seconds. A recommendation you can act on.",
    cta: "Start"
  };

  var card = document.getElementById("pw-card");
  if (!card) return;

  var path = [];   // stack of node keys visited (questions only)
  var labels = []; // chosen option titles, for the breadcrumb

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function renderIntro() {
    card.innerHTML =
      '<div class="pw-result" style="text-align:center">' +
        '<div style="font-size:3rem;line-height:1;margin-bottom:0.6rem">' + INTRO.ico + '</div>' +
        '<h2 style="margin:0 0 0.4rem;font-size:1.7rem;font-weight:800">' + esc(INTRO.q) + '</h2>' +
        '<p class="pw-tagline" style="margin:0 auto 1.4rem;max-width:34rem">' + esc(INTRO.sub) + '</p>' +
        '<button class="pw-cta" id="pw-start" style="border:none;cursor:pointer">' + esc(INTRO.cta) + ' \u2192</button>' +
      '</div>';
    document.getElementById("pw-start").addEventListener("click", function () {
      path = ["start"]; labels = []; renderNode("start");
    });
  }

  function renderNode(key) {
    var node = TREE[key];
    var dots = "";
    for (var i = 1; i <= 2; i++) {
      var cls = "pw-dot" + (i === node.step ? " active" : (i < node.step ? " done" : ""));
      dots += '<span class="' + cls + '"></span>';
    }
    var crumb = labels.length
      ? '<div class="pw-crumbs">Your path: ' + labels.map(function (l) { return '<span>' + esc(l) + '</span>'; }).join(" \u2192 ") + '</div>'
      : '';
    var opts = node.options.map(function (o, idx) {
      return '<button class="pw-option" data-next="' + o.next + '" data-idx="' + idx + '">' +
        '<span class="ico">' + o.ico + '</span>' +
        '<span class="txt"><b>' + esc(o.title) + '</b><span>' + esc(o.desc) + '</span></span>' +
      '</button>';
    }).join("");
    card.innerHTML =
      '<div class="pw-progress">' + dots +
        '<span class="pw-step-label">Step ' + node.step + ' of 2</span></div>' +
      crumb +
      '<h3 class="pw-q">' + esc(node.q) + '</h3>' +
      '<p class="pw-sub">' + esc(node.sub) + '</p>' +
      '<div class="pw-options' + (node.cols === 2 ? " cols-2" : "") + '">' + opts + '</div>' +
      '<div class="pw-actions">' +
        '<button class="pw-btn" id="pw-back">\u2190 Back</button>' +
        '<span class="pw-spacer"></span>' +
        '<button class="pw-btn" id="pw-restart">Start over</button>' +
      '</div>';

    card.querySelectorAll(".pw-option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = btn.getAttribute("data-next");
        labels.push(node.options[+btn.getAttribute("data-idx")].title);
        if (RESULTS[next]) { renderResult(next); }
        else { path.push(next); renderNode(next); }
      });
    });
    document.getElementById("pw-back").addEventListener("click", goBack);
    document.getElementById("pw-restart").addEventListener("click", restart);
  }

  function renderResult(key) {
    var r = RESULTS[key];
    var crumb = labels.length
      ? '<div class="pw-crumbs">Your path: ' + labels.map(function (l) { return '<span>' + esc(l) + '</span>'; }).join(" \u2192 ") + '</div>'
      : '';
    var ctaAttrs = r.external ? ' target="_blank" rel="noopener"' : '';
    card.innerHTML =
      '<div class="pw-result">' +
        '<div class="pw-progress"><span class="pw-dot done"></span><span class="pw-dot done"></span>' +
          '<span class="pw-step-label">Recommendation</span></div>' +
        crumb +
        '<div class="pw-result-badge">Your recommended surface</div>' +
        '<div class="pw-result-head"><span class="ico">' + r.ico + '</span><h2>' + esc(r.name) + '</h2></div>' +
        '<p class="pw-tagline">' + esc(r.tagline) + '</p>' +
        '<div class="pw-detail"><h4>Why this fits</h4><p>' + esc(r.why) + '</p></div>' +
        '<div class="pw-detail"><h4>Watch out for</h4><p>' + esc(r.watch) + '</p></div>' +
        '<div class="pw-alt">' + r.alt + '</div>' +
        '<a class="pw-cta" href="' + r.href + '"' + ctaAttrs + '>' + esc(r.cta) + ' \u2192</a>' +
        '<div class="pw-actions">' +
          '<button class="pw-btn" id="pw-back">\u2190 Back</button>' +
          '<span class="pw-spacer"></span>' +
          '<button class="pw-btn primary" id="pw-restart">Try another scenario</button>' +
        '</div>' +
      '</div>';
    document.getElementById("pw-back").addEventListener("click", goBack);
    document.getElementById("pw-restart").addEventListener("click", restart);
  }

  function goBack() {
    // On a result, labels has one more entry than the question stack: step back to
    // the last question rather than skipping it.
    if (labels.length === path.length && path.length > 0) {
      labels.pop();
      renderNode(path[path.length - 1]);
      return;
    }
    labels.pop();
    if (path.length > 1) { path.pop(); renderNode(path[path.length - 1]); }
    else { renderIntro(); }
  }

  function restart() { path = []; labels = []; renderIntro(); }

  function init() {
    var el = document.getElementById("pw-card");
    if (el) { card = el; restart(); }
  }

  // Material instant-loading safe init.
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
</script>

</div>

---

!!! tip "Prefer the full map?"
    The Path Finder collapses the same logic into two clicks. To see every branch at once — or to read it as a
    table — open [Choose the Right Path](decision-tree.md). When two destinations feel plausible, pick the
    **simpler** one first; it's far cheaper to graduate later than to over-build on day one.

> **📚 Learn more.**
>
> - [Which Copilot is right for you](https://learn.microsoft.com/en-us/copilot/) — Microsoft's official front door.
> - [Extend Microsoft 365 Copilot — options compared](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/) — declarative vs. custom-engine agents.
> - [Build your AI empowerment team](index.md) — who owns this decision, and how to prioritize the backlog behind it.
