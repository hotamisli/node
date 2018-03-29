var express = require('express');
var app = express();
//app.set('port', 3000);
app.get('/', function(req, res) {
    res.send('welcome to my homepage');
});
app.listen(3000, function() {
    console.log("my webpage is served on port ", app.get('port'));
});