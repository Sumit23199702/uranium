const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const authorModel = require("../models/authorModel")

const createBook= async function (req, res) {
    let data=req.body

    if (data.author && data.publisher) {
        let authIdCheck = await authorModel.exists({ _id: data.author })
        let publIdCheck = await publisherModel.exists({ _id: data.publisher })
        if (authIdCheck && publIdCheck) {
            if (!await bookModel.exists(data)) {
                let bookCreated = await bookModel.create(data)
                res.send({ msg: bookCreated })
            } else res.send({ msg: "Book already exists" })
        }
        else res.send("AuthorId or publisherId both or any one of these are Invalid")
    }
    else res.send ({msg: "Author or publisher Must be present"})
}


const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})
}


const updateBookData = async function(req,res){
    let check = await publisherModel.find({$nd : [{name : {$eq : "HarperCollin"}},{name : {$eq : "Penguin"}}]}).select({_id:1})
    let check1 = null
    for ( let i = 0; i<check.length; i++){
        check1 = check[i]._id
        let specificBook  = await bookModel.updateMany({publisher : check1}, {$set: {isHardcover: true}})
        res.send({msg : specificBook})
    }
}

const updateBookPrice = async function(req,res){
    let check = await authorModel.find({rating : {$gte : 3.5}}).select('_id')
    let updatePrice = await bookModel.updateMany({author : check}, {$inc: {price : 10}}, {new : true , upsert : true})
    res.send({msg : updatePrice})

}

module.exports.createBook = createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateBookData = updateBookData
module.exports.updateBookPrice = updateBookPrice