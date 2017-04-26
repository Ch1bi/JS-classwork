var http = require("http");
var movieList = require("./movies.json")
var server = http.createServer(function(req, res){

    for(var i = 0; i < movieList.movies.length; i++){

        res.writeHead(200);
       
        res.end(JSON.stringify(movieList.movies,null, "\t"));
   
}

 


});


server.listen(3000);
