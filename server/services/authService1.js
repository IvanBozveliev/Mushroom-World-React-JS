const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {SECRET, SECRET2} = require('../config/config');

exports.register = ({ username, password }) => User.create({ username, password });

exports.login = async ({ username, password }) => {
    let user = await User.findOne({ username, password })
    if (user) {
        let accessToken = jwt.sign({ _id: user._id, username: user.username }, SECRET, { expiresIn: '1m' });
        let refreshToken = jwt.sign({ _id: user._id }, SECRET2, { expiresIn: '7d' });

        user.refreshToken = refreshToken;

        await user.save();

        return { user, accessToken, refreshToken };
    } else {
        throw new Error('No such user');
    }
};

exports.refresh = async (refreshToken) => {
    let { _id } = jwt.verify(refreshToken, SECRET2);

    let user = await User.find({ _id, refreshToken });

    if (user) {
        let accessToken = jwt.sign({ _id: user._id, username: user.username }, SECRET, { expiresIn: '1m' });
        let refreshToken = jwt.sign({ _id: user._id }, SECRET2, { expiresIn: '7d' });

        return { accessToken, refreshToken };
    } else {
        return null;
    }
}