/**
 * Define url based on api image object
 * @param image
 * @returns {*}
 */
const getImageUrl = function (image) {
    let img = image;
    if (img.hasOwnProperty('images') && img.images.length) {
        img = img.images[0];
    }
    if (img.hasOwnProperty('gifv')) {
        return img.gifv;
    }
    if (img.hasOwnProperty('link')) {
        return img.link;
    }
};

export {
    getImageUrl
}
