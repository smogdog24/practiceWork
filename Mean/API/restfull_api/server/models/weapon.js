const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WeaponsDb', {useNewUrlParser:true});
const WeaponSchema = new mongoose.Schema({
    throwable: Boolean,
    name: String,
    durability: Number,
    damage: Number,
    description: String
})
const Weapon = mongoose.model('weapon', WeaponSchema)
module.exports = Weapon;