let express = require("express");
let router = express.Router();
const passport = require('passport');


// router.get("/",function(req,res){
//    res.send("HII");
// });

let configureRoutes = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    
app.get('/', (req, res) => {
    if(req.isAuthenticated()){
       res.redirect('/private')
    }else{
        res.redirect('/login')
    }
})


}





module.exports = configureRoutes;