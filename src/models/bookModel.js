const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "Author",
        required : true
    },
    price: Number,
    rating : Number,
    publisher : {
        type : ObjectId,
        ref : "Publisher",
        required: true
    },
    isHardcover :{
        type : Boolean,
        default : false
    }

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)