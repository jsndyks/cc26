/*
 * Site-wide configuration of the Highslide window appearance
 * Original: Jo Wood, 10th September 2014
 *
 * Updated: 25th September 2026
 * - Moved Highslide graphics to:
 *   https://jsndyks.github.io/cc26/js/city/graphics/
 * - loadSketch() now sets both popup width and height.
 * - Existing loadSketch() calls remain backward compatible:
 *   if no sketchHeight is supplied, height defaults to sketchWidth.
 * - loadImage() now sets both popup width and height explicitly.
 */

hs.graphicsDir = 'https://jsndyks.github.io/cc26/js/city/graphics/';
hs.showCredits = false;
hs.outlineType = 'rounded-white';
hs.wrapperClassName = 'draggable-header';
hs.preserveContent = false;
hs.enableKeyListener = false;


/**
 * Load an interactive sketch in a Highslide iframe.
 *
 * sketchSrc    URL of sketch folder, without /index.html
 * sketchWidth  width of popup iframe
 * imgWidth     width of preview image
 * imgSrc       URL of preview image
 * sketchHeight optional popup height; defaults to sketchWidth
 */
function loadSketch(sketchSrc, sketchWidth, imgWidth, imgSrc, sketchHeight)
{
    // Backward compatibility:
    // old four-argument calls use a square popup.
    if (sketchHeight === undefined) {
        sketchHeight = sketchWidth;
    }

    document.write(
        "<div><a href=\"" + sketchSrc + "/index.html\" " +
        "onclick=\"return hs.htmlExpand(this, {" +
        "objectType: 'iframe', " +
        "width: " + sketchWidth + ", " +
        "height: " + sketchHeight +
        "})\">"
    );

    document.write(
        "<img src=\"" + imgSrc +
        "\" width=\"" + imgWidth +
        "\" alt=\"click to see sketch\" /></a></div>"
    );
}


/**
 * Load an image in a Highslide iframe.
 *
 * imgFile   URL of image
 * imgWidth  width of image and popup
 * imgHeight height of image and popup
 * imgAlt    alternative text
 */
function loadImage(imgFile, imgWidth, imgHeight, imgAlt)
{
    document.write(
        "<div><a href=\"" + imgFile + "\" " +
        "onclick=\"return hs.htmlExpand(this, {" +
        "objectType: 'iframe', " +
        "width: " + imgWidth + ", " +
        "height: " + imgHeight +
        "})\">"
    );

    document.write(
        "<img src=\"" + imgFile +
        "\" width=\"" + imgWidth +
        "\" height=\"" + imgHeight +
        "\" alt=\"" + imgAlt +
        "\" /></a></div>"
    );
}