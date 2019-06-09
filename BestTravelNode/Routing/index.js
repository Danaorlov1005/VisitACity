
const express = require('express')
const router = express.Router()

const { getPopularSites } = require('../Repositories/GeneralRepository')
const { addNewTrip } = require('../Repositories/TripRepository')
const { getTripsForUser, addNewUser, getUser } = require('../Repositories/UsersRepository')
const {createNewTrip} = require('../Logics/TripLogic')


router.post('/addNewTrip', function (req, res) {
    addNewTrip(req.data)
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
    addNewTrip(results)
})

router.get('/createTripByParameters1', async function (req,res){
    const mockData = {
        duration     : 4,
        location: [41.8977047, 12.4760446],
        filters: {
            nature: 1,
            family: 4,
            food: 5,
            nightLife: 3,
            culture: 2

        }
    }

    const results = await createNewTrip(mockData)
    res.send(results)

    // remove after add new trip button
    addNewTrip(results)
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

router.get('/addNewUser', function (req, res) {
    addNewUser(req.params).then((result) => {
        res.send(result);
    }, (err => { console.log(err) }));
})


router.get('/getUser', function (req, res) {
    getUser(req.params).then((result) => {
        res.send(result);
    }, (err => { console.log(err) }));
})



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
