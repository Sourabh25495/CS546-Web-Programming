const express = require('express');
const router = express.Router();
const data = require("../data");
const commentData = data.comments;
const recipeData = data.recipes;






router.get("/:id", (req, res) => {
    
        commentData.getCommentById(req.params.id).then((myComment) => {
            res.json(myComment);
        }).catch(() => {
            res.status(404).json({ error: "Recipe not found" });
        });
    });
    
    router.get("/recipes/:id", (req, res) => {
        let allComments = recipeData.getRecipeById(req.params.id);
        allComments.then(() => {
                recipeData.getCommentByRecipeId(req.params.id)
                .then((newRecipe) => {
                res.json(newRecipe);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
        })
    });
    
    
    
    router.put("/:id/:id", (req, res) => {
        let updatedData = req.body;
    
        let getRecipe = recipeData.getRecipeById(req.params.id);
        let getComment = commentData.getCommentById(req.params.id);
    
        getRecipe.then(() => {
            getComment.then(() => {
                return commentData.updateComment(req.params.id,updatedData)
            }).then((updatedPost) => {
                    res.json(updatedPost);
                }).catch((e) => {
                    res.status(500).json({ error: e });
                });
        }).catch(() => {
            res.status(404).json({ error: "Post not found" });
        });
    
    });
    
    router.post("/:id", (req, res) => {
        let commentBlogData = req.body;
        let getRecipe = recipeData.getRecipeById(req.params.id);
    
        getRecipe.then(() => {
                commentData.addComment(req.params.id,commentBlogData.poster,commentBlogData.comment)
                .then((newRecipe) => {
                res.json(newRecipe);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
        })
        
    });
    
    router.delete("/:id", (req, res) => {
        let getRecipe = commentData.getCommentById(req.params.id);
    
        getRecipe.then(() => {
            return commentData.removeComment(req.params.id)
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









