const express = require('express');
const router = express.Router();
const data = require("../data");
const commentData = data.comments;
const recipeInfo = data.recipes;

// get all the comments made 
router.get("/recipe/:recipeId",async (req,res) => {
    try {
        const recipeC = await recipeInfo.commentsForRecipe(req.params.recipeId);
        res.json(recipeC);
    } catch(e) {
        res.status(404).json({error:"Comment not found"});
    }
});

router.get("/:commentId",async(req,res) => {
    try {
        const comment = await recipeInfo.getCommentById(req.params.commentId);
        res.json(comment);
    }catch (e) {
        res.status(404).json({error:"Comment not found in get2"});
    }
});

router.post("/:recipeId", async (req,res) => {
    const commentData = req.body;
    //console.log(commentData);
    try {
        const recipe = await recipeInfo.getRecipeById(req.params.recipeId);
        console.log(recipe);
        const {poster,comment} = commentData;
        console.log(poster,comment);
        const newComment = await recipeInfo.addComment(recipe,poster,comment);
        console.log(newComment);
        res.json(newComment);
    } catch (e) {
        res.status(500).json({error:"Could not add comment"});
    }
});

router.put("/:recipeId/:commentId",async(req,res) => {
    const updatedData = req.body;
    //console.log(updatedData)
    try {
        let recipe = await recipeInfo.getRecipeById(req.params.recipeId);
        //console.log(recipe)
    } catch (e) {
        res.status(404).json({error:"Comment not found"});
    }
    try {
        //console.log(req.params.recipeId)
        //console.log(req.params.commentId)
        const updatedRecipe = await recipeInfo.updateComment(req.params.recipeId,req.params.commentId,updatedData);
        //console.log("This is "+updatedRecipe)
        res.json(updatedRecipe);
    } catch (e) {
        res.status(500).json({error: "Could not update comment"});
    }
});

router.delete("/:id",async(req,res) => {
    
    try {
        let commentToDelete = recipeInfo.deleteComment(req.params.id);
        res.json(commentToDelete);
    } catch (e) {
        res.status(500).json({error:"Could not delete comment"});
    }
});

module.exports = router;





