const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    productname: {
        type: String,
        required: true,
        //unique: true,
        // minlength: [1, 'Title should consist minimum 5 characters']
    },
    description:{
        type: String,
        required: true,
        // minlength: [1, 'Description should consist minimum 5 characters']

    },
    imageUrl: {
        type: String,
        required: true,
        // validate: [/^https?/, 'The imageUrl should be starts with http or https']
    },
    mushType: {
        type: String,
        enum: ['poison', 'edable'],
        required: true
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
    
})

module.exports = mongoose.model('Product', productSchema)