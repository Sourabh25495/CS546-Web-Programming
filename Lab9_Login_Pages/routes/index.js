let Routes = require("./routes");

const constructorMethod = app => {
    app.use("/login", Routes);

    app.use("*", (req, res)=> {
      res.sendStatus(404);
  })

  
   
  };

module.exports = constructorMethod;