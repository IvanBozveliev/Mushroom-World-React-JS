const { Router } = require('express');
const router = Router();

const recipeService = require('../services/recipeService');

router.get("/" ,(req, res) =>{
   recipeService.getAll()
    .then(products => res.json(products))

});

router.get('/:recipeId', async (req, res) => {
    let recipe = await recipeService.getOne(req.params.recipeId);

    res.json(recipe);
});

router.post("/" , async (req, res) =>{
    await recipeService.create({...req.body, creator: req.user._id});
    res.json({ok: true})
           
});

router.put("/:recipeId", async (req, res) => {
    await recipeService.updateOne(req.params.productId, req.body);
    res.json({ok: true})
});

router.delete("/:recipeId", async (req, res) => {
    await recipeService.deleteOne(req.params.productId);
    res.json({ok: true})
});


module.exports = router;