const mongoose = require('mongoose');
const Cake = mongoose.model("Cake");
const Rating = mongoose.model("Rating")
 
 
module.exports = {
    index: (req, res) => {
       Cake.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    show: (req, res) => {
       Cake.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    create: (req, res) => {
       Cake.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    update: (req, res) => {
        Rating.create(req.body)
        .then( Rating => {
            Cake.findByIdAndUpdate(req.params.id, {$push: {comments: Rating }})
            .then(data => res.json(data))
            .catch(err => res.json(err));
        })
        .catch( err => {
            console.log('error', err);
        })
    },
    delete: (req, res) => {
       Cake.findByIdAndDelete(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    }
}
