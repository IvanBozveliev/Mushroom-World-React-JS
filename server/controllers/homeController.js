const { Router } = require('express');
const router = Router();

const productService = require('../services/productService')

router.get("/products" ,(req, res) =>{
   productService.getAll()
    .then(product => res.json(product))

});

router.post("/products" , async (req, res) =>{
    await productService.create(req.body);
    res.json({ok: true})
           
});
module.exports = router;