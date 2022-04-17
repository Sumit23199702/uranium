const authorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let data = req.body
    let authorCreated = await authorModel.create(data)
    res.send({data: authorCreated})
}


module.exports.createAuthor= createAuthor