require("dotenv").config();
var express = require("express");
var app = express();

app.get("/", function(req, res){

    if(process.env.NODE_ENV == 'dev'){


            res.json({

        "user": process.env.DB_USER,
        "pass": process.env.DB_PASS

    });

}

else{

     res.json({

        "user": "Does not exist",
        "pass": "User does not exist"

    });

}



});

app.listen(process.env.PORT || 8080);

 console.log("listening on port 8080");