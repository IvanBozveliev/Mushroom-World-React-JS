const { Router } = require('express');
const router = Router();
const path = require('path');

const productController = require('./controllers/productController');
const recipeController = require('./controllers/recipeController');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');

router.use('/api/products', productController);
router.use('/api/recipes', recipeController);
router.use('/api/auth', authController);
router.use('/api/user', userController);

router.use("/api/*", (req, res) => {
    const errorMessage = `Endpoint ${req.method.toUpperCase()} ${req.baseUrl}${req.path.slice(0, -1)} NOT FOUND!`;
    res.status(404).json(errorMessage);
});

router.get("*", (req, res) => {
    console.log(path.join(__dirname, './public', 'index.html'))
    res.sendFile(path.join(__dirname, './public', 'index.html'))
});

module.exports = router;