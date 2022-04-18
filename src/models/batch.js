const mongoose = require("mongoose")

const newBatchSchema = new mongoose.Schema({
    name: String,
    size: Number,
    program: {
        type: String,
        enum: ["backend", "frontend"]
    }
}
    ,
    { timestamps: true });

module.exports = mongoose.model("Batch", newBatchSchema)