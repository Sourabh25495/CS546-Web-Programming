var express = require('express')
var router = express.Router()
 
router.get('/', function (req, res) {
    var data = [
        {
          "schoolName": "Stevens Institute of Technology",
          "degree": "Masters in Computer engineering",
          "favoriteClass": "CPE 593 DS and Algo",
          "favoriteMemory": "A time to remember was when I got a job at the school of business"
        },
        {
          "schoolName": "T.P. Bhatia College of science",
          "degree": "High School",
          "favoriteClass": "Chemistry",
          "favoriteMemory": "The night outs with friends."
        }
    ]
   
  res.send(data)
});

module.exports = router;