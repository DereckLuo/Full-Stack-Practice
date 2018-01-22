var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

//INDEX -- show all campgrounds
router.get("/", function(req, res){
    //get all campgrounds from DB
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/index", {campgrounds : campgrounds});
        }
    });
});


//CREATE - adding new campground post rout
router.post("/", middleware.isLoggedIn, function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description; 
    var price = req.body.price;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampground = {name : name, price:price, image : image, description: description, author: author};
    
    //create a new campground and save into database 
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else{
            //redirect back to campgrounds page 
            res.redirect("/campgrounds");
        }
    });
});

//NEW - form creating new page 
router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

//SHOW - shows more information about one campground
router.get("/:id", function(req, res){
    //find a campground with provided ID 
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
       if(err){
           console.log(err);
       } else{
           res.render("campgrounds/show", {campground: foundCampground});
       }
    });
});

// EDIT CAMPGROUD ROUTE -- form for edit 
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res) {
    //check if user logged in and own the campground, else redirect
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground}); 
    });
});

// UPDATE CAMPGROUD ROUTE -- submit edit form logic 
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
   //find and update correct campground 
   Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
       if(err){
           console.log(err);
       } else{
           res.redirect("/campgrounds/" + req.params.id);
       }
   });
   //redirect to campground home page 
});

//DELETE - destroy a campground
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
        } else{
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;