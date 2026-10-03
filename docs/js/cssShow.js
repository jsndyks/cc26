/* cssShow.js
 *
 * Lecture notes:
 *   ?lectureNote=true
 *   ?ln=true
 *   ?ln=1
 *
 * Plain-text lecture-note authoring form:
 *   <div class="lectureNote">#1 : Title : explanatory text\nmore text</div>
 *   <div class="lectureNote">#4.1 : Title : explanatory text</div>
 *
 * Existing lectureNote markup is left untouched for backward compatibility.
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

  const lectureNoteTilt = note => {
    /*
     * Stable pseudo-random tilt derived from the note text.
     * Each note gets a slightly different angle, but the same note
     * keeps the same angle on every reload.
     */
    const text = note.textContent.replace(/\s+/g, " ").trim();
    let hash = 0;

    for (let i = 0; i < text.length; i += 1) {
      hash = ((hash << 5) - hash + text.charCodeAt(i)) | 0;
    }

    const steps = [-1.7, -1.2, -0.8, -0.4, 0.4, 0.8, 1.2, 1.7];
    return steps[Math.abs(hash) % steps.length] + "deg";
  };

  const parseLectureNotes = () => {
    document.querySelectorAll(".lectureNote").forEach(note => {
      note.style.setProperty("--lecture-note-tilt", lectureNoteTilt(note));
      /*
       * Backward compatibility:
       * if the note already contains HTML, leave it exactly as supplied.
       */
      if (
        note.classList.contains("lectureNote-parsed") ||
        note.children.length > 0
      ) {
        return;
      }

      const source = note.textContent.replace(/\s+/g, " ").trim();
      const firstColon = source.indexOf(":");
      const secondColon =
        firstColon === -1
          ? -1
          : source.indexOf(":", firstColon + 1);

      if (firstColon === -1 || secondColon === -1) {
        return;
      }

      const number = source.slice(0, firstColon).trim();
      const title = source.slice(firstColon + 1, secondColon).trim();
      const bodyText = source
        .slice(secondColon + 1)
        .trim()
        .replace(/\\n/g, "\n");

      /*
       * Only transform the explicit #number : title : text form.
       * Decimal-style note numbers such as #4.1 are also supported.
       */
      const numberMatch =
        number.match(/^#\s*(\d+)(\.\d+)?$/);

      if (!numberMatch || !title || !bodyText) {
        return;
      }

      const numberSpan = document.createElement("span");
      numberSpan.className = "lectureNote-number";

      const numberMajor = document.createElement("span");
      numberMajor.className = "lectureNote-number-major";
      numberMajor.textContent = "#" + numberMatch[1];
      numberSpan.appendChild(numberMajor);

      if (numberMatch[2]) {
        const numberMinor = document.createElement("span");
        numberMinor.className = "lectureNote-number-minor";
        numberMinor.textContent = numberMatch[2];
        numberSpan.appendChild(numberMinor);
      }

      const body = document.createElement("span");
      body.className = "lectureNote-body";

      const titleSpan = document.createElement("span");
      titleSpan.className = "lectureNote-title";
      titleSpan.textContent = title;

      const textSpan = document.createElement("span");
      textSpan.className = "lectureNote-text";
      textSpan.textContent = bodyText;

      body.appendChild(titleSpan);
      body.appendChild(textSpan);

      note.textContent = "";
      note.classList.add("lectureNote-parsed");
      note.appendChild(numberSpan);
      note.appendChild(body);
    });
  };

  if (showLectureNotes) {
    document.documentElement.classList.add("show-lecture-notes");

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", parseLectureNotes, { once: true });
    } else {
      parseLectureNotes();
    }
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
