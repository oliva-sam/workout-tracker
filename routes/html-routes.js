var app = require("express").Router();

var path = require("path");



app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


module.exports = app



