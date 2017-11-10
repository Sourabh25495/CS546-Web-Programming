const express = require('express');
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;


router.get("/:id", (req, res)=>{
    recipeData.getRecipeById(req.param.id).then((post)=>{
        res.json(post);
    }).catch(() => {
        req.status(404).json({error: "Recipe not found"})
    })
})

router.post("/", (req, res)=>{
    let recipeBlogData = req.body;

    recipeData.addRecipe(recipeBlogData.title, recipeBlogData.ingredients, recipeBlogData.steps)
    .then((newRecipe) => {
        res.json(newRecipe);
    }).catch((e) => {
        res.status(500).json({ error: e });
    });
});

router.put("/:id", (req, res) => {
    let updatedData = req.body;

    let getRecipe = recipeData.getRecipeById(req.params.id);

    getRecipe.then(() => {
        return recipeData.updateRecipe(req.params.id, updatedData)
            .then((updatedPost) => {
                res.json(updatedPost);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "Post not found" });
    });

});

router.delete("/:id", (req, res) => {
    let getRecipe = recipeData.getRecipeById(req.params.id);

    getRecipe.then(() => {
        return recipeData.removeRecipe(req.params.id)
            .then(() => {
                res.sendStatus(200);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "Post not found" });
    });
});

module.exports = router;