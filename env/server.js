require("dotenv").config();

var express = require("express");
var app = express();

app.get("/", function(req, res){

res.json({

    "user": process.env.DB_USER,
    "pass": process.env.DB_PASS

});

});

app.listen(8080, function(){

 console.log("listening on port 8080");   
});