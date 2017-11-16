let Routes = require("./routes");

const constructorMethod = app => {
    app.use("/login", Routes);
  
   
  };

module.exports = constructorMethod;