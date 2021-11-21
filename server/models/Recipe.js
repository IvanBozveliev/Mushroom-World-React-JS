const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    serves: {
        type: Number,
        required: true,
    },
    directions: {
        type: String,
        required: true,
    },
    preparationTime: {
        type: Number,
        required: true,
    },
    cookingTime: {
        type: Number,
        required: true,
    }, 
    ingredients: {
        type: String,
        required: true,
    },
    imageUrl:{
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});


module.exports = mongoose.model('Recipe', recipeSchema)