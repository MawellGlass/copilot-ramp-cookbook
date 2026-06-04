// Expand collapsible navigation sections by default, while keeping them
// user-collapsible. Material's `navigation.expand` is unreliable when combined
// with `navigation.tabs`, so we set the initial "open" state ourselves by
// checking the native nav toggles. Clicking a section label still collapses it.
(function () {
  function expandNav() {
    var toggles = document.querySelectorAll(
      ".md-sidebar--primary .md-nav__toggle"
    );
    toggles.forEach(function (toggle) {
      toggle.checked = true;
    });
  }

  // Run once the DOM is ready.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", expandNav);
  } else {
    expandNav();
  }

  // Re-run on Material's instant navigation events, if enabled.
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(expandNav);
  }
})();
