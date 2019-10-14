const express = require("express");
const app = express();
const mongoose = require('mongoose');
const flash = require('express-flash');
const session = require('express-session');
app.use(flash());
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
mongoose.connect('mongodb://localhost/quoting_dojo', {useNewUrlParser: true});

app.use(express.static(__dirname + "/static"));
   app.set('view engine', 'ejs');
   app.set('views', __dirname + '/views');

const QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    quote: {type: String, required: true, minlength: 5}
})
const Quote = mongoose.model('Quote', QuoteSchema);
app.use(express.urlencoded({extended: true}));


app.get('/quotes', function(req, res) {
    // Logic to grab all quotes and pass into the rendered view
    Quote.find({}, function(err, quotes) {
      if (err) { console.log(err); }
      res.render('quotes', { quotes: quotes });
    });
  });

app.get("/", (req, res) => {
    
    res.render('new')
});

app.post("/quotes", (req, res) => {
const userData = req.body;
console.log(req.body);
Quote.create(req.body)
    .then(Quote => {
        res.redirect('/quotes');
    })
    .catch(err => {
        console.log("We have an error!", err);
        // adjust the code below as needed to create a flash message with the tag and content you would like
        for (var key in err.errors) {
            req.flash('registration', err.errors[key].message);
        }
        res.redirect('/');
    });
    
});



app.listen(8000, () => console.log("listening on port 8000"));
