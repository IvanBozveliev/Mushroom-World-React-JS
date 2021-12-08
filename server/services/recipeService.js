const Recipe = require('../models/Recipe');

function create(data) {

   if (data.title == '' || data.directions == '' || data.imageUrl == '' || data.ingredients == '' || data.cookingTime == '' || data.preparationTime == '') {
      throw ({message: 'You can not have empty fields!'})
   }

   if(data.title.length < 3){
       throw ({message:'The title should be at least 4 characters!'})
   }

   if(data.directions.length < 20){
       throw ({message:'The directions should be at least 20 characters!'})
   }

   if(!/^https?:\/\//g.test(data.imageUrl)){
       throw ({message:'The image should be starts with http or https!'})
   }

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

   return recipes
}

function updateOne(recipeId, data) {

   if (data.title == '' || data.serves == '' || data.directions == '' || data.imageUrl == '' || data.ingredients == '' || data.cookingTime == '' || data.preparationTime == '') {
      throw ({message: 'You can not have empty fields!'})
   }

   return Recipe.updateOne({ _id: recipeId }, data)
}

function deleteOne(recipeId) {
   return Recipe.deleteOne({ _id: recipeId })
}

async function likeOne(recipeId, userId) {
   
   let recipe = await Recipe.findById(recipeId);

   recipe.likes.push(userId);
   return recipe.save();
}

module.exports = {
   create,
   getOne,
   getAll,
   updateOne,
   deleteOne,
   likeOne
}