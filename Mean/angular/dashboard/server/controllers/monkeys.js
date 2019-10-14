const mongoose = require('mongoose');
const Monkey = require('../models/monkey');

module.exports = {
    index: (req, res) => {
    Monkey.find()
        .then(data => res.render('showall', {monkeys:data}))
        .catch(err=>res.json(err));
    },
    new: (req, res) => {
        res.render('monkeys/new');
    },
    show: (req, res) => {
        console.log(req.params.id)
        Monkey.findOne({_id: req.params.id})
        .then(monkey => {
            console.log(monkey)
            res.render('monkeys/show', {monkey:monkey})})
        .catch(err=>res.json(err));
    },
    edit: (req, res) => {
        const id = req.params.id;
        console.log(req.params.id)
    // Monkey.findOne({name: 'aaa'})
        Monkey.findById(id)
        .then(monkey => {
            res.render('monkeys/edit', {monkey:monkey})})
        .catch(err=>res.json(err));
    },
    update: (req, res) => {
        const id = req.params.id;
        Monkey.findByIdAndUpdate(id, req.body)
            .then(monkey => {
                res.redirect('/');
            })
            .catch(err => {
                console.log('error', err);
                res.redirect('/monkeys/'+id+'/edit')
            });
    },
    delete: (req, res) => { //delete will change to delete method app.delete
        console.log(req.params.id)
        Monkey.deleteOne({_id: req.params.id})
        .then(monkey => {
            console.log(monkey)
            res.redirect('/')
        })
        .catch(err=>res.json(err));
    },
    create: (req, res) => { //for making monkeys
        const userData = req.body;
        const monkey = new Monkey();
        monkey.name = userData.name;
        console.log(req.body);
        Monkey.create(req.body)
            .then(monkey => {
                res.redirect('/');
            })
            .catch(err => {
                console.log('error', err);
                res.redirect('/monkeys');
            });
        }
};