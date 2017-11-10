let palindromeRoutes = require("./palindrome");

const constructorMethod = app => {
    app.use("/palindrome", palindromeRoutes);
  
    app.use("*", (req, res) => {
      res.redirect("/palindrome/static");
    });
  };

module.exports = constructorMethod;