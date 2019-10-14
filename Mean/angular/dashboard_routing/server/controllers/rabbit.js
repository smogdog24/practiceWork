const mongoose = require('mongoose');
const Rabbit = require('../models/rabbit');


module.exports = {
    index: (req, res) => {
        Rabbit.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    show: (req, res) => {
        Rabbit.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    create: (req, res) => {
        Rabbit.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    update: (req, res) => {
        Rabbit.findByIdAndUpdate(req.params.id, req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    delete: (req, res) => {
        Rabbit.findByIdAndDelete(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    }
}