var http = require("http");

var options = {
    host: 'localhost',
    port: '8081',
    path: '/index.html'
 };
 
 // Callback function is used to deal with response
 var callback = function(response) {
    // Continuously update stream with data
    var body = '';
    response.on('data', function(data) {
       body += data;
    });nod
 
    response.on('end', function() {
       // Data received completely.
       console.log(body);
    });
 }
 // Make a request to the server
 var req = http.request(options, callback);
 req.end();
 