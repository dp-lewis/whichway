Whichway
========

Whichway is a small JavaScript library for working out the bearing between 2 locations.

```javascript
var location1 = {
    lng: 151.187142,
    lat: -33.907319
};
var location2 = {
    lng: 151.196117,
    lat: -33.907319
};

var myBearing = new Whichway(location1, location2).getBearing();
```

You can also get the distance between 2 locations in kilometres

```javascript
var myDistance = new Whichway(location1, location2).getDistance();
```