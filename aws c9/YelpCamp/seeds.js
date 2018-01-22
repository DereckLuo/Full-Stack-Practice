var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
         name: "Salmon Creek", 
         image: "https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg",
         description: "This is a huge granite hill, no bathrooms, no water."
        },
        {
         name: "Granite Hill", 
         image: "https://www.w3schools.com/w3css/img_fjords.jpg",
         description: "This is a fun campground, plenty supplies and beautiful site"
        },
        {
         name: "Mountain Goat's Rest", 
         image: "https://www.w3schools.com/w3images/lights.jpg",
         description: "I have nothing to say about this place"
        }
    ]
function removeComment(){
    //Remove all Comments 
    Comment.remove({}, function(err){
        if(err){
            console.log(err);
        } else{
            console.log("removed comments");
        }
    })
}

function seedDB(){
    //Remove Comments
    // removeComment();
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        removeComment();
        // console.log("removed campgrounds!");
        // //add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         } else{
        //             console.log("added a campground");
        //             //create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is great, but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else{
        //                         campground.comments.push(comment._id);  
        //                         campground.save();
        //                         // console.log(campground);
        //                     }
        //                 })
        //         }
        //     })
        // })
    })
}



module.exports = seedDB;