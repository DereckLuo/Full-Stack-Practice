var express = require("express");
var app = express();


//Creating 3 Rout 

//Visiting "/" should print "Hi there, welcome to my assignment!"
app.get("/", function(req, res){
   res.send("Hi there, welcome to my assignment!"); 
});


//Visiting "/speak/pig" should pring "The pig says 'Oink'"
app.get("/speak/:animal", function(req, res){
   var animal = req.params.animal;
   if(animal == "pig")
        res.send("The " + animal + " says 'Oink'");
    else if(animal == "cow")
        res.send("The " + animal + " says 'Moo'");
    else if(animal == "dog")
        res.send("The " + animal + " says 'Woof Woof!'");
    else
        res.send("What are you talking about? " + animal + " can't sepak!");
});

//Visiting "/repeat/hello/3" should print "hello hello hello"
app.get("/repeat/:str/:nums", function(req, res){
   var str = req.params.str;
   var nums = req.params.nums;
   if(isNaN(nums)){
       res.send("This is not a number! are you stupid?!");
   }
   else{
       var output = "";
       for(var i = 0; i < parseInt(nums); i++){
           output += " " + str;
       }
       res.send(output);
   }
});


app.get("*", function(req, res){
   res.send("Sorry, page not found...What are you doing with your life?"); 
});

//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});
