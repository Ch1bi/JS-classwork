var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var bcrypt= require("bcrypt-nodejs");
var passport = require("passport");
var expressSession = require("express-session");
var hbs = require("hbs");

var User = require("./user");
var localAuth = require("./auth");

var app = express();
app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({

    extended:true

}));

app.use(session({

    secret:"itsASecret",
    resave: true,
    saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session());

localAuth(passport);

app.get("/", function(req, res){

res.render("index.hbs");

});

app.get("/login", function(req, res){

res.render("login.hbs");

});


app.get("/signup", function(req, res){

res.render("signup.hbs");

});

app.post("/login", passport.authenticate("local-login", {

    sucessRedirect:"/user",
    failureRedirect: "/login"
}));


app.post("/signup", function(req, res){

    new User({

        username: req.body.username,
        password: bcrypt.hashSync(req.body.password)
    }).save(function(err){

        if(err){

            console.log(err);
        }

        else{

            res.redirect("/login");
        }
    });
});

app.get("/user", function(req, res){

    res.render("user.hbs", {

        user:res.user
    });
});

mongoose.connect("mongodb://localhost/user");

app.listen(8080);
console.log("Server is running");

