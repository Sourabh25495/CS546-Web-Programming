let express = require("express");
let bodyParser = require("body-parser");
const Handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const cookieParser = require('cookie-parser');
const flash = require('connect-flash')
// const static = express.static(__dirname + "/public");
// const server = express.static(__dirname + "/public");
let app = express();


const configureRoutes = require("./routes")

const handlebarsInstance = exphbs.create({
	defaultLayout: 'main',
	helpers: {
		asJSON: (obj, spacing) => {
			if (typeof spacing === "number")
				return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));

			return new Handlebars.SafeString(JSON.stringify(obj));
		}
	},
	partialsDir: [
		'views/partials/'
	]
});


const rewriteUnsupportedBrowserMethods = (req, res, next) => {
	if (req.body && req.body._method) {
		req.method = req.body._method;
		delete req.body._method;
	}

	next();
};




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
  
app.use(flash()); 
app.use(cookieParser()); 
app.use('/public', express.static(__dirname + '/public'));

app.use(rewriteUnsupportedBrowserMethods);
app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');

configureRoutes(app);
//let configRoutes = require("./routes");
//configRoutes(app);

app.listen(3000, function(){
    console.log("Server running on port 3000...");
})
