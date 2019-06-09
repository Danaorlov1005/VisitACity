
const express = require('express')
const router = express.Router()
const { getPopularSites } = require('../Repositories/GeneralRepository')
const { addNewTrip } = require('../Repositories/TripRepository')
const { getTripsForUser, addNewUser, getUser } = require('../Repositories/UsersRepository')
const {createNewTrip} = require('../Logics/TripLogic')


router.post('/addNewTrip', function (req, res) {
    addNewTrip().then((result) => {
        res.send(result)
    }, (err => { console.log(err) }));
});

router.post('/createTripByParameters', async function (req,res){
    const dataFromClient = {
        duration     : req.body.duration,
        location: [req.body.location.x, req.body.location.y],
        filters: req.body.preferences        
    }

    console.log([req.body.location.x, req.body.location.y])

    const results = await createNewTrip(dataFromClient)
    res.send(results)
})

router.get('/getPopularSites', function (req, res) {
    getPopularSites().then((result) => {
        res.send(result);
    }, (err => { console.log(err) }));
})

router.get('/getTripsForUser', function (req, res) {
    getTripsForUser(req.params).then((result) => {
        res.send(result);
    }, (err => { console.log(err) }));
})


// http://localhost:3000/getPlaces?lat=32.068679&lng=34.774010&radius=1000
router.get('/getPlaces', function (req, res) {
    GoogleAPI.placeSearch(req.query.lat, req.query.lng, req.query.radius).
        then((result) => {
            res.send(result);
        }, 
        (err => { console.log(err) }));
})

// router.get('/getWantedPartners', function (req, res) {
//     getWantedPartners(req.params.tripId).then((result) => {
//         res.send(result);
//     }, (err => { console.log(err) }));
// })
router.get('/getsPlacesAPI', function (req, res) {

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


module.exports = router
