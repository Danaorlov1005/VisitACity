const GooglePlaces = require('google-places-web').default
const kmeans = require('node-kmeans');
const geolib = require('geolib')
var Kruskal = require("kruskal");
var Categories = require('./Categories')
var PlaceSearch = require('googleplaces/lib/PlaceSearch')
var uniqBy = require('lodash.uniqby');

async function createNewTrip(data) {
    return new Promise(async function (resolve, reject) {
        getPlacesFromGoogle(data).then((result) => {
            allPlaces = result
            var promise = devidePlacesByDays(allPlaces, data.duration)
            promise.then((res) => {
                for (let index = 0; index < data.duration; index++) {
                    const prioritizedPlaces = prioritizeResults(res[index].places, data.filters);
                    const minimumTreeForDay = planTripForDay(prioritizedPlaces, 'Day')
                    res[index].places = buildAttractionsOrder(minimumTreeForDay, res[index].places)
                }

                const dataForOrder = res.map(day => day.center)

                minimumTreeForTrip = planTripForDay(dataForOrder, 'DaysOrder')
                var finalTrip = {
                    'places': buildAttractionsOrder(minimumTreeForTrip, res),
                    'duration': data.duration, 'area': data.location
                }
                resolve(finalTrip)
            })
        })

    })
}

async function getPlacesFromGoogle(data) {
    var placeSearch = new PlaceSearch('AIzaSyBORN9IeVSsOjcMDnzY43FHGrIa6mNJnYc', 'json');

    let finalResult = []

    return new Promise(function (resolve, reject) {
        let counter = 0;
        let parameters = {
            location: data.location,
            rankby: "distance",
            types: [Categories.Google[0]]
        };

        for (let index = 0; index < Categories.Google.length; index++) {

            placeSearch(parameters, function (error, response) {
                counter++;
                let forSlice = 5

                if (response) {

                    if (response.results.length < forSlice) {
                        forSlice = response.results.length
                    }
                    finalResult = finalResult.concat(response.results.slice(0, forSlice))

                    if (counter == Categories.Google.length) {
                        const final = uniqBy(finalResult, 'name');
                        resolve(final)
                    }
                }
            })

            parameters.types = Categories.Google[index]
        }
    })
}

// places - search result
// preferences - scale of eace category
function prioritizeResults(places, preferences) {
    places.forEach(place => {
        place.priority = 0;
        place.categories = [];
        // each preference of the client
        Categories.Local.forEach(type => {
            let isInTheCategory = false;
            // go over all matching google categories
            Categories.Pairings[type].forEach(matchingType => {
                if (place.types.includes(Categories.Google[matchingType])) {
                    //increase the priority accorting to preferene
                    place.priority += preferences[type];
                    isInTheCategory = true;
                }
            });

            if (isInTheCategory)
                place.categories.push(type);
        });
    });

    const prioritizedPlaces = places.sort((a, b) =>
        a.priority * a.priority * a.rating > b.priority * b.priority * b.rating ? -1 : 1).slice(0, 4);

    return prioritizedPlaces;
}


function devidePlacesByDays(places, duration) {
    let vectors = []

    places.forEach(place => {
        vectors.push([place.geometry.location.lat, place.geometry.location.lng])

    });

    const kMeansPromise = new Promise(function (resolve, reject) {
        kmeans.clusterize(vectors, { k: duration }, async (err, res) => {
            const clusters = res
            const placesByDays = []
            let counter = 0;
            for (let index = 0; index < duration; index++) {
                counter++;
                placesByDays[index] = { places: [], center: clusters[index].centroid }
                clusters[index].cluster.map((locInDay) => {
                    placeToAdd = places.find(place => place.geometry.location.lat == locInDay[0] &&
                        place.geometry.location.lng == locInDay[1])

                    placesByDays[index]["places"].push(placeToAdd)
                })
            }
            if (counter == duration) {
                resolve(placesByDays);
            }
        });

    });
    return kMeansPromise
}

function planTripForDay(places, planningType) {
    const verts = planningType === 'Day' ? generateVertsPerDay(places) : places
    const edges = generateEdges(verts)

    var edgeMST = Kruskal.kruskal(verts, edges, metric_dist);
    path = CreateAPath(edgeMST, verts.length)
    return path
}

function generateVertsPerDay(places) {
    return places.map((place) => { return [place.geometry.location.lat, place.geometry.location.lng] })
}

function CreateAPath(minTree, verts) {
    var path = {}
    var vertsDictCount = []

    minTree.forEach(function (edge) {
        if (path[edge[0]] == undefined) {
            path[edge[0]] = edge[1]
        }
    });

    for (var i = 0; i <= verts; i++) {
        vertsDictCount[i] = 0
    }

    for (var i = 0; i <= minTree.length; i++) {
        if (vertsDictCount[path[i]] > 2 || vertsDictCount[i] > 2) {
            delete path[i]
        }
        else if (path[i] != undefined) {
            vertsDictCount[i]++
            vertsDictCount[path[i]]++
        }
    }

    // maybe remove later
    for (var i = 0; i < vertsDictCount.length; i++) {
        if (vertsDictCount[i] >= 2) {
            delete vertsDictCount[i]
        }
    }

    createMissingEdges(verts, vertsDictCount, path)
    createMissingEdges(verts, vertsDictCount, path)

    return path
}

function createMissingEdges(verts, vertsDictCount, path) {
    for (var i = 0; i < verts - 1; i++) {
        if (vertsDictCount[i] >= 2) {
            delete vertsDictCount[i]
        }
        if (path[i] == undefined && vertsDictCount[i] < 2) {
            var j = i
            while (j + 1 < vertsDictCount.length) {
                if (vertsDictCount[j + 1] < 2) {
                    path[j] = j + 1
                    vertsDictCount[j]++
                    vertsDictCount[j + 1]++
                    break;
                }
                else {
                    j++
                }
            }
        }
    }
}


function generateVertsPerDay(places) {
    return places.map((place) => { return [place.geometry.location.lat, place.geometry.location.lng] })
}


function generateEdges(verts) {
    var edges = []
    for (let index1 = 0; index1 < verts.length; index1++) {
        for (let index2 = 0; index2 < verts.length; index2++) {
            edges.push([index1, index2])
        }
    }

    return edges
}

function metric_dist(a, b) {
    return geolib.getDistance(
        { latitude: a[0], longitude: a[1] },
        { latitude: b[0], longitude: b[1] }
    );
}

function buildAttractionsOrder(minimumTree, places) {

    var indexArray = []

    Object.entries(minimumTree).forEach(edge => {
        const firstEdge = parseInt(edge[0], 10);
        const secondEdge = parseInt(edge[1], 10);

        !indexArray.includes(firstEdge) ? indexArray.push(firstEdge) : null
        !indexArray.includes(secondEdge) ? indexArray.push(secondEdge) : null

    });

    finalTrip = indexArray.map(index => places[index])

    return finalTrip

}

module.exports = { createNewTrip }