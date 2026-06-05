/* Page feedback widget — "Was this page helpful? 👍 👎"
   No analytics, no storage. 👍/👎 simply reveals a thank-you line; 👎 surfaces a
   prefilled GitHub issue link so confused readers can say exactly where the ramp broke.
   Wired via Material's document$ observable so it re-binds on instant navigation. */
(function () {
  "use strict";

  function wire() {
    var widget = document.querySelector(".page-feedback[data-feedback]");
    if (!widget || widget.dataset.bound === "1") return;
    widget.dataset.bound = "1";

    var ask = widget.querySelector(".pf-ask");
    var thanksUp = widget.querySelector(".pf-thanks-up");
    var thanksDown = widget.querySelector(".pf-thanks-down");

    widget.addEventListener("click", function (e) {
      var btn = e.target.closest(".pf-btn");
      if (!btn) return;
      var vote = btn.getAttribute("data-pf");
      if (ask) ask.hidden = true;
      if (vote === "up" && thanksUp) thanksUp.hidden = false;
      if (vote === "down" && thanksDown) thanksDown.hidden = false;
    });
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(wire);
  } else if (document.readyState !== "loading") {
    wire();
  } else {
    document.addEventListener("DOMContentLoaded", wire);
  }
})();
