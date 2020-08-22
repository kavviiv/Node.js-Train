var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})
app.get('/xxx', function (req, res) {
    res.send('Hello Hi');
 })

var server = app.listen(8081, function () {
})
