let aboutRoutes = require("./about.js")
let educationRoutes = require("./education.js")
let storyRoutes = require("./story.js")

var constructorMethod = function(app)
{
    app.use("/about",aboutRoutes)
    app.use("/education",educationRoutes)
    app.use("/story",storyRoutes)

    app.use("*", (req, res) => {
        res.status(404).json({error: "Not found"});
    });
}


module.exports = constructorMethod