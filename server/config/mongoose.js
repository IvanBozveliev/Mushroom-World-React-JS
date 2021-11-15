const mongoose = require('mongoose');
const config = require('./config');

module.exports = () =>{
    mongoose.connect(config.DB_CONNECTION, {useNewUrlParser : true, useUnifiedTopology: true });
    let db = mongoose.connection;

    db.on('error', () => console.log('Error connection!'))
    db.once('open', () => console.log('DB CONNECTED!'))
}