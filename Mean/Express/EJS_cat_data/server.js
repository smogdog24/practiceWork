const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/cats", (req, res) => {
    res.render('cats');
});
app.get("/cats/whisker", (req, res) => {
    const cat_info = {
        name: "whisker",
        food: "catnip",
        age: "4",
        sleeping_spot: ["couch", "floor", "pillows"]
    }; 
    res.render('whisker', {whisker: cat_info});
});
app.get("/cats/kitty", (req, res) => {
    const cat_info = {
        name: "kitty",
        food: "pizza",
        age: "1/2",
        sleeping_spot: ["bed", "clean laundry pile", "window"]
    }; 
    res.render('kitty', {kitty: cat_info});
});
app.get("/cats/flerken", (req, res) => {
    const cat_info = {
        name: "flerken",
        food: "kree",
        age: "198",
        sleeping_spot: ["desk", "chair", "space ship"]
    }; 
    res.render('flerken', {flerken: cat_info});
});

app.listen(8000, () => console.log("listening on port 8000"));