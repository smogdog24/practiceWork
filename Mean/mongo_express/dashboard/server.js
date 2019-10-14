const express = require("express");
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/monkeydb', {useNewUrlParser: true});

const MonkeySchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    age: {type: Number, required: true, min: 1, max: 50},
    color: {type: String, required: true, minlength: 1}
})
const Monkey = mongoose.model('Monkey', MonkeySchema);
app.use(express.urlencoded({extended: true}));




app.use(express.static(__dirname + "/static"));
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');




app.get("/", (req, res) => {
    Monkey.find()
    .then(data => res.render('showall', {monkeys:data}))
    .catch(err=>res.json(err));
});


app.get('/monkeys/new', (req, res) => {
    res.render('monkeys/new');
});


app.get('/monkeys/:id', (req, res) => {
    console.log(req.params.id)
    Monkey.findOne({_id: req.params.id})
    .then(monkey => {
        console.log(monkey)
        res.render('monkeys/show', {monkey:monkey})})
    .catch(err=>res.json(err));
});

app.get('/monkeys/:id/edit', (req, res) => {
    const id = req.params.id;
    console.log(req.params.id)
   // Monkey.findOne({name: 'aaa'})
    Monkey.findById(id)
    .then(monkey => {
        console.log(data)
        res.render('monkeys/edit', {monkey:monkey})})
    .catch(err=>res.json(err));
});

app.post('/monkeys/:id/', (req, res) => {
    const id = req.params.id;
    Monkey.findByIdAndUpdate(id, req.body)
        .then(monkey => {
            res.redirect('/');
        })
        .catch(err => {
            console.log('error', err);
            res.redirect('/monkeys/'+id+'/edit')
        });
});

app.post('/monkeys/:id/delete', (req, res) => { //delete will change to delete method app.delete
    console.log(req.params.id)
    Monkey.deleteOne({_id: req.params.id})
    .then(monkey => {
        console.log(monkey)
        res.redirect('/')
    })
    .catch(err=>res.json(err));
});

app.post('/monkeys', (req, res) => { //for making monkeys
    const userData = req.body;
    const monkey = new Monkey;
    monkey.name = userData.name;
    console.log(req.body);
    Monkey.create(req.body)
        .then(Monkey => {
            res.redirect('/');
        })
        .catch(err => {
            console.log('error', err);
            res.redirect('/monkeys')
        });

});

app.listen(8000, function(){console.log('listening on port 8000')});