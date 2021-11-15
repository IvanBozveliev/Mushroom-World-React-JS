const router = require('express').Router();
const authService = require('../services/authService');

router.post('/register', async (req, res, next) => {
    let { email, password } = req.body;

    try {
        let user = await authService.register({ email, password });
        let { accessToken, refreshToken } = await authService.login({ email, password });

        res.json({
            _id: user._id,
            email: user.email,
            accessToken,
            refreshToken,
        });
    } catch (error) {
        next(error)
    }
});

router.post('/login', async (req, res) => {
    let { email, password } = req.body;

    let { user, accessToken, refreshToken } = await authService.login({ email, password });

    res.json({
        _id: user._id,
        email: user.email,
        accessToken,
        refreshToken,
    });
});

router.get('/logout', (req, res) => {
    res.json({ ok: true });
});

router.post('/refresh', async (req, res) => {
    console.log(req.body);
    let refreshToken = req.body.refreshToken;

    let { accessToken, refreshToken: newRefreshToken } = await authService.refresh(refreshToken);

    res.json({
        accessToken,
        refreshToken: newRefreshToken,
    });
});

module.exports = router;