var expect = require("chai").expect;
var geoCodeAPI = require("../libs/geoCodeAPI");

describe('Get longitude and latitude', () => {
    it('Should throw error on invalid location', () => {
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
        geoCodeAPI.getLngLat('').catch(err => {
            expect(err).to.eql('Invalid location');
        });
    });
});
