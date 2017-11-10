const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const comments = require("./comments");
const uuid = require('node-uuid');

let exportedMethods = {
     async getAllRecipes() {
        
            const myCall = await recipeCollection
                .find({},{_id : 1 ,title : 1})
                .toArray();

                return myColl
        
    },
 
    async getRecipeById(id) {
        if(!id) throw"Invalid ID"
        
            const recipeById = recipeCollection
                .findOne({_id: id},{_id : 1 , title : 1, ingredients : 1 , steps : 1})
                .then((post) => {
                    if (!post) 
                        throw "Recipe not found";
                    return post;
                });
       
    },
     async getCommentByRecipeId(id) {
        if(!id) throw"Invalid ID"
        return recipes().then((recipeCollection) => {
            return recipeCollection
                .findOne({_id: id},{comments : 1 , _id : 1,title : 1})
                .then((post) => {
                    if (!post) 
                        throw "Recipe not found";
                    return post;
                });
        });
    },
    
    addRecipe(title,ingredients,steps) {
        return recipes().then((recipeCollection) => {
            
                var newRecipe = {
                    _id: uuid.v4(),
                    title: title,
                    ingredients: ingredients,
                    steps: steps,
                    comments: []

                };

        return recipeCollection
                .insertOne(newRecipe)
                .then((newInsertInformation) => {
                return newInsertInformation.insertedId;
    })
    .then((newRecipeId) => {
            return this.getRecipeById(newRecipeId);
    });
    });

    },
    removeRecipe(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection
                .removeOne({_id: id})
                .then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        throw(`Could not delete post with id of ${id}`)
                    } else {}
                });
        });
    },
    updateRecipe(id, updatedRecipe) {
        return recipes().then((recipeCollection) => {
            let updatedRecipeData = {};

            if (updatedRecipe.ingredients) {
                updatedRecipeData.ingredients = updatedRecipe.ingredients;
            }

            if (updatedRecipe.title) {
                updatedRecipeData.title = updatedRecipe.title;
            }

            if (updatedRecipe.steps) {
                updatedRecipeData.steps = updatedRecipe.steps;
            }

            let updateCommand = {
                $set: updatedRecipeData
            };

            return recipeCollection.updateOne({
                _id: id
            }, updateCommand).then((result) => {
                return this.getRecipeById(id);
            });
        });
    },
    
    
}

module.exports = exportedMethods;