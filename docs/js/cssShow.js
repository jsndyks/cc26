if (new URLSearchParams(location.search).get("css") === "show") {

  const stylesheets = [...document.querySelectorAll('link[rel="stylesheet"]')];

  const names = stylesheets
    .map(link => {
      try {
        return new URL(link.href).pathname.split('/').pop();
      } catch {
        return link.href;
      }
    })
    .filter(Boolean);

  document.documentElement.classList.add("show-css-info");
  document.documentElement.dataset.cssInfo = names.join(" · ");
}