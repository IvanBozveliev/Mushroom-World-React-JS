const Product = require('../models/Product');

async function isMine(req, res, next){
   
    if(req.user){

     let product = await Product.findById(req.params.productId);

     if(product.creator.toString() == req.user._id){
         next()
     }else{
        return res.status(401).send({message: 'You are not authorizated'})
     }
    }

}

module.exports = isMine;