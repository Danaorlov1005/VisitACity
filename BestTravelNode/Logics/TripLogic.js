const GooglePlaces = require('google-places-web').default
const kmeans = require('node-kmeans');
const geolib = require('geolib')
var Kruskal = require("kruskal");

async function createNewTrip(data) {
    return new Promise(async function(resolve,reject){
        let allPlaces = await getPlacesFromGoogle(data)
        var promise = devidePlacesByDays(allPlaces, data.duration)
        promise.then((res)=>{
            for (let index = 0; index < data.duration; index++) {
                    planTripForDay(res[index].places, 'Day')            
            }

            const dataForOrder = []

            for (let index = 0; index < data.duration; index++) {
                dataForOrder.push(res[index].center)                
            }

            planTripForDay(dataForOrder, 'DaysOrder')
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

function planTripForDay(places, planningType){
    const verts = planningType === 'Day' ? generateVertsPerDay(places) : places
    const edges = generateEdges(verts)

    var edgeMST = Kruskal.kruskal( verts, edges, metric_dist );

    console.log(edgeMST)

}

function generateVertsPerDay (places){
    return places.map((place) => {return [place.geometry.location.lat, place.geometry.location.lng]})
}


function generateEdges (verts){
    var edges = []
    for (let index1 = 0; index1 < verts.length; index1++) {
        for (let index2 = 0; index2< verts.length; index2++) {
                    edges.push([index1, index2])            
        }       
    }

    return edges
}

function metric_dist( a, b ){
    return geolib.getDistance(
        { latitude: a[0], longitude: a[1] },
        { latitude: b[0], longitude: b[1] }
    );
  }

module.exports = { createNewTrip }