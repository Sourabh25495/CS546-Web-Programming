let express = require("express");
let router = express.Router();
let data = require("../data");
let palindrome = data.palindrome;

//router.get("/",function(req,res){
  //  res.send("HII");
//});
let palindromeList = []
let notPalindromeList = []

router.get("/static", (req, res) => {
    res.render("palindrome/static", {});
  });

  router.get("/server", (req, res) => {
    res.render("palindrome/server", {});
  });

  router.post("/server", (req, res)=>{
   
    let inputString = (req.body.palindrome).toLowerCase();     // take input from editText on browser
    inputString = inputString.replace(/[^0-9a-z\t]/gi, '');
    inputString = inputString.replace(/  +/g, '');
    console.log(inputString);
    let result;

    try{

      result = palindrome.palindrome(inputString);
      
      console.log(result)
      if(result){
        palindromeList.push(req.body.palindrome);
        console.log(palindromeList);
      }else{
        notPalindromeList.push(req.body.palindrome);
        console.log(notPalindromeList)
      }

    }catch(e){

      res.render("palindrome/server", {
        palindrome: inputString,
        error: e
      });
      return;

    }

    res.render("palindrome/server", {
      inputString: inputString,
      array: palindromeList,
      array1: notPalindromeList,
      result: result
    });
  });

module.exports = router;