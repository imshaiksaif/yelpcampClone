var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campgrounds = [
    {name: "Saif", image: "https://kid101.com/wp-content/uploads/2018/05/sleepaway.jpg"},
    {name: "surat", image: "https://kid101.com/wp-content/uploads/2018/05/sleepaway.jpg"},
    {name: "azzu", image: "https://kid101.com/wp-content/uploads/2018/05/sleepaway.jpg"}
];


app.get("/", (req, res) => {
    res.render('landing');
});

app.get("/campgrounds", (req, res) => {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", (req, res) => {
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push();
    console.log(campgrounds.push());
    res.redirect("/campgrounds")
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new");
});

app.listen(3000, () => {
    console.log("App is running on server");

});