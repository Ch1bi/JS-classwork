var User = require("/user");
var bcrypt = require("bcrypt-nodejs");
var localStrategy = require("passport-local").Strategy;

module.exports = function(passport){

    passport.serializeUser(function(user, done){

        done(null, user);
    });

     passport.deserializeUser(function(id, done){

        done(null, user);
    });

    passport.use("local-login", new localStrategy({

        usernameField: "username",
        passwordField: "password",
        passReqToCallback:true
    },
    function(req, username, password, done){

        User.findOne({"username": username}, function(err, user){

            if(err){

                return done(err);
            }

            if(!user){

                return done(null, false);
            }

            if(!bcrypt.compareSync(password, user.password)){

                return done(null, false);
            }

            if(user && bcrypt.compareSync(password, user.password)){

                return done(null, user);
            }
        });
    }));


}