const mongoCollections = require("../config/mongoCollections");
const recipeCollection = mongoCollections.recipes;
const recipeData = require("./recipes")

const uuid = require("node-uuid");

const exportedMethods = {

    async getAllComments(){
        //const Rcoll= await recipeCollection();
        const allRecipes = await recipeData.getAllRecipes();
        //console.log(allRecipes[1].comments)
        
        allComments =[]

        for(let i=0;i< allRecipes.length; i++){
            allComments.push(allRecipes[i].comments)
        }
        return allComments;
        
    },
    async getCommentById(id) {
        console.log("You are in commentby ID");
        if(!id) throw "You must provide an ID";
            const rCollection = await recipeCollection();
            const commentByID = await rCollection.find({"comments._id":id}).toArray();
            console.log(commentByID);
            if(!commentByID) throw "Comment not found";
            return commentByID;
    },

    async getCommentForRecipe(id)
    {

    },

    async addComment(recipe1, poster, comment)
    {
        if(!poster) throw "You must provide the name of poster";
        if(!comment) throw "You must provide a comment";
        console.log(poster)
        //if(!commentData) throw "You must provide a comment info";

        const rCollection = await recipe();
        let newcommentID = uuidv4();
        
        let newComment = {
            _id : newcommentID,
            poster:poster,
            comment:comment
        };
        
        await rCollection.update({_id:recipe1._id},{$addToSet: { comment: newComment }});
        return newComment;
        //const NrecipeComment = await this.getCommentById(recipe1._id,newComment._id);
        //return NrecipeComment;

     /*   let Rcoll = await recipeCollection();
        console.log(id);
        recipeComment = [];
        for(let i = 0; i < updatedData.length; i++)
        {
            let newComment = {
                _id : uuid.v4(),
                poster : updatedData[i].poster,
                comment : updatedData[i].comment
            }
            recipeComment.push(newComment);
        }
        
        
        let updateCommand = {
            $set:recipeComment
        };
        const query = {
            _id : id
        };
         await Rcoll.updateOne(query,updateCommand);
         return await recipeData.getRecipeById(id);
         */
         
        



    },

    async updateComment(id, updatedComment) {
        if(!id) 
            throw "You must provide an ID";
        if(!updatedRecipe) 
            throw "There must be some update in the comment";
        const rCollection = await recipe();

        const updateCommentInfo = {};

        if(updatedComment.poster) {
            updatedCommentInfo.poster = updatedComment.poster;
        }

        if(updatedComment.comment) {
            updatedCommentInfo.comment = updatedComment.comment;
        }

        let updateCommand = {
            $set:updatedCommentInfo
        };
        const query = {
            _id:id
        };
        await rCollection.updateOne(query,updateCommand);
        return await this.getCommentById(id);
    },
};



module.exports = exportedMethods;

