const express = require("express")
let app = express()

let configRoutes = require("./routes");

configRoutes(app);

app.listen(3000, ()=>{

    console.log("We now have a Server")
    console.log("routes will run at http://localhost:3000")

});