let Routes = require("./routes");

const constructorMethod = app => {
    app.use("/", Routes);
  
   
  };

module.exports = constructorMethod;