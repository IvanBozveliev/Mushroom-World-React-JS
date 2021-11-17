const { Router } = require('express');
const { COOKIE_NAME } = require('../config/config')
const router = Router();

const authService = require('../services/authService');

let isGuest = require('../middlewares/isGuest');
let isAuthenticated = require('../middlewares/isAuthenticated');
const processError = require('../middlewares/errorHandler');


router.get('/login', isGuest, (req, res) => {
    res.render('login', { title: "Login Page" })
});

router.post('/login', isGuest, async (req, res) => {
    const { username, password } = req.body;

    try {

        // if (password == '' || username == '') {
        //     throw new Error('Invalid inputs!')
        // }

        // if (!/^[a-zA-Z0-9]{5,}/g.test(username)) {
        //     throw new Error('Username should be at least 5 characters long and should consist only english letters and digits!')
        // }
        
        // if (!/^[a-zA-Z0-9]{5,}/g.test(password)) {
        //     throw new Error('Password should be at least 5 characters long and should consist only english letters and digits!')
        // }

        let token = await authService.login({ username, password })
        res.cookie(COOKIE_NAME, token)
        res.status(200).json({ok: true})
    } catch (error) {
        res.status(400).send(error)

    }
});

// router.get('/register', isGuest, (req, res) => {
//     res.render('register', { title: "Register Page" })
// });

router.post('/register', isGuest, async (req, res) => {

    const { username, password, repeatPassword } = req.body;

    try {

        // if (!/[a-zA-Z0-9]{3,}/.test(password)) {
        //     throw new Error('Password must be at least 3 characters long and consist only latin letters and digits')
        // }

        // if (password == '' || username == '' || repeatPassword == '') {
        //     throw new Error('Invalid inputs!')
        // }

        // if (password !== repeatPassword) {
        //     throw new Error('Password missmatch!')
        // }

        await authService.register({ username, password })
        res.status(200).json({ok: true})

    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie(COOKIE_NAME)
    res.status(200);
});

module.exports = router;