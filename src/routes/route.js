const express = require('express');
const router = express.Router()

const { createUser, loginUser } = require("../controllers/userController");

const { createBook, getBooks, getBooksById, updateBooks, deleteBooks } = require("../controllers/bookController");

const { bookReview } = require("../controllers/reviewController")

const { authentication } = require("../middlewares/mid");






router.post("/register", createUser);

router.post("/login", loginUser);

router.post("/books", authentication, createBook);

router.get("/books", getBooks);

router.get("/books/:bookId", getBooksById);

router.put("/books/:bookId", updateBooks);

router.delete("/books/:bookId", deleteBooks);

router.post("/books/:bookId/review", bookReview)

module.exports = router;