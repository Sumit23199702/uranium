const mongoose = require("mongoose");

const newDeveloperSchema = new mongoose.Schema({
    name: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"]
    },
    percentage: Number,
    batch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Batch"
    }
},
    { timestamps: true })

module.exports = mongoose.model("Developers", newDeveloperSchema);