/*jslint browser: true*/
/*global console*/
// http://www.movable-type.co.uk/scripts/latlong.html
// http://www.yourhomenow.com/house/haversine.html
(function () {
    'use strict';

    function toRad(number) { // convert degrees to radians
        return number * Math.PI / 180;
    }

    function toDeg(number) { // convert radians to degrees (signed)
        return number * 180 / Math.PI;
    }

    function toBrng(number) { // convert radians to degrees (as bearing: 0...360)
        return (toDeg(number) + 360) % 360;
    }

    var locations = [];

    function Whichway(loc1, loc2) {
        this.setLocation(loc1, 1);
        this.setLocation(loc2, 2);
        return this;
    }

    Whichway.prototype.setLocation = function (loc, i) {
        if (!arguments && console) {
            console.log("setLocation requires loc as object { lng: NUMBER, lat: NUMBER }");
            return;
        }

        i = i || 1;
        locations[i - 1] = [loc.lng, loc.lat];
        return locations;
    };

    Whichway.prototype.getLocation = function (i) {
        if (!arguments && console) {
            console.log("getLocation requires an index for which location to return");
            return;
        }

        if (!locations[i - 1]) {
            throw ("Locations didn't have anything at index " + i);
        }

        return locations[i - 1];
    };

    Whichway.prototype.getBearing = function () {
        var bearing,
            loc1 = this.getLocation(1),
            loc2 = this.getLocation(2),
            lon1 = loc1[0],
            lat1 = loc1[1],
            lon2 = loc2[0],
            lat2 = loc2[1],
            dLon,
            y,
            x;

        lat1 = toRad(lat1);
        lat2 = toRad(lat2);
        dLon = toRad(lon2 - lon1);

        y = Math.sin(dLon) * Math.cos(lat2);
        x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

        bearing = toBrng(Math.atan2(y, x));

        return bearing;
    };

    Whichway.prototype.getDistance = function () {
        var loc1 = this.getLocation(1),
            loc2 = this.getLocation(2),
            lon1 = loc1[0],
            lon2 = loc2[0],
            lat1 = loc1[1],
            lat2 = loc2[1],
            R = 6371, // earth's mean radius in km
            dLat = toRad(lat2 - lat1),
            dLon = toRad(lon2 - lon1),
            a,
            c,
            d;

        lat1 = toRad(lat1);
        lat2 = toRad(lat2);

        a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        d = R * c;

        return d;
    };


    window.Whichway = Whichway;

}());