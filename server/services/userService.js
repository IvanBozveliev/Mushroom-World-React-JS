const User = require('../models/User');

async function editUserInfo(userId, userData){
      
      return await User.findByIdAndUpdate(userId, {$set: userData}, {new: true})
    
}

function getUserInfo(userId){
     return User.findById(userId).lean();
}

module.exports = {
    editUserInfo,
    getUserInfo
}