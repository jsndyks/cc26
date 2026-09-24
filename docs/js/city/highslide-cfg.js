/* Site-wide configuration of the highslide window appearance */
/* Jo Wood, 10th September, 2014 */
hs.graphicsDir = 'http://staff.city.ac.uk/~jwo/moodle/css/graphics/';
hs.showCredits = false;
hs.outlineType = 'rounded-white'; 
hs.wrapperClassName = 'draggable-header'; 
hs.preserveContent = false;
hs.enableKeyListener = false;





function loadSketch(sketchSrc, sketchWidth, imgWidth, imgSrc, sketchHeight)
{
    // Backward compatibility:
    // if no height is supplied, use the sketch width.
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