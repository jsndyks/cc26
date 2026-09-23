/* cssShow.js
   Show the active Creative Coding stylesheet name when ?css=show is present.
*/

(() => {
  const params = new URLSearchParams(window.location.search);

  if (params.get("css") !== "show") {
    return;
  }

  const cssNames = [...document.querySelectorAll('link[rel="stylesheet"]')]
    .map(link => {
      try {
        const url = new URL(link.href, window.location.href);
        const filename = url.pathname.split("/").pop();

        if (!/^creativeCoding.*\.css$/i.test(filename)) {
          return "";
        }

        return filename + url.search;
      } catch {
        return "";
      }
    })
    .filter(Boolean);

  if (!cssNames.length) {
    return;
  }

  document.documentElement.classList.add("show-css-info");
  document.documentElement.dataset.cssInfo = cssNames.join(" · ");
})();