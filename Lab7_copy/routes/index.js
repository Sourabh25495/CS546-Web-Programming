var recipeRoutes = require("./recipes")

var commentRoutes = require("./comments");

const constructorMethod = (app) => {
    app.use("/recipes", recipeRoutes);
    app.use("/comments",commentRoutes);
    app.use("/comments/recipes", commentRoutes);

    app.use("*", (req, res) => {
        res.sendStatus(404);
    })
};

module.exports = constructorMethod;