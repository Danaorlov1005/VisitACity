const GooglePlaces = require('google-places-web').default
const kmeans = require('node-kmeans');

async function createNewTrip(data) {
    return new Promise(async function(resolve,reject){
        let allPlaces = await getPlacesFromGoogle(data)
        var promise = devidePlacesByDays(allPlaces, data.duration)
        promise.then((res)=>{
            resolve(res)
        })
    })
}

async function getPlacesFromGoogle(data) {
    GooglePlaces.apiKey = 'AIzaSyBts53vgjeOpiVy962cJUvS8D021tTgpdI'
    GooglePlaces.debug = true

    return await GooglePlaces.nearbysearch({
        location: data.location.toString(),
        type: [],
        rankby: "distance" // See google docs for different possible values
    })
        .then(result => {
            return result
        })
        .catch(e => console.log(e));
}

function devidePlacesByDays(places, duration) {

    let vectors = []

    places.forEach(place => {
        vectors.push([place.geometry.location.lat, place.geometry.location.lng])

    });

    const kMeansPromise = new Promise(function(resolve, reject) {
        kmeans.clusterize(vectors, { k: duration }, async (err, res) => {
            const clusters = res
            const placesByDays = []

            for (let index = 0; index < duration; index++) {
                placesByDays[index] = {places:[], center: clusters[index].centroid}
                clusters[index].cluster.map((locInDay) => {
                    placeToAdd = places.find(place => place.geometry.location.lan = locInDay[0] &&
                        place.geometry.location.lng == locInDay[1])
        
                    placesByDays[index]["places"].push(placeToAdd)
                })
            }

            resolve(placesByDays);
        })
    });

    return kMeansPromise

}

module.exports = { createNewTrip }