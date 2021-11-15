const Product = require('../models/Product');

async function isMine(req, res, next){
   
    if(req.user){

     let product = await Product.findById(req.params.productId);
     let isTrue = product.creator.toString() == req.user._id;

     if(isTrue){
         next()
     }else{
        return res.redirect('/')
     }
    }

}

module.exports = isMine;