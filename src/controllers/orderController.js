const {user,product,order} = require("../models/schemas")

const createUser = async (req, res) => {
    let data = req.body
    let savedData = await user.create(data)
    res.send({msg: savedData})
}

const createProduct = async (req, res) => {
    let data = req.body
    let savedData = await product.create(data)
    res.send({msg: savedData})
}

const createOrder = async (req, res) => {
    let freeUser = req.isFreeAppUser
    if(!req.body.userId && !req.body.productId) return res.send({msg: "userId and productId is required"})
    let userbalance = await user.findOne({_id: req.body.userId}).select('balance')
    let productPrice = await product.findOne({_id: req.body.productId}).select('price')
    if(!freeUser && userbalance.balance >= productPrice.price){
        let newBalance = userbalance.balance - productPrice.price
        let orderData = await order.create({
            userId: req.body.userId,
            productId: req.body.productId,
            amount: productPrince.price,
            isFreeAppUser: false
        })
        await user.findOneAndUpdate({_id: req.body.userId}, {balance: newBalance})
        res.send({msg: orderData})
    }
    if(!freeUser && userbalance.balance < productPrice.price) return res.send({msg: "insufficient balance"})
    if(freeUser){
        let orderData = await order.create({
            userId: req.body.userId,
            productId: req.body.productId,
            amount: 0,
            isFreeAppUser: true
        })
        res.send({msg: orderData})
    }
}

module.exports = {createUser, createProduct, createOrder}