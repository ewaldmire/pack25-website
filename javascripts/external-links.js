// Automatically opens external links (and PDFs/downloads) in a new tab,
// so nobody has to remember to add {target="_blank"} to every link.
// Internal site links are untouched and still navigate normally.
document.addEventListener("DOMContentLoaded", function () {
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var href = link.getAttribute("href");
    if (!href) continue;

    var isExternal = link.hostname && link.hostname !== window.location.hostname;

    if (isExternal) {
      link.setAttribute("target", "_blank");
      // noopener prevents the new tab from getting a reference back to
      // this page (a small security best-practice for target="_blank").
      link.setAttribute("rel", "noopener");
    }
  }
});
