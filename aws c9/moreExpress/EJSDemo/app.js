var express = require("express");
var app = express();

//express content serve
app.use(express.static("public"));

//routes 

//root route
app.get("/", function(req, res){
    res.render("home.ejs");
    // res.send("Welcomd to the homepage");
});

//fallingloveiwth rout 
app.get("/fallinlovewith/:thing", function(req,res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar : thing});
});

//loop example
app.get("/posts", function(req, res){
    var posts = [
            {title : "post 1", author: "susy"},
            {title : "my adorable pet bunny", author: "Charlie"},
            {title : "Can you believe this pomsky", author: "Colt"},
            {title : "I suck at pubg ", author: "Dereck"},
        ];
    res.render("post.ejs", {posts: posts});
    
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening!!");
});