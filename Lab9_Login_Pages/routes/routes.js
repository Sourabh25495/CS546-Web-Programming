let express = require("express");
let router = express.Router();
const passport = require('passport');


router.get("/",function(req,res){
   res.send("HII");
});





module.exports = router;