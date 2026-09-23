/* cssShow.js
 *
 * ?css=show
 *     Shows a clickable link to the active Creative Coding stylesheet.
 *
 * ?lectureNote=true
 *     Shows elements with class="lectureNote".
 */

(() => {
  const params = new URLSearchParams(window.location.search);

  // -----------------------------------------------------------------------
  // Lecture notes
  // -----------------------------------------------------------------------

  if (params.get("lectureNote") === "true") {
    document.documentElement.classList.add("show-lecture-notes");
  }

  // -----------------------------------------------------------------------
  // CSS diagnostic badge
  // -----------------------------------------------------------------------

  if (params.get("css") !== "show") {
    return;
  }

  const stylesheets = [...document.querySelectorAll('link[rel="stylesheet"]')]
    .map(link => {
      try {
        const url = new URL(link.href, window.location.href);
        const filename = url.pathname.split("/").pop();

        if (!/^creativeCoding.*\.css$/i.test(filename)) {
          return null;
        }

        return {
          href: url.href,
          label: filename + url.search
        };
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  if (!stylesheets.length) {
    return;
  }

  const css = stylesheets[0];

  const badge = document.createElement("a");
  badge.id = "css-info-badge";
  badge.href = css.href;
  badge.textContent = css.label;
  badge.title = "Open stylesheet";
  badge.target = "_blank";
  badge.rel = "noopener noreferrer";

  const addBadge = () => {
    if (!document.getElementById("css-info-badge")) {
      document.body.appendChild(badge);
    }
  };

  if (document.body) {
    addBadge();
  } else {
    document.addEventListener("DOMContentLoaded", addBadge, { once: true });
  }
})();