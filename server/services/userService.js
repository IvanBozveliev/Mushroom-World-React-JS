const {SECRET} = require('../config/config');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

async function editUserInfo(userId, userData){
      let {username} = userData;
    
      let token = jwt.sign({_id: userId, username}, SECRET, {expiresIn: '1d'});
      
      let user = await User.findByIdAndUpdate(userId, {$set: userData}, {new: true})
  
      return {user , token};
}

function getUserInfo(userId){
     return User.findById(userId).lean();
}

module.exports = {
    editUserInfo,
    getUserInfo
}