const { Router } = require('express');
const router = Router();

const productService = require('../services/productService');
const isAuthenticated = require('../middlewares/isAuthenticated');
const processError = require('../middlewares/errorHandler');
const clearUselessIds = require('../middlewares/clearUselessIds');
const isMine = require('../middlewares/isMine');
const isEnroll = require('../middlewares/isEnroll');

router.get("/", (req, res) => {
    productService.getAll(req.query)
           .then(res => res.status(200).toObject())
           .catch((err) => console.log('err'))
});

// router.get('/guests', async (req, res) => {
//     let products = await productService.getAllGuests()
//     res.render('guest-home', { title: 'Home page', products })
// })

router.get("/create", isAuthenticated, (req, res) => {
    res.render('create', { title: 'Create page' })
});

router.post('/create', isAuthenticated, async (req, res) => {
    // const { title, description, imageUrl } = req.body;
  
    try {
        await productService.create(req.body)
        res.redirect('/products')
    } catch (error) {
        if (error.name == 'ValidationError') {
            let err = processError(error);

            res.render('create', { error: err })
        } else {
            res.render('create', { error: error.message })
        }
    }
});


router.get('/details/:productId', async (req, res) => {
    let product = await productService.getOne(req.params.productId)
    // let isCreator = product.creator.toString() == req.user?._id;
    res.render('details', { title: 'Details page', product })
});

router.get('/edit/:productId', isAuthenticated, isMine, (req, res) => {
    productService.getOne(req.params.productId)
        .then(product => res.render('edit', { title: 'Edit page', product }))
});

router.post('/edit/:productId', isAuthenticated, isMine, async (req, res) => {

    try {
        await productService.updateOne(req.params.productId, req.body)
        res.redirect(`/products/details/${req.params.productId}`)
    } catch (error) {
        if (error.name == 'ValidationError') {
            let err = processError(error);

            res.render('create', { error: err })
        } else {
            res.render('create', { error: error.message })
        }
    }
});

router.get('/delete/:productId', isAuthenticated, isMine, (req, res) => {

    productService.deleteOne(req.params.productId)
        .then(() => res.redirect('/'))


});

// router.get('/:productId/delete', isAuthenticated, (req, res) => {
//     productService.getOne(req.params.productId)
//         .then(product => {

//             if(req.user._id !== product.creator.toString()){
//                 res.redirect('/products')
//             } else{
//                 res.render('deleteCube', {product})
//             }
//         })
// });

// router.post('/:productId/delete', isAuthenticated, (req, res) => {
//     productService.getOne(req.params.productId)
//         .then(product => {
//             if (req.user._id !== product.creator.toString()) {
//                 return res.redirect('/products')
//             }
//             return productService.deleteOne(req.params.productId)
//         })
//         .then(() => res.redirect('/products'))
// })
module.exports = router;