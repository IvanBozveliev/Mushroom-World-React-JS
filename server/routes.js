const { Router } = require('express');
const router = Router();

const productController = require('./controllers/productController');
const productController2 = require('./controllers/productController2');
const authController = require('./controllers/authController');

router.use('/products', productController);
//router.use('/products', productController);
router.use('/auth', authController);

// router.get("*" ,(req, res) =>{
//     res.render('404', {title: 'Error Page'})
// });

module.exports = router;