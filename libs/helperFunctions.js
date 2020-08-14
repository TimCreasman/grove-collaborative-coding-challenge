const CONVERSION_VALUE = 0.62137;
const KILOMETERS_ARC_DISTANCE = 6371; //

/**
 * Converts miles to kilometers.
 * @param {float} miles
 */
exports.miToKm = function (miles) {
    return (miles / CONVERSION_VALUE);
};

/**
 * Converts kilometers to miles.
 * @param {float} kilometers
 */
exports.kmToMi = function (kilometers) {
    return (kilometers * CONVERSION_VALUE);
};

/**
 * Calculates the distance (over the curve of the earth) between two coordinates.
 * This formula is commonly called the haversine formula and was adapted from this webiste:
 * https://www.movable-type.co.uk/scripts/latlong.html.
 * @param {float} lat1 The first point's latitude
 * @param {float} lng1 The first point's longitude
 * @param {float} lat2 The second point's latitude
 * @param {float} lng2 The second point's longitude
 */
exports.distanceLatLng = function (lat1, lng1, lat2, lng2) {
    //Conversion of lat and lng to radians
    var radians1 = lat1 * Math.PI / 180;
    var radians2 = lat2 * Math.PI / 180;
    var diffRadians1 = (lat2 - lat1) * Math.PI / 180;
    var diffRadians2 = (lng2 - lng1) * Math.PI / 180;

    //Arc distance calculation
    var a = Math.sin(diffRadians1 / 2) * Math.sin(diffRadians1 / 2) +
        Math.cos(radians1) * Math.cos(radians2) *
        Math.sin(diffRadians2 / 2) * Math.sin(diffRadians2 / 2);
    var unitlessDistance = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return CONVERSION_VALUE * KILOMETERS_ARC_DISTANCE * unitlessDistance;
}
