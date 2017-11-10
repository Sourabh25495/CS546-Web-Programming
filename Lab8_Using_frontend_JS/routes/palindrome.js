let express = require("express");
let router = express.Router();
//let data = require("../data");
//let palindrome = data.palindrome;


let palindromeList = []
let notPalindromeList = []



  router.get("/", (req, res) => {
    res.sendFile(__dirname + '/main.html');
  });

  

module.exports = router;