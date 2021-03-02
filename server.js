// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");


const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(logger("dev")); // morgan

app.use(express.urlencoded({extended:true})); //for post requests
app.use(express.json()); // for post requests

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workoutdb", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
    );

const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes")
app.use(htmlRoutes);
app.use(apiRoutes);

// Listener 
app.listen(PORT, () => {
    console.log(`app running on http://localhost:${PORT}`);
})
