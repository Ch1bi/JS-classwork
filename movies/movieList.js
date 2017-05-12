var http = require("http");
var movieList = require("./movies.json");
var server = http.createServer(function(req, res){


    for(var i = 0; i < movieList.movies.length; i++){
        
       res.write("Movie:" + movieList.movies[i].title  +"\t" + "Genre:" + movieList.movies[i].genre +"\t" + "Year:" + movieList.movies[i].year + "\n" + "\n");
       
    }

    res.end();
        

});


server.listen(3000);
