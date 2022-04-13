const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let bookInfo= await bookModel.find().select({bookName : 1 , authorName : 1 , _id : 0})
    res.send({msg: bookInfo})
}

const getBookInYear = async function (req,res){
    let year = req.query.year
    let bookInYear = await bookModel.find({year: year})
    res.send({msg : bookInYear})

}


const getXINRBooks = async function(req,res){
    let inrBooks = await bookModel.find({"price.indianPrice" : {$in:["100INR", "200INR","500INR"]}} )
        res.send({msg : inrBooks})
}

const getRandomBooks = async function(req,res){
    let randomBook = await bookModel.find({ $or :[ {totalPages:{ $gt: 500   }}]})
    res.send({msg:  randomBook})

}

const getParticularBooks = async function(req, res){
    let name = req.query.authorName
    let year = req.query.year
    let bookData = await bookModel.find({$or : [{authorName : name},{year : year}]})
    res.send({msg : bookData})
}


module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBookInYear = getBookInYear
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks
module.exports.getParticularBooks = getParticularBooks