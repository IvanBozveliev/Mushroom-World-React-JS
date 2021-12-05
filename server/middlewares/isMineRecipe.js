const Recipe = require('../models/Recipe');

async function isMine(req, res, next){
   
    if(req.user){

     let recipe = await Recipe.findById(req.params.recipeId);
   
     if(recipe.creator.toString() == req.user._id){
         next()
     }else{
        return res.status(401).send({message: 'You are not authorizated'})
     }
    }

}

module.exports = isMine;