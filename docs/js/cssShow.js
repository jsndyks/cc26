/* cssShow.js
 *
 * Lecture notes:
 *   ?lectureNote=true
 *   ?ln=true
 *   ?ln=1
 *
 * CSS diagnostic:
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
  // CSS diagnostic
  // -----------------------------------------------------------------------

  if (!isTruthyParam(params.get("css"))) {
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


  // -----------------------------------------------------------------------
  // Build diagnostic panel
  // -----------------------------------------------------------------------

  const panel = document.createElement("div");
  panel.id = "css-info-badge";

  const link = document.createElement("a");
  link.href = css.href;
  link.textContent = css.label;
  link.title = "Open stylesheet";
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const version = document.createElement("div");
  version.className = "css-info-first-line";
  version.textContent = "reading stylesheet…";

  panel.appendChild(link);
  panel.appendChild(version);


  // -----------------------------------------------------------------------
  // Read first line of actual stylesheet
  // -----------------------------------------------------------------------

  fetch(css.href)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return response.text();
    })
    .then(text => {
      const firstLine = text.split(/\r?\n/, 1)[0];
      version.textContent = firstLine || "(blank first line)";
    })
    .catch(() => {
      version.textContent = "(unable to read first line)";
    });


  // -----------------------------------------------------------------------
  // Add panel
  // -----------------------------------------------------------------------

  const addBadge = () => {
    if (!document.getElementById("css-info-badge")) {
      document.body.appendChild(panel);
    }
  };

  if (document.body) {
    addBadge();
  } else {
    document.addEventListener("DOMContentLoaded", addBadge, { once: true });
  }
})();