const { Router } = require('express');
const router = Router();

const productController = require('./controllers/productController');
const recipeController = require('./controllers/recipeController');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');

router.use('/products', productController);
router.use('/recipes', recipeController);
router.use('/auth', authController);
router.use('/user', userController);


// router.get("*" ,(req, res) =>{
//     res.render('404', {title: 'Error Page'})
// });

module.exports = router;