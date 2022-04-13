const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", bookController.createBook  )

router.get("/bookList", bookController.bookList)

router.post("/getBookInYear", bookController.getBookInYear)



router.get("/getXINRBooks", bookController.getXINRBooks)

router.get("/getRandomBooks", bookController.getRandomBooks)
router.get("/getParticularBooks", bookController.getParticularBooks)


module.exports = router;