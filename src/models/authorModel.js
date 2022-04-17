const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    authorName: String,
    age:Number,
    address:String,
    rating : Number

});

module.exports = mongoose.model('Author', authorSchema)