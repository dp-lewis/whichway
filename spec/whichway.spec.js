/*global describe, it, expect, Whichway */
describe("Whichway", function () {
    'use strict';
    var loc1 = {
        lng: 151.187142,
        lat: -33.907319
    }, // Sydney Park Village
        loc2 = {
            lng: 151.196117,
            lat: -33.907319
        }, // Perry Park (east of SPV)
        loc3 = {
            lng: 151.187142,
            lat: -33.908761
        }; // Alan Davidson oval (south of SPV)

    it("Should return the bearing as a number between 2 locations", function () {
        var bearing = new Whichway(loc1, loc2).getBearing();
        expect(typeof bearing).toBe('number');
    });

    it("Should return location 2 being 90.00250335695466 degrees from location 1", function () {
        var bearing = new Whichway(loc1, loc2).getBearing();
        expect(bearing).toBe(90.00250335695466);
    });

    it("Should return with location 3 being 180 degress from location 1", function () {
        var bearing = new Whichway(loc1, loc3).getBearing();
        expect(bearing).toBe(180);
    });

    it("Should return the distance as a number between 2 locations", function () {
        var distance = new Whichway(loc1, loc2).getDistance();
        expect(typeof distance).toBe('number');
    });

    it("Should return the distance between location 1 and location 2 as 0.8282599580872274", function () {
        var distance = new Whichway(loc1, loc2).getDistance();
        expect(distance).toBe(0.8282599580872274);
    });

});