
   
const express = require('express');
const logger = require('./logger')

const router = express.Router();

// problem 1
router.get('/movies', function (req, res) {
    let arr = ["Rang De Basanti", "The Shining", "Lord Of The Rings", "Batman Begins"]
    res.send(arr)
});

// Problem 2 & 3 

router.get('/movies/:indexNumber', function (req, res) {
    let arr1 = ["Rang De Basanti", "The Shining", "Lord Of The Rings", "Batman Begins"]
    let indexNumber = req.params.indexNumber
    if (indexNumber > arr1.length - 1) {
        res.send("Value is above than index number")
    }
    else {
        res.send(arr1[indexNumber])
    }
});

// Problem 4

router.get('/films', function (req, res) {
    let pqrs = [{ id: 1, name: "The Shining" }, { id: 2, name: "Incendies" }, { id: 3, name: "Rang de Basanti" }, { id: 4, name: "Finding Nemo" }]

    res.send(pqrs)
});

// Problem 5

router.get('/film/:filmid', function (req, res) {
    const Fnames = [{
        'id': 1,
        'name': 'The Shining'
    }, {
        'id': 2,
        'name': 'Incendies'
    }, {
        'id': 3,
        'name': 'Rang de Basanti'
    }, {
        'id': 4,
        'name': 'Finding Nemo'
    }]
    let a;
    let n = req.params.filmid
    for (let i = 0; i < Fnames.length; i++) {
        if(n>Fnames[i].id){
            a="No movie exists with this id"
        }
        if(n== Fnames[i].id){
            a= Fnames[i]
        }
    }
    res.send(a)
});

module.exports = router;
// adding this comment for no reason