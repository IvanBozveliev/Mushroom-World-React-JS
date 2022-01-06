const { Router } = require('express');
const router = Router();

const userService = require('../services/userService');
const isAuthenticated = require('../middlewares/isAuthenticated');

router.put('/:userId', async (req, res) => {
    
    try {
        let {token, user} = await userService.editUserInfo(req.params.userId, req.body);
      
        res.status(200).json({username: user.username, token, id: user._id, email: user.email, age: user.age, image: user.image});
    } catch (error) {
        res.status(400).send(error)
    }

})

router.get('/:userId', async (req, res) => {
    try{
        
        let user = await userService.getUserInfo(req.params.userId);
        res.json(user)
    }catch (error) {
        res.status(400).send(error)
    }
})
module.exports = router;