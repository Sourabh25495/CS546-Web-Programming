
const mongoCollections = require("../config/mongoCollections");
const recipe = mongoCollections.recipes;

const uuid = require("node-uuid");

const exportedMethods = {
    async getAllRecipes() {
        const recipeCollection = await recipe();
        const allRecipes = await recipeCollection.find({}).toArray();
        return allRecipes;
    },
    async getRecipes() {
        const result_list = [];
        const recipeCollection = await recipe();
        const all = await this.getAllRecipes();
        for(let i = 0;i<all.length;i++) {
            var result = {
                _id : all[i]._id,
                title: all[i].title
            }
            result_list.push(result);
        }
        //console.log("all-",all);
        //console.log("details-",result_list);
        return result_list;
    },
    async getRecipeByTitle(title) {
        if(!title) 
            throw "You must provide a Title";

        const recipeCollection = await recipe();
        const recipeByTitle = await recipeCollection.find({title:title}).toArray();
        return recipeByTitle;
    },
    async getRecipeById(id) {
        if(!id) 
            throw "You must provide an ID"
        const recipeCollection = await recipe();
        const recipeByID = await recipeCollection.findOne({_id:id});

        if(!recipeByID) throw "Recipe not found";
        return recipeByID;
    },
    async addRecipes(title,ingredients,steps,comments) {

        console.log("title : "+title);
        console.log("HI")
       if(!title) 
            throw "You must provide a Title";
        if(!ingredients) 
            throw "You must provide Ingredients";
        if(!steps) 
            throw "You must provide Steps";
        
        console.log("hello")
        let recipeCollection = await recipe();
        console.log("ata??")
        
        let newRecipe = {
            _id : uuid.v4(),
            title : title,
            ingredients : ingredients,
            steps : steps,
            comments : comments
        };
        //console.log("kay hotay")

        let insertRecipe = await recipeCollection.insertOne(newRecipe);
        /*if(insertRecipe.insertedCount == 0) throw "Could not add recipe";

        const Nrecipe = await this.getRecipeById(newrecipeID);
        return Nrecipe;*/
        let newId = insertRecipe.insertedId;
        newInsertedRecipe = await this.getRecipeById(newId);
        return newInsertedRecipe;
    },
    async deleteRecipe(id) {
        if(!id) throw "You must provide an ID";
        const recipeCollection = await recipe();
        const removeRecipe = await recipeCollection.removeOne({_id:id});
        if(removeRecipe.deletedCount == 0) {
            throw "Could not delete the recipe with id - ${id}";
        }
    },
    async updateRecipe(id, updatedRecipe) {
        if(!id) throw "You must provide an ID";
        if(!updatedRecipe) throw "There must be some update in the recipe";
        const recipeCollection = await recipe();

        let updateCommand = {
            $set:updatedRecipe
        };
        const query = {
            _id:id
        };
        let myRecipe = await recipeCollection.updateOne(query,updateCommand);
        //newUpdatedrecipe = await this.getRecipeById(id);
        return myRecipe;
    },







    async getCommentById(id) {
        console.log("You are in commentby ID");
        if(!id) throw "You must provide an ID";
            const recipeCollection = await recipe();
            const commentByID = await recipeCollection.findOne({_id:id})
            //console.log(commentByID);
            if(!commentByID) throw "Comment not found";
            return commentByID;
    },

    async addComment(recipe1,poster,comment) {
        if(!poster) throw "You must provide the name of poster";
        if(!comment) throw "You must provide a comment";
        //if(!commentData) throw "You must provide a comment info";

        const recipeCollection = await recipe();
        let newcommentID = uuid.v4();
        
        let newComment = {
            _id : newcommentID,
            poster:poster,
            comment:comment
        };
        console.log("data-",newComment);
        //recipe1.comments.push(newComment);
        await recipeCollection.update({_id:recipe1._id},{$addToSet: { comments: newComment }});
        return newComment;
        //const NrecipeComment = await this.getCommentById(recipe1._id,newComment._id);
        //return NrecipeComment;
    },

    async commentsForRecipe(id){
        //console.log("hi");
       recipeCollection = await recipe();
       
       const specifiedRecipe = await this.getRecipeById(id);
       myComments = specifiedRecipe.comments;
       //console.log(myComments[0]._id);
       let recipeComment=[];
       for(let i=0;i<myComments.length; i++){
           let commentRecipe ={
               _id: myComments[i]._id,
               recipeID: specifiedRecipe._id,
               recipeTitle: specifiedRecipe.title,
               poster: myComments[i].poster,
               comment: myComments[i].comment

           }
           //recipeComment.push(commentRecipe)

       }
       console.log(recipeComment)
       return recipeComment
    },
    async deleteComment(id) {
        if(!id) throw "You must provide an ID";
        console.log(id)
        const recipeCollection = await recipe();
        const removeComment = await recipeCollection.update({},{$pull:{comments:{_id:id}}},{multi:true});
       
        
        console.log("Comment deleted")


        
        //console.log(removeComment)
        if(removeComment.deletedCount == 0) {
            throw "Could not delete the comment with id - ${id}";
        }
        return removeComment;
    },
    async updateComment(Rid,Cid,updatedComment) {
        if(!Rid) throw "You must provide an ID";
        if(!Cid) throw "You must provide an ID";
        if(!updatedComment) throw "There must be some update in the recipe";
        
        const recipeCollection = await recipe();

        //console.log(Rid)
        //console.log(Cid)
        //console.log(updatedComment)
        const updateCommentInfo = {};
        //console.log(updateCommentInfo)
        /*
        if(updatedComment.poster) {
            updatedCommentInfo.poster = updatedComment.poster;
        }

        if(updatedComment.comment) {
            updatedCommentInfo.comment = updatedComment.comment;
        }
        */
        if (updatedComment.poster) {
            updateCommentInfo.poster = updatedComment.poster;
        }
        
        if (updatedComment.comment) {
            updateCommentInfo.comment = updatedComment.comment;
        }

 
        //console.log(updateCommand)
        /*const query = {
            _id:Rid
        };*/
        //console.log("hi")
        const updateC = await recipeCollection.updateOne({_id:Rid,"comments._id":Cid},
        {$set:{"comments.$.poster":updateCommentInfo.poster,"comments.$.comment":updateCommentInfo.comment}});
        if (updateC.modifiedCount == 0) {
            throw "Could not update comment successfully!";
        }
        return await this.getCommentById(Cid);
    },

    async getCommentById(id) {
        
        if(!id) throw "You must provide an ID";
        const recipeCollection = await recipe();
        const commentByID = await recipeCollection.findOne({"comments._id":id},{"comments.$":1,_id:id});
        const recipe_det = await this.getRecipeById(commentByID._id);
        //console.log(commentByID);
        const comment_Info = {
            _id:commentByID.comments[0]._id,
            recipeId:commentByID._id,
            recipeTitle:recipe_det.title,
            poster:commentByID.comments[0].poster,
            comment:commentByID.comments[0].comment
        };
       
        if(!commentByID) throw "Comment not found";
        
        return comment_Info;
    },

};


module.exports = exportedMethods;