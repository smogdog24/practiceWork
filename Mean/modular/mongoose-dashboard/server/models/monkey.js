const mongoose = require('mongoose');
const MonkeySchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    age: {type: Number, required: true, min: 1, max: 50},
    color: {type: String, required: true, minlength: 1}
});
module.exports = mongoose.model("Monkey", MonkeySchema);