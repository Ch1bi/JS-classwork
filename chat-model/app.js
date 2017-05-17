var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var Chat = require("./chat");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({

    extended:true
}));

app.get("/", function(req, res){

    res.sendFile(path.join(__dirname, "index.html"));

});

app.post("/chat", function(req, res){



});


