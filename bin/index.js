#!/usr/bin/env node

const yargs = require("yargs");
var geoCodeAPI = require("../libs/geoCodeAPI");
var storeAPI = require("../libs/storeAPI");
var helperFunctions = require("../libs/helperFunctions");

const options = yargs
    .usage("Usage:\n" +
    "  find_store --address=\"<address>\"\n" +
    "  find_store --address=\"<address>\" [--units=(mi|km)] [--output=text|json] \n" +
    "  find_store --zip=<zip> \n" +
    "  find_store --zip=<zip> [--units=(mi|km)] [--output=text|json]"
    )
    .options({
        "zip" : {
            describe: "Find nearest store to this zip code. If there are multiple best-matches, return the first.",
            type: "number",
        },
        "address": {
            describe: "Find nearest store to this address. If there are multiple best-matches, return the first.",
            type: "string",
        },
        "units": {
            describe: "Display units in miles or kilometers",
            default : "mi",
            type: "string"
        },
        "output": {
            describe: "Output in human-readable text, or in JSON (e.g. machine-readable)",
            type: "string"
        }
    })
    .check(function (argv) {
        if (argv.zip && argv.address ) {
            throw(new Error('Error: cannot specify both zip code and address.'));
        } else if (!argv.zip && !argv.address) {
            throw (new Error('Error: must specify either zip code or address.'));
        } else {
            return true;
        }
    })
    .argv;

var location;
options.address ? location = options.address : location = options.zip

console.log('Finding your location...');
geoCodeAPI.getLngLat(location).then(data => {
    console.log('Location found, finding nearest store...');
    storeAPI.findNearestStore(data.lat, data.lng).then(data => {
        var distance = {
            units : options.units,
            value : data.distance
        };
        if (options.units == 'km') {
            distance.value = helperFunctions.miToKm(distance.value);
        }
        data.distance = distance;
        if (options.output == 'json') {
            console.log(data);
        } else {
            console.log(`The nearest store is:
            ${data.storeInfo['Store Name']} at ${distance.value.toFixed(2)}${options.units} away.
            It is located at "${data.storeInfo.Address}" in ${data.storeInfo.City}, ${data.storeInfo.State} ${data.storeInfo['Zip Code']}`);
        }
    }).catch(err => console.log(err));
})
.catch(err => console.log(err));
