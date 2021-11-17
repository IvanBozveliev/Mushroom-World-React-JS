const jwt = require('jsonwebtoken');
const {SECRET} = require('../config/config');

exports.auth = function (req, res, next) {
    let token = req.headers['x-authorization'];
    console.log(token)
    if (token) {
        let decodedToken = jwt.verify(token, SECRET)
        if (decodedToken) {
            req.user = decodedToken;
            
            next();
        } else {
            res.status(401).json('You are not authorized');
        }
    } else {
        next();
    }
};

exports.isAuth = function (req, res, next) {
    if (req.user) {
        next()
    } else {
        res.status(401).json({message: 'You are not authorized'});
    }
};
