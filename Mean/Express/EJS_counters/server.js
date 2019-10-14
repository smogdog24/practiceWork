const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.get('/', (req, res) => {
    if('counter' in req.session){
        req.session.counter++
    }
    else{
        req.session.counter = 0
    }
    res.render('index', {count: req.session.counter});
});

app.get('/count', (req, res) => {
    req.session.counter++
    res.redirect('/');
});

app.get('/reset', (req, res) =>{
    req.session.destroy()
    res.redirect('/');
})


app.listen(8000, () => console.log("listening on port 8000"));