// Renders ```mermaid fences ourselves.
//
// Material for MkDocs ships a built-in mermaid integration, but in this site's
// configuration it converts the <pre class="mermaid"> block into an *empty* div
// and never draws the diagram. To stay reliable we emit the fence with a neutral
// class (`mermaid-diagram`, set in mkdocs.yml) that Material ignores, then load
// mermaid ourselves and render each block — re-rendering on light/dark toggle.
(function () {
  "use strict";

  var MERMAID_ESM = "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
  var loader = null;
  var seq = 0;

  function loadMermaid() {
    if (!loader) {
      loader = import(MERMAID_ESM).then(function (mod) {
        var mermaid = mod.default;
        mermaid.initialize({ startOnLoad: false, securityLevel: "loose" });
        return mermaid;
      });
    }
    return loader;
  }

  function currentTheme() {
    var scheme = document.body.getAttribute("data-md-color-scheme");
    return scheme === "slate" ? "dark" : "default";
  }

  function draw(mermaid, host, src) {
    var id = "mmd-" + Date.now() + "-" + seq++;
    mermaid.initialize({ startOnLoad: false, securityLevel: "loose", theme: currentTheme() });
    return mermaid
      .render(id, src)
      .then(function (res) {
        host.innerHTML = res.svg;
        if (typeof res.bindFunctions === "function") res.bindFunctions(host);
      })
      .catch(function (err) {
        // On failure, fall back to showing the source so nothing is silently lost.
        host.textContent = src;
        if (window.console) console.error("mermaid render failed:", err);
      });
  }

  function render() {
    var blocks = document.querySelectorAll("pre.mermaid-diagram");
    if (!blocks.length) return;
    loadMermaid().then(function (mermaid) {
      Array.prototype.forEach.call(blocks, function (pre) {
        var code = pre.querySelector("code") || pre;
        var src = code.textContent;
        var host = document.createElement("div");
        host.className = "mermaid-rendered";
        host.setAttribute("data-mmd-src", src);
        pre.replaceWith(host);
        draw(mermaid, host, src);
      });
    });
  }

  // Re-colour existing diagrams when the user toggles light/dark.
  function watchTheme() {
    var scheme = document.body.getAttribute("data-md-color-scheme");
    var observer = new MutationObserver(function () {
      var next = document.body.getAttribute("data-md-color-scheme");
      if (next === scheme) return;
      scheme = next;
      var hosts = document.querySelectorAll(".mermaid-rendered[data-mmd-src]");
      if (!hosts.length) return;
      loadMermaid().then(function (mermaid) {
        Array.prototype.forEach.call(hosts, function (host) {
          draw(mermaid, host, host.getAttribute("data-mmd-src"));
        });
      });
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
  }

  function start() {
    render();
    watchTheme();
  }

  // Prefer Material's document$ stream (fires on every page) when present.
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(render);
    watchTheme();
  } else if (document.readyState !== "loading") {
    start();
  } else {
    document.addEventListener("DOMContentLoaded", start);
  }
})();
