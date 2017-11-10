const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const configRoutes = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});

/*var express = require("express")
var mongoose = require("mongoose")
var bodyParser = require("body-parser")
const configRoutes = require("./routes");



// initialize app
var app= express()
// connect to data base
//mongoose.connect("mongodb://localhost/lab7-recipes")
//var db = mongoose.connection


// to configure routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
configRoutes(app);

app.listen(3000,()=>{

    console.log("Server started, Running at localhost 3000");


})*/