const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/cat", (req, res) => {
    res.render('cat');
});
app.get("/car", (req, res) => {
    res.render('car');
});
app.get("/car/new", (req, res) => {
    res.render('form');
});

app.listen(8000, () => console.log("listening on port 8000"));