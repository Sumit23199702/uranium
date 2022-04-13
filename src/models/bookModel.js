const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type : String,
        required : true
    }, 
    authorName: String,
    categories : String, 
    totalPages : Number,
    tags : [ String ], 
    price : {
        indianPrice : String,
        europeanPrice  : String
    }
    ,
    stockAvailable : Boolean ,
    year : {
        type : Number, 
        default : 2021
    }
}
, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books

