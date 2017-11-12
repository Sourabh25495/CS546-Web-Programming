let express = require("express");
let bodyParser = require("body-parser");
const Handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const cookieParser = require('cookie-parser')
// const static = express.static(__dirname + "/public");
// const server = express.static(__dirname + "/public");
let app = express();
app.use('/public', express.static(__dirname + '/public'));

const configureRoutes = require("./routes")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
  

configureRoutes(app);
//let configRoutes = require("./routes");
//configRoutes(app);

app.listen(3000, function(){
    console.log("Server running on port 3000...");
})
