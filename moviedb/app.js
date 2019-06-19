var express = require("express");
var request = require("request");
var app = express();
app.set("view engine","ejs");

app.get("/",function(req, res) {
   res.render("home"); 
});

app.get("/results",function(req,res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
   request(url,function (error,response,body) {
       if(!error && response.statusCode == 200){
           var result = JSON.parse(body);
        //   console.log(result);
           res.render("result",{data: result});
       }
   }) 
});

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("Server started!!"); 
});

// result["Search"][0].Title