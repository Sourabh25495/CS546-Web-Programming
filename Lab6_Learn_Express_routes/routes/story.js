var express = require('express')
var router = express.Router()
 
router.get('/', function (req, res) {
    var data = {
        "storyTitle": "Time I got an F for hardly a reason",
        "story": "This was when I was in my second semester of my Undergraduate education. There was this professor who hated me for unknown reasons. Though I was a good student and really worked hard she failed me in a course just to satisfy her ego(may be). I had done pretty well in my finals and had got good grades but surprisingly got an F in physics. Later I asked for a justification and I was told that this was due to bad handwritting. I feel that this should not have happened to me as I had done well in the rest of the subjects.But later on, I went to clear that test and then did pretty well in my later half of my undergrad education. I cleared my B.E with a first class and got admitted to stevens later but the second semester of my undergrad education remains a dark spot through my journey till this day."
      }
   
  res.send(data)
});

module.exports = router;