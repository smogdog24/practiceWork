const mongoose = require('mongoose');

const CelebSchema = mongoose.Schema({
    name: String
});
module.exports = mongoose.model('Celeb', CelebSchema); 