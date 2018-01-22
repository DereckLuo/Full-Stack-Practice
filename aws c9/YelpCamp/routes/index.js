var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//ROOT
router.get("/", function(req, res){
    res.render("landing");
});


//SHOW -  show register form
router.get("/register", function(req, res){
    res.render("auth/register");
});

//handle sign up logic 
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            req.flash("error", err.message);
            res.render("auth/register");
        } else{
            passport.authenticate("local")(req, res, function(){
                req.flash("success", "Welcome to YelpCamp " + user.username);
                res.redirect("/campgrounds");
            });
        }
    });
});

//show login form
router.get("/login", function(req, res) {
    res.render("auth/login");
});

//handling log in logic
router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), function(req, res) {
});

//log out rout
router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/campgrounds");
});


module.exports = router;