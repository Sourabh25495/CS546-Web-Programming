const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const static = express.static(__dirname + '/public');

const configRoutes = require("./routes");

const exphbs = require('express-handlebars');

const Handlebars = require('handlebars');

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
})

const rewriteUnsupportedBrowserMethods = (req, res, next) => {
 
    if (req.body && req.body._method) {
        req.method = req.body._method;
        delete req.body._method;
    }

    // let the next middleware run:
    next();
};

app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(rewriteUnsupportedBrowserMethods);

app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');

configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});