var expect = require("chai").expect;
var storeAPI = require("../libs/storeAPI");

describe('Find nearest store function', () => {
    it('Finds the nearest store given a latitude and longitude', () => {
        var mockedData = {
            distance: 0.6635357468331087,
            storeInfo: {
                'Store Name': 'Raleigh Hwy 70',
                'Store Location': 'SEC US 70 & Lynn Rd',
                Address: '4841 Grove Barton Rd',
                City: 'Raleigh',
                State: 'NC',
                'Zip Code': '27613-1900',
                Latitude: '35.8705975',
                Longitude: '-78.7201235',
                County: 'Wake County'
            }
        }
        storeAPI.findNearestStore(35.863201, -78.712565).then(data => {
            expect(mockedData).to.eql(data);
        });
    });
});
