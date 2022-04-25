const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController=require("../controllers/weatherController")
const memesController=require("../controllers/memesController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// Cowin API
router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getSessionsByDistrict",CowinController.getSessionsByDistrict);


// Weather API
router.get("/getWeather",weatherController.getWeather);
router.get("/tempOfLondon",weatherController.tempOfLondon);
router.get("/tempOfCities",weatherController.tempOfCities);

// Memes API
router.get("/getMemes",memesController.getMemes)
router.post("/createMemes",memesController.createMemes)


module.exports = router;