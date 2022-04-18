const express = require('express');
const router = express.Router();

const allController = require("../controllers/allController.js")



router.post('/createBatch', allController.createBatches)

router.post('/createDeveloper', allController.createDevelopers)

router.get('/scholarshipdevelopers', allController.scholarshipdevelopers)

router.get('/developers', allController.developers)

module.exports = router ;