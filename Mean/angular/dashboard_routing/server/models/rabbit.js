const mongoose = require('mongoose');

const RabbitSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Error- Name is required"], minlength: [3,"Name must be between 3-45 characters"], maxlength: [45, "Name must be between 3-45 characters"]},
    color: {type: String, required: [true, "Error- Color is required"], minlength: [2,"Color must be between 2-30 characters"], maxlength: [30, "Color must be between 2-30 characters"]},
    age: {type: Number, required: [true, "Error- Age is required"], min: [1,"Age must be between 1-20"], max: [20, "Age must be between 1-20"]}
    },
    {timestamps: true}

);

module.exports = mongoose.model("Rabbit", RabbitSchema);