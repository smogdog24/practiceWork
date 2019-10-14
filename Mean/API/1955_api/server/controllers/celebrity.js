const mongoose = require('mongoose');
const Celeb = require('../models/celebrity');

module.exports = {
    index: (req,res) => {
        Celeb.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        })
    },
    new: (req,res) => {
        Celeb.create(req.params)
        .then(data => {
            res.redirect('/');
        })
        .catch(err => {
            res.json(err);
        });
    },
    Show: (req,res) => {
        Celeb.findOne(req.params)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    },
    delete: (req,res) => {
        Celeb.deleteOne(req.params)
        .then(() => res.json(data))
        .catch(err => res.json(err));
    }
};