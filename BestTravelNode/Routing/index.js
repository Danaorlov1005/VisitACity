
const express = require('express')
const router = express.Router()

const { getPopularSites } = require('../Repositories/GeneralRepository')
const { saveTrip, markTripAsSaved } = require('../Repositories/TripRepository')
const { getTripsForUser, addNewUser, getUser } = require('../Repositories/UsersRepository')
const { createNewTrip } = require('../Logics/TripLogic')


router.post('/saveTrip',async function (req, res) {
    const a = await markTripAsSaved(req.body.tripId, req.body.user);
});

router.post('/createTripByParameters', async function (req, res) {
    const dataFromClient = {
        duration: req.body.obj.duration,
        location: [req.body.obj.location.x, req.body.obj.location.y],
        filters: req.body.obj.preferences
    }

    console.log([req.body.obj.location.x, req.body.obj.location.y])

    let results = await createNewTrip(dataFromClient)
    const tripId = await saveTrip(results, req.body.user, req.body.imageUrl, req.body.city);
    results.id = tripId[0];
    res.send(results);
})

router.get('/getPopularSites', async function (req, res) {
    let counter = 0;
    getPopularSites().then(async function (result) {
        for (let index = 0; index < result.length; index++) {
            let params = {
                duration: 4,
                location: [result[index].Location.x, result[index].Location.y],
                filters: {
                    nature: 2,
                    family: 2,
                    food: 2,
                    nightLife: 2,
                    culture: 2,
                    shopping: 2
                }
            }

            createNewTrip(params).then((tripForSite) => {
                console.log(result[index].Name + " - " + tripForSite.places.length);
                counter++;
                result[index].trip = tripForSite

                if (counter == result.length) {
                    res.send(result);
                }
            })
        }
    }, (err => { console.log(err) }));
})

router.get('/getTripsForUser', function (req, res) {
    getTripsForUser(req.query).then((result) => {
        res.send(result);
    }, (err => { console.log(err) }));
})

router.post('/addNewUser', function (req, res) {
    addNewUser(req.body).then((result) => {
        res.send(result);
    }, (err => { console.log(err) }));
})

router.get('/getUser', function (req, res) {
    getUser(req.query).then((result) => {
        res.send(result);
    }, (err => { console.log(err) }));
})

router.post('/addNewUser/:UserName/:Password', function (req, res) {
    addNewUser(req.params).then((result) => {
        res.send(result);
    }, (err => { console.log(err) }));
});


router.get('/getUser/:UserName/:Password', function (req, res) {
    getUser(req.params).then((result) => {
        res.send(result);
    }, (err => { console.log(err) }));
});

// router.get('/getWantedPartners', function (req, res) {
//     getWantedPartners(req.params.tripId).then((result) => {
//         res.send(result);
//     }, (err => { console.log(err) }));
// })

// router.get('/addNewSwipe', function (req, res) {
//     addNewSwipe(req.params).then((result) => {
//         res.send(result);
//     }, (err => { console.log(err) }));
// })


module.exports = router
