/*
 * Creative Coding
 * Shared JavaScript dependencies
 */

const scripts = [
    "https://www.staff.city.ac.uk/~jwo/moodle/js/jquery-3.1.0.slim.min.js",
    "https://www.staff.city.ac.uk/~jwo/moodle/js/shCore.js",
    "https://www.staff.city.ac.uk/~jwo/moodle/js/shBrushProcessing.js",
    "https://www.staff.city.ac.uk/~jwo/moodle/js/highslide-with-html.packed.js",
    "https://www.staff.city.ac.uk/~jwo/moodle/js/highslide-cfg.js",
    "https://www.staff.city.ac.uk/~jwo/moodle/js/master.js",
    "https://jsndyks.github.io/cityCreativeCoding/js/iframeResizer.contentWindow.min.js"
];

function loadScript(index) {

    if (index >= scripts.length) {
        return;
    }

    const script = document.createElement("script");

    script.src = scripts[index];

    script.onload = function () {
        loadScript(index + 1);
    };

    document.head.appendChild(script);
}

loadScript(0);