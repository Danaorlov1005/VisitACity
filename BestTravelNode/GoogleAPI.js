var https = require('follow-redirects').https;

var placeDetails = function () {
    this.places = [];
}

//Step 1: Get coordinates based on the entered zipcode.

function getCoordinates(zipcode) {
    https.request({
        host: 'maps.googleapis.com',
        path: '/maps/api/geocode/json?address=' + zipcode + '&key=[YOUR API KEY]',
        method: 'GET'
    },
        CoordinateResponse).end();
}

//Step 2: Find places within the specified radius, based on the coordinates provided by the getCoordinates function.


function placeSearch(latitude = '500', longitude = '500', radius = '500', type = 'restaurant') {
    https.request({
        host: 'maps.googleapis.com',
        path: '/maps/api/place/nearbysearch/json?location=' + latitude + ',' + longitude + '&radius=' + radius +
            '&type=' + type + '&key=AIzaSyBts53vgjeOpiVy962cJUvS8D021tTgpdI',
        method: 'GET'
    },
        PlaceResponse).end();
}

function CoordinateResponse(response) {
    var data = "";
    var sdata = "";
    var latitude = "";
    var longitude = "";

    response.on('data', function (chunk) {
        data += chunk;
    });
    response.on('end', function () {
        sdata = JSON.parse(data);
        latitude = sdata.results[0].geometry.viewport.northeast.lat;
        longitude = sdata.results[0].geometry.viewport.northeast.lng;
        placeSearch(latitude, longitude, 50000);
    });
}

function PlaceResponse(response) {
    var p;
    var data = "";
    var sdata = "";
    var PD = new placeDetails();

    response.on('data', function (chunk) {
        data += chunk;
    });
    response.on('end', function () {
        sdata = JSON.parse(data);
        if (sdata.status === 'OK') {
            console.log('Status: ' + sdata.status);
            console.log('Results: ' + sdata.results.length);
            for (p = 0; p < sdata.results.length; p++) {
                PD.places.push(sdata.results[p]);
            }
            for (r = 0; r < sdata.results.length; r++) {
                console.log('----------------------------------------------');
                console.log(PD.places[r].name);
                console.log('Place ID (for Place Detail search on Google):' + PD.places[r].place_id);
                console.log('Rating: ' + PD.places[r].rating);
                console.log('Vicinity: ' + PD.places[r].vicinity);
            }
        } else {
            console.log(sdata.status);
        }
    });
}

getCoordinates(37202); //Enter a zip code here to try it out (Nashville in this case)







// exports.randeats = function (req, res) {
//     var key = req.query.key;
//     var location = encodeURIComponent(req.query.location);
//     var radius = 16000;
//     var sensor = false;
//     var types = "restaurant";
//     var keyword = "fast";

//     const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + 41.9038463 + "," + 12.4904047 + "&radius=500&type=bar&key=AIzaSyBts53vgjeOpiVy962cJUvS8D021tTgpdI";

//     // var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" + "key=" + key + "&location=" + location + "&radius=" + radius + "&sensor=" + sensor + "&types=" + types + "&keyword=" + keyword;

//     console.log(url);
//     https.get(url, function(response) {
//       var body ='';
//       response.on('data', function(chunk) {
//         body += chunk;
//     });

//     response.on('end', function() {
//         var places = JSON.parse(body);
//         var locations = places.results;
//         var randLoc = locations[Math.floor(Math.random() * locations.length)];

//         res.json(randLoc);
//     });


// }).on('error', function(e) {
//     console.log("Got error: " + e.message);
// });
// };

// import Places from "google-places-web";


// // Setup
// Places.apiKey = googlePlacesAPIUrl;
// Places.debug = __DEV__; // boolean;