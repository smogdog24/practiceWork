const mongoose = require('mongoose');
const Product = require('../models/product');
 
 
module.exports = {
    index: (req, res) => {
        Product.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    show: (req, res) => {
        Product.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    create: (req, res) => {
        Product.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    update: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    delete: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    }
}
