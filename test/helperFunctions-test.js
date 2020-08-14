var expect = require("chai").expect;
var helperFunctions = require("../libs/helperFunctions");

describe('Units Converter', () => {
    describe('Miles to Kilometers', () => {
        it('Converts to at least the accuracy of two decimal places', () => {
            var length1 = helperFunctions.miToKm(10);
            var length2 = helperFunctions.miToKm(100);
            var length3 = helperFunctions.miToKm(1000);
            var length4 = helperFunctions.miToKm(234);
            var length5 = helperFunctions.miToKm(0.3);

            expect(parseFloat(length1.toFixed(2))).to.equal(16.09);
            expect(parseFloat(length2.toFixed(2))).to.equal(160.93);
            expect(parseFloat(length3.toFixed(2))).to.equal(1609.35);
            expect(parseFloat(length4.toFixed(2))).to.equal(376.59);
            expect(parseFloat(length5.toFixed(2))).to.equal(0.48);
        });
    });
    describe('Kilometers to Miles', () => {
        it('Converts to at least the accuracy of two decimal places', () => {
            var length1 = helperFunctions.kmToMi(10);
            var length2 = helperFunctions.kmToMi(100);
            var length3 = helperFunctions.kmToMi(1000);
            var length4 = helperFunctions.kmToMi(234);
            var length5 = helperFunctions.kmToMi(0.3);

            expect(parseFloat(length1.toFixed(2))).to.equal(6.21);
            expect(parseFloat(length2.toFixed(2))).to.equal(62.14);
            expect(parseFloat(length3.toFixed(2))).to.equal(621.37);
            expect(parseFloat(length4.toFixed(2))).to.equal(145.40);
            expect(parseFloat(length5.toFixed(2))).to.equal(0.19);
        });
    });
});

describe('Latitude and Longitude', () => {
    describe('Distance Calculator', () => {
        it('Calculates distance accurate to two decimal places', () => {
            var dist1 = helperFunctions.distanceLatLng(40.792575, -77.861497, 40.6555849, -73.571787);
            var dist2 = helperFunctions.distanceLatLng(-43.492575, -77.801497, -39.6555849, 73.571787);
            var dist3 = helperFunctions.distanceLatLng(74.492575, 74.801497, 73.6555849, 73.571787);

            expect(parseFloat(dist1.toFixed(2))).to.equal(224.8);
            expect(parseFloat(dist2.toFixed(2))).to.equal(6420.48);
            expect(parseFloat(dist3.toFixed(2))).to.equal(62.35);
        });
    });
});
