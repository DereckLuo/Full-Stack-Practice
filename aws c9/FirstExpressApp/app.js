var express = require("express");
var app = express();


//defining rout

// "/" --> "Hi there!"
app.get("/", function(req, res){
   res.send("Hi there!"); 
});

// "/bye" --> "Goodbuy"
app.get("/bye", function(req, res){
    res.send("Goodbuy!");
});

// "/dog" --> "MEOW"
app.get("/dog", function(req, res){
    res.send("MEOW!");
});

//catch rout
app.get("*", function(req, res){
    res.send("You are a Star!!");
});

//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});

