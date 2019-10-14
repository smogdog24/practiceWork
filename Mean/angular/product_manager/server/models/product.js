const mongoose = require('mongoose');
 
const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name of item is required"], minlength: [4,"Name must be between 4-45 characters"], maxlength: [45, "Name must be between 3-45 characters"]},
    imageURL: {type: String, required: [true, "Image URL is required"]},
    price: {type: Number, required: [true, "Price is required"], min: [1, "Numbers only- must be more than 1"]}, 
    },
    {timestamps: true});
 
module.exports = mongoose.model("Product", ProductSchema);