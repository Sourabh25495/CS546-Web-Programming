const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const recipe = require("./recipes");
const uuid = require("node-uuid");

let exportedMethods = {
    getAllComments() {
        return recipes().then((commentCollection) => {
            return commentCollection
                .find({})
                .toArray();
        });
    },

    getCommentById(id) {
        return recipes().then((taskData) => {
              // let y = taskData.find({ 'comments._id': id }, { 'comments._id': 1, _id: 1, title: 1, 'comments.poster': 1, 'comments.comment': 1 }).toArray();
           let y = taskData.find({ 'comments._id': id }, { title: 1, comments: { $elemMatch: { _id: id } } }).toArray();
            return y;
        });
    },
    addComment(id,poster,comment) {
       return recipes().then((recipeCollection) => {
           
               return recipeCollection.updateOne({_id : id},{
                   $addToSet : {
                       comments : {
                          _id : uuid.v4(),
                           poster : poster,
                           comment : comment
                       }
                   }
               });
           
       });
    },
    removeComment(id) {
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
    updateComment(id, updatedComment) {
        return recipes().then((recipeCollection) => {
            let updatedCommentData = {};

            if (updatedComment.poster) {
                updatedCommentData.poster = updatedComment.poster;
            }

            if (updatedComment.comment) {
                updatedCommentData.comment = updatedComment.comment;
            }

            

            let updateCommand = {
                $set: updatedCommentData
            };

            return recipeCollection.updateOne({
                _id: id
            }, updateCommand).then((result) => {
                return this.getCommentById(id);
            });
        });
    },
}

module.exports = exportedMethods;