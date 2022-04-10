const express = require('express');

const router = express.Router();

let players = [
    {
        "name": "Sachin",
        "dob": "1/1/1975",
        "gender": "male",
        "city": "Mumbai",
        "sports": [
            "Cricket"
        ]
    },
    {
        "name": "Rahul",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "punjab",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "Sumit",
        "dob": "23/02/1997",
        "gender": "male",
        "city": "Patna",
        "sports": [
            "VolleyBall"
        ]
    },
    {
        "name": "ronaldo",
        "dob": "1/1/1991",
        "gender": "male",
        "city": "Delhi",
        "sports": [
            "footbal"
        ]
    },
    {
        "name": "Abhishek",
        "dob": "1/1/1980",
        "gender": "male",
        "city": "Kolkata",
        "sports": [
            "Chess"
        ]
    }

];

router.post('/players', function (req, res) {

    // LOGIC 

    for (let i = 0; i < players.length; i++) {
        if (req.body.name === players[i].name) {
            return res.send("Player already rejister try diffrent name")

        }
    }
    let newPlayer = req.body
    players.push(newPlayer)

    res.send({ UpdatedList: players })


    // res.send(  { data: players , status: true }  )
});

module.exports = router;