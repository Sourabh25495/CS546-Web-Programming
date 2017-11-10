let express = require("express");
let bodyParser = require("body-parser");
const Handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const static = express.static(__dirname + "/public");
const server = express.static(__dirname + "/public");


//Initialize app
let app = express();


// const handlebarsInstance = exphbs.create({
//     defaultLayout: "main",
    
//     helpers: {
//       asJSON: (obj, spacing) => {
//         if (typeof spacing === "number")
//           return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));
  
//         return new Handlebars.SafeString(JSON.stringify(obj));
//       }
//     }
//   });

  
  // const rewriteUnsupportedBrowserMethods = (req, res, next) => {
   
  //   if (req.body && req.body._method) {
  //     req.method = req.body._method;
  //     delete req.body._method;
  //   }
  
   
  //   next();
  // };
  
app.use("/public", static);
//Body Parser Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended : false}));
// app.use(rewriteUnsupportedBrowserMethods);

// app.engine("handlebars", handlebarsInstance.engine);
// app.set("view engine", "handlebars");

//Configure Routes
let configRoutes = require("./routes");
configRoutes(app);

app.listen(3000, function(){
    console.log("Server running on port 3000...");
})

