const jwt = require('jsonwebtoken');
const {SALT_ROUNDS, SECRET} = require('../config/config')
const User = require('../models/User');
const bcrypt = require('bcrypt');

const register = async(username, password, email, age, image) =>{

     let salt = await bcrypt.genSalt(SALT_ROUNDS);
     let hash = await bcrypt.hash(password, salt);

     let user = new User({username, password: hash, email, age, image});
     return user.save();
}

const login = async(username, password) => {

     let user = await User.findOne({username: username})//.exec();
     
     if(!user) throw {message: 'User not found'};

     let isMatch = await bcrypt.compare(password, user.password);

     if(!isMatch) throw {message: 'Password does not match'};

     let token = jwt.sign({_id: user._id, username: user.username}, SECRET, {expiresIn: '1d'});
    
     return {token, user};
}

module.exports = {
    login,
    register
}