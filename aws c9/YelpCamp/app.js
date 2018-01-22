//loading libraries
var express         = require("express"),
    app             = express(),
    Campground      = require("./models/campground"),
    bodyParser      = require("body-parser"),
    passport        = require("passport"),
    localStrategy   = require("passport-local"),
    User            = require("./models/user"),
    methodOverride  = require("method-override"),
    seedDB          = require("./seeds"),
    flash           = require("connect-flash"),
    Comment         = require("./models/comment"),
    mongoose        = require("mongoose");

//require routs 
var campgroundRoutes    = require("./routes/campgrounds"),
    commentRoutes       = require("./routes/comments"),
    indexRoutes         = require("./routes/index");

mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB();

//PASSPORT CONFIG
app.use(require("express-session")({
    secret: " adlsjflads dlf dlsflakdsfl  kadfj lksdf kd f ",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

//connect routes
app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

//opening port 
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpVamp Server has started");
});

