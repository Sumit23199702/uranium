const express = require('express');
const router = express.Router();
const orderController = require("../controllers/orderController")
const {headerCheck} = require("../middleware/middleware")

//Developer-Batch route handlers
router.post("/users", headerCheck, orderController.createUser)
router.post("/products", orderController.createProduct)
router.post("/orders", headerCheck, orderController.createOrder)

module.exports = router;
