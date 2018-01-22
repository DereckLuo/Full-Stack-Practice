var express = require("express"),
    app = express(),
    // expressSantitizer = require("express-santitizer"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override");
    
//app config 
mongoose.connect("mongodb://localhost/post_your_cat", {useMongoClient: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
// app.use(expressSantitizer());
app.use(methodOverride("_method"));


//Mongoose model 
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);


//rounts 

//root rout
app.get("/", function(req, res){
    res.redirect("/blogs");
})

//INDEX rout
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        } else{
           res.render("index", {blogs : blogs}); 
        }
    });
})

//NEW ROUT
app.get("/blogs/new", function(req, res){
    res.render("new");
})

//CREATE ROUT
app.post("/blogs", function(req, res){
    //create blog 
    // req.body.blog.body = req.santitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, newBlog){
       if(err){
           console.log(err);
       } else{
            //redirect
           res.redirect("/blogs");
       }
    });
})

//SHOW ROUT
app.get("/blogs/:id", function(req, res){
   Blog.findById(req.params.id, function(err, foundBlog){
       if(err){
           res.redirect("/blogs");
       } else{
           res.render("show", {blog: foundBlog});
       }
   }) 
});

//EDIT ROUT
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else{
            res.render("edit", {blog: foundBlog});
        }
    })
});

//UPDATE ROUT
app.put("/blogs/:id", function(req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/blogs");
        } else{
            res.redirect("/blogs/" + req.params.id);
        }
    })
});

//DELETE ROUT
app.delete("/blogs/:id", function(req, res){
    //destroy blog
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        } else{
            res.redirect("/blogs");
        }
    })
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is Running!");
});