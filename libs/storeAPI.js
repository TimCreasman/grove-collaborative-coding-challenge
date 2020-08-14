const fs = require('fs');
const path = require('path');
const csv = require('@fast-csv/parse');
var helperFunctions = require("../libs/helperFunctions");
const config = require("../config.json");

/**
 * Finds the nearest store based on the provided latitude and longitude.
 * @param {float} lat the latitude
 * @param {float} lng the longitude
 */
exports.findNearestStore = function(lat, lng) {
    //Get store information from csv file
    var result = {};
    var closestStore = {};
    var shortestDistance = Infinity;
    return new Promise(function (resolve, reject) {
        fs.createReadStream(path.resolve(__dirname, '../data', config.storeFileName))
            .pipe(csv.parse({
                headers: true
            }))
            .on('error', error => reject(error))
            .on('data', row => {
                var distance = helperFunctions.distanceLatLng(lat, lng, row.Latitude, row.Longitude)
                if (distance < shortestDistance) {
                    shortestDistance = distance;
                    closestStore = row;
                }
            })
            .on('end', rowCount => {
                result.distance = shortestDistance;
                result.storeInfo = closestStore;
                resolve(result);
            });
    });
}
