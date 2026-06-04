// Interactive role filter chips for the Use-Case Catalog.
// Activates only on the page containing #catalog-filters. Parses each catalog
// entry (an <h3> plus its following nodes), reads roles from the "For:" line,
// and shows/hides entries — and empty stage sections — as chips are clicked.
(function () {
  function init() {
    var bar = document.getElementById("catalog-filters");
    if (!bar || bar.getAttribute("data-cf-init")) return;
    var article = bar.closest("article") || document.querySelector(".md-content article");
    if (!article) return;
    bar.setAttribute("data-cf-init", "1");

    var nodes = Array.prototype.slice.call(article.children);
    var stages = [];
    var curStage = null;
    var cur = null;

    nodes.forEach(function (el) {
      var tag = el.tagName;
      if (tag === "H2") {
        curStage = { h2: el, extras: [], groups: [] };
        stages.push(curStage);
        cur = null;
      } else if (tag === "H3") {
        cur = { els: [el], roles: [] };
        if (curStage) curStage.groups.push(cur);
      } else if (tag === "HR") {
        cur = null;
        if (curStage) curStage.extras.push(el);
      } else if (cur) {
        cur.els.push(el);
        if (!cur.roles.length && el.textContent.indexOf("For:") !== -1) {
          var m = el.textContent.match(/For:\s*([^\u00b7\n]+)/);
          if (m) {
            cur.roles = m[1].split(",").map(function (s) {
              return s.trim().toLowerCase();
            }).filter(Boolean);
          }
        }
      } else if (curStage) {
        curStage.extras.push(el);
      }
    });

    // Tally how many entries carry each role.
    var counts = {};
    var totalGroups = 0;
    stages.forEach(function (st) {
      st.groups.forEach(function (g) {
        totalGroups++;
        g.roles.forEach(function (r) { counts[r] = (counts[r] || 0) + 1; });
      });
    });

    var ORDER = ["end-user", "champion", "manager", "maker", "it-admin", "hr", "finance", "legal"];
    var LABELS = {
      "end-user": "End user",
      "it-admin": "IT / admin",
      "hr": "HR"
    };
    function label(key) {
      return LABELS[key] || key.replace(/(^|[-\s])([a-z])/g, function (_, p, c) {
        return p + c.toUpperCase();
      });
    }

    var present = ORDER.filter(function (r) { return counts[r]; });
    Object.keys(counts).forEach(function (r) {
      if (present.indexOf(r) === -1) present.push(r);
    });

    var chips = [];
    function makeChip(key, text, count) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "cf-chip";
      b.setAttribute("data-role", key);
      b.setAttribute("aria-pressed", key === "all" ? "true" : "false");
      b.innerHTML = text + (count != null ? ' <span class="cf-count">' + count + "</span>" : "");
      b.addEventListener("click", function () { apply(key); });
      bar.appendChild(b);
      chips.push(b);
    }

    function apply(key) {
      chips.forEach(function (c) {
        c.setAttribute("aria-pressed", c.getAttribute("data-role") === key ? "true" : "false");
      });
      stages.forEach(function (st) {
        var vis = 0;
        st.groups.forEach(function (g) {
          // Entries with no parsed role (e.g. "Adapts to:") always show.
          var show = key === "all" || g.roles.length === 0 || g.roles.indexOf(key) !== -1;
          g.els.forEach(function (e) { e.style.display = show ? "" : "none"; });
          if (show) vis++;
        });
        var stageShow = vis > 0;
        if (st.h2) st.h2.style.display = stageShow ? "" : "none";
        st.extras.forEach(function (e) { e.style.display = stageShow ? "" : "none"; });
      });
    }

    makeChip("all", "All", totalGroups);
    present.forEach(function (r) { makeChip(r, label(r), counts[r]); });
    apply("all");
  }

  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  }
})();
