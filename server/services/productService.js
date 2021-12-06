const Product = require('../models/Product');

function create(data) {
   
   if (data.title == '' || data.description == '' || data.imageUrlOne == '' || data.imageUrlTwo == '') {
      throw ({message: 'You can not have empty fields!'})
   }

   if(data.title.length < 4){
       throw ({message:'The title should be at least 4 characters'})
   }

   if(data.description.length < 20){
       throw ({message:'The description should be at least 20 characters'})
   }

   if(!/^https?:\/\//g.test(data.imageUrlOne)){
       throw ({message:'The image should be start with http or https'})
   }

   if(!/^https?:\/\//g.test(data.imageUrlTwo)){
       throw ({message:'The image should be start with http or https'})
   }
   
   let product = new Product({ ...data});
   return product.save();
}

function getOne(id) {
   return Product.findById(id).lean();
}

async function getAll(query) {
   
   let products = await Product.find();
  
   if(query.mushType == 'edable'){
      products = products.filter(x => x.mushType == 'edable');
     
   }
   
   if(query.mushType == 'poison'){
      products = products.filter(x => x.mushType == 'poison');
      
   }
   
   return products
}



function updateOne(productId, data) {
   if (data.title == '' || data.description == '' || data.imageUrlOne == '' || data.imageUrlTwo == '') {
      throw ({message: 'You can not have empty fields!'})
   }
   return Product.updateOne({ _id: productId }, data)
}

function deleteOne(productId) {
   return Product.deleteOne({ _id: productId })
}

module.exports = {
   create,
   getOne,
   getAll,
   updateOne,
   deleteOne,
}