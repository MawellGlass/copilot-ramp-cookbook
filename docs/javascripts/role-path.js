/* ──────────────────────────────────────────────────────────────────────────
 * role-path.js — interactive "proposed path" engine for the persona pages.
 *
 * Each persona page (docs/roles/*.md) drops in:
 *   <div id="role-path"></div>
 *   <script id="role-path-config" type="application/json"> { ...config... } </script>
 *
 * This engine reads that JSON config, renders a variable control bar (only the
 * variables the persona declares) plus a numbered "Your path" timeline, and
 * reshapes the path live as the reader changes any control — filtering steps,
 * swapping department-specific examples, nudging goal-matched steps up, and
 * showing/hiding optional steps by pace.
 *
 * Config is pure data (no functions) so it stays a clean <script type=json>.
 * ────────────────────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  // ── Variable catalogue (labels + ordered options) ─────────────────────────
  var VARS = {
    dept: {
      label: "Your function",
      opts: [
        { v: "general", t: "General" },
        { v: "hr", t: "HR" },
        { v: "it", t: "IT" },
        { v: "finance", t: "Finance" },
        { v: "sales", t: "Sales" },
        { v: "legal", t: "Legal" }
      ]
    },
    pace: {
      label: "Your pace",
      opts: [
        { v: "exploring", t: "Just exploring" },
        { v: "steady", t: "Steady" },
        { v: "ramp", t: "Multi-week ramp" }
      ]
    },
    skill: {
      label: "Your comfort",
      opts: [
        { v: "new", t: "Brand new" },
        { v: "some", t: "Some experience" },
        { v: "experienced", t: "Experienced" }
      ]
    },
    goal: {
      label: "Your goal",
      opts: [
        { v: "personal", t: "Personal productivity" },
        { v: "team", t: "Team rollout" },
        { v: "build", t: "Build an agent" }
      ]
    }
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // A step passes a list-filter when the step omits the key (applies to all) or
  // the selected value is in the step's allow-list. "all" in a list = wildcard.
  function passes(stepList, value) {
    if (!stepList || !stepList.length) return true;
    return stepList.indexOf("all") !== -1 || stepList.indexOf(value) !== -1;
  }

  // Resolve a step against the current selection: department variant merge +
  // visibility decision.
  function resolveStep(step, sel) {
    if (!passes(step.dept, sel.dept)) return null;
    if (!passes(step.skill, sel.skill)) return null;
    if (!passes(step.goal, sel.goal)) return null;
    if (!passes(step.pace, sel.pace)) return null;

    var out = {
      stage: step.stage,
      title: step.title,
      href: step.href,
      why: step.why,
      optional: !!step.optional,
      external: !!step.external,
      _i: step._i,
      _bump: 0,
      _goalMatch: false,
      _deptMatch: false
    };

    // Department-specific example swap.
    if (step.deptVariants && step.deptVariants[sel.dept]) {
      var dv = step.deptVariants[sel.dept];
      if (dv.title) out.title = dv.title;
      if (dv.href) out.href = dv.href;
      if (dv.why) out.why = dv.why;
      out._deptMatch = true;
    }

    // Goal weighting — nudge matched steps up within the list.
    if (step.weightGoal && typeof step.weightGoal[sel.goal] === "number") {
      out._bump = step.weightGoal[sel.goal];
      if (out._bump > 0) out._goalMatch = true;
    }

    return out;
  }

  function buildControls(cfg, sel) {
    var vars = cfg.variables || [];
    if (!vars.length) return "";
    var groups = vars.map(function (key) {
      var def = VARS[key];
      if (!def) return "";
      var btns = def.opts.map(function (o) {
        var active = sel[key] === o.v ? " active" : "";
        return '<button type="button" class="rp-opt' + active +
          '" data-var="' + key + '" data-val="' + esc(o.v) + '">' + esc(o.t) + "</button>";
      }).join("");
      return '<div class="rp-control">' +
        '<span class="rp-control-label">' + esc(def.label) + "</span>" +
        '<div class="rp-seg">' + btns + "</div></div>";
    }).join("");
    return '<div class="rp-controls" role="group" aria-label="Customise your path">' + groups + "</div>";
  }

  function buildSummary(cfg, sel, count) {
    var bits = (cfg.variables || []).map(function (key) {
      var def = VARS[key];
      if (!def) return null;
      var opt = def.opts.filter(function (o) { return o.v === sel[key]; })[0];
      return opt ? esc(opt.t) : null;
    }).filter(Boolean);
    return '<p class="rp-summary"><strong>' + count + " step" + (count === 1 ? "" : "s") +
      "</strong> tuned for: " + bits.join(" &middot; ") + "</p>";
  }

  function buildTimeline(steps) {
    if (!steps.length) {
      return '<p class="rp-empty">No steps match that combination yet — try a different mix.</p>';
    }
    var items = steps.map(function (s, idx) {
      var ext = s.external ? ' target="_blank" rel="noopener"' : "";
      var tags = "";
      if (s._goalMatch) tags += '<span class="rp-tag rp-tag-goal">Matches your goal</span>';
      if (s._deptMatch) tags += '<span class="rp-tag rp-tag-dept">Tailored example</span>';
      if (s.optional) tags += '<span class="rp-tag rp-tag-opt">Optional</span>';
      return '<li class="rp-step' + (s.optional ? " is-optional" : "") + '">' +
        '<span class="rp-num">' + (idx + 1) + "</span>" +
        '<div class="rp-body">' +
          '<span class="rp-stage">' + esc(s.stage) + "</span>" +
          '<a class="rp-title" href="' + esc(s.href) + '"' + ext + ">" + esc(s.title) + " &rarr;</a>" +
          (s.why ? '<p class="rp-why">' + esc(s.why) + "</p>" : "") +
          (tags ? '<div class="rp-tags">' + tags + "</div>" : "") +
        "</div></li>";
    }).join("");
    return '<ol class="rp-timeline">' + items + "</ol>";
  }

  function render(mount, cfg, sel) {
    var resolved = [];
    (cfg.steps || []).forEach(function (step) {
      var r = resolveStep(step, sel);
      if (r) resolved.push(r);
    });
    // Stable sort: original order, minus a small goal-bump so matched steps rise.
    resolved.sort(function (a, b) {
      return (a._i - a._bump * 0.5) - (b._i - b._bump * 0.5);
    });

    mount.innerHTML =
      buildControls(cfg, sel) +
      buildSummary(cfg, sel, resolved.length) +
      buildTimeline(resolved);

    mount.querySelectorAll(".rp-opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var k = btn.getAttribute("data-var");
        var v = btn.getAttribute("data-val");
        if (sel[k] === v) return;
        sel[k] = v;
        render(mount, cfg, sel);
      });
    });
  }

  function init() {
    var mount = document.getElementById("role-path");
    var cfgEl = document.getElementById("role-path-config");
    if (!mount || !cfgEl) return;

    var cfg;
    try {
      cfg = JSON.parse(cfgEl.textContent);
    } catch (e) {
      mount.innerHTML = '<p class="rp-empty">Could not load this path.</p>';
      return;
    }

    // Remember source order for stable sorting.
    (cfg.steps || []).forEach(function (s, i) { s._i = i; });

    var def = cfg.defaults || {};
    var sel = {};
    (cfg.variables || []).forEach(function (key) {
      var first = (VARS[key] && VARS[key].opts[0] && VARS[key].opts[0].v) || null;
      sel[key] = def[key] || first;
    });

    render(mount, cfg, sel);
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
