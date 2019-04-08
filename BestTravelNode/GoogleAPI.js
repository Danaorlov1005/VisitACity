
var https = require('follow-redirects').https;

var placeDetails = function () {
    this.places = [];
}

// //Step 1: Get coordinates based on the entered zipcode.

// async function getCoordinates(zipcode) {
//     https.request({
//         host: 'maps.googleapis.com',
//         path: '/maps/api/geocode/json?address=' + zipcode + '&key=AIzaSyBts53vgjeOpiVy962cJUvS8D021tTgpdI',
//         method: 'GET'
//     },
//         CoordinateResponse).end();
// }

// //Step 2: Find places within the specified radius, based on the coordinates provided by the getCoordinates function.
// const Places = [];

function placeSearch(latitude, longitude, radius) {
    const url = '/maps/api/place/nearbysearch/json?location=' + latitude + ',' + longitude + '&radius=' + radius +
    '&type=restaurant&key=AIzaSyBts53vgjeOpiVy962cJUvS8D021tTgpdI';
    // require('https').get('https://maps.googleapis.com'+url, function(response) {
    //     var body ='';
    //     response.on('data', function(chunk) {
    //       body += chunk;
    //     });
    //     response.on('end', function() {
    //         var places = JSON.parse(body);
    //         res.json(places);
    //         var locations = places.results;
    //         var randLoc = locations[Math.floor(Math.random() * locations.length)];
      
    //         res.json(randLoc);
    //       });
    //     }).on('error', function(e) {
    //       console.log("Got error: " + e.message);
    //     });

    https.request({
        host: 'maps.googleapis.com',
        path: url,
        method: 'GET'
    },
        PlaceResponse).end();
}

// function CoordinateResponse(response) {
//     var data = "";
//     var sdata = "";
//     var latitude = "";
//     var longitude = "";

//     response.on('data', function (chunk) {
//         data += chunk;
//     });
//     response.on('end', function () {
//         sdata = JSON.parse(data);
//         latitude = sdata.results[0].geometry.viewport.northeast.lat;
//         longitude = sdata.results[0].geometry.viewport.northeast.lng;
//         placeSearch(latitude, longitude, 50000);
//     });
// }

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

            // return sdata;
        } else {
            console.log(sdata.status);
        }
    });
}

module.exports = { placeSearch };

