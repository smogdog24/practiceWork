const Weapon = require('../models/weapon.js')
module.exports = {
    index: function(req, res){
        console.log("..in controller")
        Weapon.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    show: function(req, res){
        Weapon.findOne(req.params)
            .then(data => res.json(data))
            .catch(err => res.json(err));
        
    },
    create: function(req, res){
        console.log(req.body)
        Weapon.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    update: function(req, res){
        Weapon.findOneAndUpdate(req.params, req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    delete: function(req, res){
        Weapon.findOneAndDelete(req.params)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}