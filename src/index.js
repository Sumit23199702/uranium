const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionUpUranium-2:JECVxS0v96bKoG0a@cluster0.j1yrl.mongodb.net/Sumit-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use(
    function (req,res,next){
        let currentDate = new Date().toLocaleString()
        console.log("Inside The Globle Middleware ")
        console.log(currentDate,req.ip,req.originalUrl)
        
        next();
}
)
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});