let palindromeRoutes = require("./palindrome");

const constructorMethod = app => {
    app.use("/", palindromeRoutes);
  
    app.use("*", (req, res) =>{
      res.status(404).json({error: "Not Found"})
    })
    // app.use("*", (req, res) => {
    //   res.redirect("/");
    // });
  };

module.exports = constructorMethod;