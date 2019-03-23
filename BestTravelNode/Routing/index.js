
const express = require('express')
const router = express.Router()

const { getPopularSites} = require('../Repositories/GeneralRepository')
const { addNewTrip } = require('../Repositories/TripRepository')
const { getTripsForUser } = require('../Repositories/UsersRepository')
const  GoogleAPI = require('../GoogleAPI')

// router.get('/getIntrests', function (req, res) {
//     executeQuery('select * from public."INTRESTS"').then((result) => {
//         res.send(result);
//     }, (err => { console.log(err) }))
// });

router.get('/addNewTrip', function (req, res) {
    addNewTrip().then((result) => {
        res.send(result);
    }, (err => { console.log(err) }));
});

// tripId parameter
// router.get('/findPartner', function (req, res) {
//     searchBestMatch(req.params.tripId, res);
// });

router.get('/getPopularSites', function (req, res) {
    getPopularSites().then((result) => {
        res.send(result);
    }, (err => { console.log(err) }));
})

// router.get('/getPartners', function (req, res) {
//     getTripPartners(req.data).then((result) => {
//         res.send(result);
//     }, (err => { console.log(err) }));
// })

router.get('/getTripsForUser', function (req, res) {
    getTripsForUser(req.params).then((result) => {
        res.send(result);
    }, (err => { console.log(err) }));
})


router.get('/getsPlacesAPI', function (req, res) {
    GoogleAPI.placeSearch(32.064617, 34.829663 ,500).then((result) => {
        res.send(result);
    }, (err => { console.log(err) }));
})
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
