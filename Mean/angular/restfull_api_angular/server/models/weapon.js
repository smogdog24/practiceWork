const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/weapons', {useNewUrlParser:true});
const WeaponSchema = new mongoose.Schema({
    throwable: Boolean,
    name: String,
    durability: Number,
    damage: Number,
    description: String
})
const Weapon = mongoose.model('weapon', WeaponSchema)
module.exports = Weapon;