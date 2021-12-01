const Recipe = require('../models/Recipe');

function create(data, userId) {

   if (data.title == '' || data.description == '' || data.imageUrl == '') {
      throw new Error('You can not have empty fields!')
   }

   // if(data.title.length < 4){
   //     throw new Error('The title should be at least 4 characters')
   // }

   // if(data.description.length < 20){
   //     throw new Error('The description should be at least 20 characters')
   // }

   // if(!/^https?:\/\//g.test(data.imageUrl)){
   //     throw new Error('The image should be starts with http or https')
   // }

   let recipe = new Recipe({ ...data});
   return recipe.save();
}

function getOne(id) {
   return Recipe.findById(id).lean();
}

async function getAll(query) {
   
   let recipes = await Recipe.find().exec();

   if (query.cookingTime == "min") {
      recipes = recipes.sort((a, b) => a.cookingTime - b.cookingTime);
   }

   if (query.cookingTime == "max"){
      recipes = recipes.sort((a,b) => b.cookingTime - a.cookingTime)
   }
   // if (query.from) {
   //    products = products.filter(x => Number(x.difficultyLevel) <= query.from);
   // }
   // if (query.to) {
   //    products = products.filter(x => Number(x.difficultyLevel) >= query.to);
   // }

   return recipes
}


// async function getAllGuests(){
   
//    let products = await Product.find({}).lean();
//    products = products.sort((a,b) => b.usersEnrolled.length - a.usersEnrolled.length);
//    products = products.slice(0,3)

//  return products
// }

// function getOneWithAccessory(id){
//    return Product.findById(id).populate('accessories').lean()
// }

function updateOne(productId, productData) {
   return Recipe.updateOne({ _id: productId }, productData)
}

function deleteOne(productId) {
   return Recipe.deleteOne({ _id: productId })
}

module.exports = {
   create,
   getOne,
   getAll,
   // getOneWithAccessory,
   updateOne,
   deleteOne,
   // getAllGuests
}