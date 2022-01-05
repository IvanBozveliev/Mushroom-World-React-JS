const { Router } = require('express');
const { COOKIE_NAME } = require('../config/config')
const router = Router();

const authService = require('../services/authService');

let isGuest = require('../middlewares/isGuest');
let isAuthenticated = require('../middlewares/isAuthenticated');

router.post('/login', isGuest, async (req, res) => {
    const { username, password } = req.body;

    try {

        if (password == '' || username == '') {
            throw ({message: 'Invalid inputs!'})
        }

        if (!/^[a-zA-Z0-9]{3,}/g.test(username)) {
            throw ({message: 'Username should be at least 3 characters long and should consist only english letters and digits!'})
        }
        
        if (!/^[a-zA-Z0-9]{3,}/g.test(password)) {
            throw ({message: 'Password must be at least 3 characters long and consist only latin letters and digits!'})
        }

        let {token, user} = await authService.login(username, password)
        res.cookie(COOKIE_NAME, token)
        res.status(200).json({username, token, id: user._id, email: user.email, age: user.age, image: user.image}) 
    } catch (error) {
        res.status(400).send(error)

    }
});

router.post('/register', isGuest, async (req, res) => {

    const { username, password, repeatPassword, email, age, image } = req.body;

    try {
        
        if(age > 120){
            throw ({message: 'Invalid age input!'})
        }

        if (password == '' || username == '' || repeatPassword == '') {
            throw ({message: 'Invalid inputs!'})
        }

        if (password !== repeatPassword) {
            throw ({message: 'Password missmatch!'})
        }
        
        if (!/[a-zA-Z0-9]{3,}/.test(password)) {
            throw ({message: 'Password must be at least 3 characters long and consist only latin letters and digits!'})
        }
  

        await authService.register( username, password, email, age, image)

        let {token, user} = await authService.login( username, password )

        res.cookie(COOKIE_NAME, token)
        res.status(200).json({username, token, id: user._id, email, age, image})

    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie(COOKIE_NAME)
    res.status(200).json({ok: true});
});

module.exports = router;