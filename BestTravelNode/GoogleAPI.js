const https = require('https');

const placeTypes = {
    amusement_park: "amusement_park",
    aquarium: "aquarium",
    art_gallery: "art_gallery",
    bakery: "bakery",
    bar: "bar",
    cafe: "cafe",
    casino: "casino",
    church: "church",
    clothing_store: "clothing_store",
    museum: "museum",
    night_club: "night_club",
    park: "park",
    restaurant: "restaurant",
    shopping_mall: "shopping_mall",
    stadium: "stadium",
    store: "store",
    zoo: "zoo"
};

const googleDomain = 'https://maps.googleapis.com';

// Find places within the specified radius, based on the coordinates 
function placeSearch(latitude, longitude, radius) {

    return new Promise(function (resolve, reject) {
        const url = '/maps/api/place/nearbysearch/json?location=' +
            latitude + ',' + longitude + '&radius=' + radius +
            '&type=restaurant&key=AIzaSyBts53vgjeOpiVy962cJUvS8D021tTgpdI';
        https.get(googleDomain + url, function (response) {
            var body = '';
            response.on('data', function (chunk) {
                body += chunk;
            });

            response.on('end', function () {
                var places = JSON.parse(body);
                console.log(places.results.length);
                for (r = 0; r < places.results.length; r++) {
                    console.log('----------------------------------------------');
                    console.log(places.results[r].name);
                    console.log('Place ID (for Place Detail search on Google):' + places.results[r].place_id);
                    console.log('Rating: ' + places.results[r].rating);
                    console.log('Vicinity: ' + places.results[r].vicinity);
                }
                resolve(places.results);
            });
        }).on('error', function (e) {
            console.log("Got error: " + e.message);
            reject(err);
        });
    });
}

module.exports = { placeSearch };
