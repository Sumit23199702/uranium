const express = require('express');
const router = express.Router();

const publisherController = require("../controllers/publisherController")
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createBook", bookController.createBook  )

router.post("/createPublisher", publisherController.createPublisher)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.put("/updateBookData", bookController.updateBookData)

router.put("/updateBookPrice", bookController.updateBookPrice)

module.exports = router; 