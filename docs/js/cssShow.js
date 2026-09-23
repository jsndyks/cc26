/* cssShow.js
 *
 * Lecture notes:
 *   ?lectureNote=true
 *   ?ln=true
 *   ?ln=1
 *
 * CSS diagnostic badge:
 *   ?css=show
 *   ?css=true
 *   ?css=1
 */

(() => {
  const params = new URLSearchParams(window.location.search);

  const isTruthyParam = value =>
    value === "1" ||
    value === "true" ||
    value === "show";


  // -----------------------------------------------------------------------
  // Lecture notes
  // -----------------------------------------------------------------------

  const showLectureNotes =
    params.get("lectureNote") === "true" ||
    isTruthyParam(params.get("ln"));

  if (showLectureNotes) {
    document.documentElement.classList.add("show-lecture-notes");
  }


  // -----------------------------------------------------------------------
  // CSS diagnostic badge
  // -----------------------------------------------------------------------

  const showCssInfo =
    isTruthyParam(params.get("css"));

  if (!showCssInfo) {
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