
const batch = require("../models/batch.js");
const batchModel = require("../models/batch.js")
const developerModel = require("../models/developers.js")




module.exports.createBatches = async function (req, res) {
    const Data = req.body;
    const batch = await batchModel.create(Data);
    res.send({ data: batch })

}


module.exports.createDevelopers = async function (req, res) {
    const Data = req.body;
    const developers = await developerModel.create(Data);
    res.send({ data: developers })
}



module.exports.scholarshipdevelopers = async function (req, res) {
    //female candidate
    // percentage greater than or equal to 70
    const candidates = await developerModel.find({ percentage : { $gte:  70 }  ,gender: "female"})
    res.send({ data : candidates})
}

module.exports.developers = async function (req, res) {
    const percentage = req.query.percentage;
    const programm = req.query.program;
    // const devpercentage = await developerModel.find({ percentage: { $gte: percentage } })
    //program find then 
    const devBatch = await batchModel.find({ name: programm }).select({ _id: 1 });
    // console.log(devBatch);
    let arrayOfId = [];
    for (let i = 0; i < devBatch.length; i++) {
        let a = devBatch[i]._id
        arrayOfId.push(a)
    }
    const conditionmatch = await developerModel.find({ batch: { $in: [arrayOfId] }, percentage: { $gte: percentage } }).populate("batch")
    // console.log(idmatch);
    res.send({ data: conditionmatch })
}