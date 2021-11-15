const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
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