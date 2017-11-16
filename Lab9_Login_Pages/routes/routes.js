let express = require("express");
let router = express.Router();
const passport = require('passport');


const LocalStrategy = require('passport-local').Strategy;
const path = require('path');
users = require('../data/');


let configurePassport = (passport) => {
    
        passport.use(new LocalStrategy(
            (username, password, done) => {
                let res = users.matchPassword(username, password);
    
                if (res.status)
                    return done(null, res.message);
    
                return done(null, false, {
                    message: res.message
                });
            }
        ));

        passport.serializeUser((user, done) => {
            done(null, user);
        });
    
        passport.deserializeUser((user, done) => {
            let auth = user.split(' ');
            if (auth.length != 2)
                return done(null, false, {
                    message: "Cookie is not valid"
                });
    
            let username = auth[0];
            let password = auth[1];
    
            let res = users.matchPassword(username, password);
    
            if (res.status)
                return done(null, res.message);
    
            return done(null, false, {
                message: res.message
            });
        });
    }
    
    configurePassport(passport);


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
    if(!req.isAuthenticated()){
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

app.get('/private', (req,res) =>{

    if(req.isAuthenticated()){
        let username = req.user.split(' ')[0];
        let userInfo = users.checkUsername(username);
        res.render('private', {
            username: username,
            UserData: userInfo
        });
    } else {
        res.redirect('/login');
    }

})
}






module.exports = configureRoutes;