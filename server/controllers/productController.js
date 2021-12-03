const { Router } = require('express');
const router = Router();
const isMine = require('../middlewares/isMine');
const isAuthenticated = require('../middlewares/isAuthenticated');
const productService = require('../services/productService');

router.get("/" ,(req, res) =>{
   productService.getAll(req.query)
    .then(products => res.json(products))

});

router.get('/:productId', async (req, res) => {
    let product = await productService.getOne(req.params.productId);
    res.json(product);
});

router.post("/" , isAuthenticated, async (req, res) =>{
    await productService.create({...req.body, creator: req.user._id});
    res.json({ok: true})
           
});

router.put("/:productId", isAuthenticated, isMine, async (req, res) => {
    await productService.updateOne(req.params.productId, req.body);
    res.json({ok: true})
});

router.delete("/:productId", isAuthenticated, async (req, res) => {
    await productService.deleteOne(req.params.productId);
    res.json({ok: true})
});


module.exports = router;