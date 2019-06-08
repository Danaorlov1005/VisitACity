
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
        filters: {
            nature: req.body.nature,
            family: req.body.family,
            food: req.body.food,
            nightLife: req.body.nightLife,
            culture: req.body.culture

        }
    }

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
