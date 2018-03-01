const express = require("express")
const app = express();


app.use(express.static(__dirname + '/public'));
app.get('/ajaxcall', function(req, res){
    var data = {
        id : 1,
        fname: 'sourabh',
        lname: 'kulkarni',
        email: 'skulkar6@stevens.edu',

    }

    res.send(data);
})
app.listen(3000)