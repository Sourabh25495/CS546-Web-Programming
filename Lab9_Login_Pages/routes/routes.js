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

app.get('/login', (req, res) => {
    if(!req.isAuthenticated){
        if(req.session.flash && req.session.flash.error){
            res.render('login', {
                error: true,
                message: req.session.flash.error.slice(-1)[0]
            });
            return
        }
            res.render('login',{
                error: false
            })
    }else{
        res.redirect('/private');
    }
})


}





module.exports = configureRoutes;