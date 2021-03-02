// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const db = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(logger("dev")); // morgan

app.use(express.urlencoded({extended:true})); //for post requests
app.use(express.json()); // for post requests

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {useNewUrlParser:true});

// Listener 
app.listen(PORT, () => {
    console.log(`app running on http://localhost:${PORT}`);
})
