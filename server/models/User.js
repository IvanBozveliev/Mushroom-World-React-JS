const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    // _id: mongoose.Types.ObjectId,
    username: {
        type: String,
        required: true,
        // unique: true,
        // validate: {
        //     validator: (value) => {
        //         return /[a-zA-Z0-9]+/.test(value);
        //     },
        //     message: (props) => {
        //        return `Username should consist only latin letters and digits`
        //     }
        // }
    },
    password: {
        type: String,
        required: true,
        // min: 4
    },
    image: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    }
    // createdArticles: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Product'
    // }]
})

module.exports = mongoose.model('User', userSchema)