var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var hbs = require("hbs");
var app = express();
var User = require("./user.js");

var someUser;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set("view engine", hbs);


app.get("/",function(req, res){
res.render("home");
});



app.get("/login",function(req, res){


res.render("login");

});

app.post("/login", function(req, res){

User.findOne({username:req.body.username}, function(err, user){

    if(err){

        console.log(err);
    }

    else{

        someUser = user;
        res.redirect("/data");
    }
})

});

app.get("/signup",function(req, res){


res.render("signup");

});

app.post("/signup", function(req, res){

    new User({
        
        username: req.body.username,
        password: req.body.password

    }).save(function(err){

        if(err){

            console.log(err);
        }

        else{

            res.redirect("/login");
        }
    });

});

app.get("/data",function(req, res){

res.render("data", {

    user:someUser
});


});


mongoose.connect("mongodb://localhost/user");


app.listen("8080", function(){

    console.log("Server is listening")
})