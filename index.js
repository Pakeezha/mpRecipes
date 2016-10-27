var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var counter = 0;
app.get('/', function (req, res) {
    res.send('/login');
    counter++;
});

app.use(express.static('public'));

app.listen(port, function () {
    console.log('Example app listening on port' + port);
});
