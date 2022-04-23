const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const mid1= async function(req, res, next){
try{
let token = req.headers["x-Auth-token"];
let userId= req.params.userId

  if (!token) {
    token = req.headers["x-auth-token"];
  }

  if (!token) {
      //404- not found
    return res.status(404).send({ status: false, msg: "token must be present" });
  }

  let decodedToken = jwt.verify(token, "functionup-uranium");
  
  if (!decodedToken){
      //400- bad request
    return res.status(400).send({ status: false, msg: "token is invalid" });
  }

  if(decodedToken.userId !== userId){
      //401- unauthorized
      return res.status(401).send({status: false, msg: "User is not authorized"})
  }

  let user = await userModel.findOne({_id: userId})
  if(user.isDeleted == true){
      //404- not found
    return res.status(404).send({ status: false, msg: "user account is deleted" });
  }

  next();
}
catch (err) {
    console.log("This is the error :", err.message)
    //500- internal server error
    res.status(500).send({ msg: "Error", error: err.message })
  };
}
module.exports.mid1= mid1