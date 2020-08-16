const axios = require("axios");
const config = require("../config.json");

//Uses MapQuest's GeoCoding API: https://developer.mapquest.com/documentation/geocoding-api/

var createURL = function(location) {
    return `${config.geoCodeAPI.apiURL}?key=${config.geoCodeAPI.apiKey}&inFormat=kvp&outFormat=json&location=${location}&thumbMaps=false`;
}

/**
 * Returns the longitude and latitude based on a provided zip code or address.
 * @param {string | number} location the location to search for, it can either be a zipCode (number) or an address (string)
 */
exports.getLngLat = function (location) {
    return new Promise(function (resolve, reject) {
        if (!location) {
            reject("Invalid location");
        }
        var url = encodeURI(createURL(location));
        axios.get(url, {
            headers: {
                Accept: "application/json"
            }
        })
        .then(res => {
            resolve(res.data.results[0].locations[0].latLng)
        })
        .catch((res) => console.log(res.response.data));
    });
}
