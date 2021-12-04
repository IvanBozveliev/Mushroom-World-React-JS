const { Router } = require('express');
const router = Router();

const isAuthenticated = require('../middlewares/isAuthenticated');
const isMine = require('../middlewares/isMine');

const recipeService = require('../services/recipeService');

router.get("/", (req, res) => {
    recipeService.getAll(req.query)
        .then(products => res.json(products))

});

router.get('/:recipeId', async (req, res) => {
    let recipe = await recipeService.getOne(req.params.recipeId);
    res.json(recipe);
});

router.post("/", isAuthenticated, async (req, res) => {
   
    try{
        await recipeService.create({ ...req.body, creator: req.user._id });
        res.json({ ok: true });
    }catch(error){
        res.status(400).send(error)
    }
   

});

router.put("/:recipeId", isAuthenticated, isMine, async (req, res) => {

    try {
        await recipeService.updateOne(req.params.productId, req.body);
        res.json({ ok: true });
    } catch (error) {
        res.status(400).send(error)
    }

});

router.delete("/:recipeId", isAuthenticated, isMine, async (req, res) => {
    await recipeService.deleteOne(req.params.recipeId);
    res.json({ ok: true });
});


module.exports = router;