var express = require('express')
var router = express.Router()
 
router.get('/', function (req, res) {
    var data = {
        "name": "Sourabh Kulkarni",
        "biography": "My name is Sourabh. I am from Mumbai, India. I am 22 years old and this is my last semester at stevens. I am pursuing my Concentration as software engineering with subjects like Python, Java, Agile methods for software development, Data structure and algorithms and Web development. With these subjects, I have a full understanding of the full lifecycle of a software development project. I am also learning android development and I have done a few projects on android. Apart from this, I love to swim and sing.",
        "favoriteShows": ["How I met your mother", "TMKOC", "Friends", "TKSS"],
        "hobbies": ["Coding", "Swimming", "Singing"]
      }

   
  res.send(data)
});

module.exports = router;
 
