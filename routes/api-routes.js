const { model } = require("mongoose");
var db = require("../models/excercise-model");

var app = require("express").Router();

app.get("/api/workouts", (req, res) => {
    db.find({}, (error, found) => {
        if (error) {
            console.log(error);
        } else {
            console.log("get route", found);
            res.json(found);
        }
    });
});

app.put("/api/workouts/:id", (req, res) => {
    db.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } },
        { new: true },
        (error, found) => {
            if (error) {
                console.log(error);
            } else {
                console.log("put route", found);
                res.json(found);
            }
        })
});

app.post("/api/workouts", (req, res) => {
    db.create(req.body, (error, found) => {
        if (error) {
            console.log(error);
        } else {
            console.log("post route", found);
            res.json(found);
        }
    });
});

app.get("/api/workouts/range", (req, res) => {
    db.find({}).limit(7)
    .then(found => {
   
            console.log("get route", found);
            res.json(found);
        }
    ).catch(error =>{

        console.log(error);
    })

});

module.exports = app;

