const mongoose = require('mongoose');
 
const ratingSchema = new mongoose.Schema({
    rating: {type: Number, min: 1, max: 5},
    comment: {type: String, minlength: [3, "Comment length must be between 3 and 100 characters"], max: [100, "Comment length must be between 3 and 100 characters"]}
    
},
{timestamps: true}
);

const cakeSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Error- Baker's Name is required"], minlength: [3,"Name must be between 3-45 characters"], maxlength: [45, "Name must be between 3-45 characters"]},
    imageURL: {type: String, required: [true, "Error- Image URL is required"]},
    comments: [ratingSchema]
    },
    {timestamps: true}
    
 
);



 
mongoose.model("Cake", cakeSchema);
mongoose.model("Rating", ratingSchema);