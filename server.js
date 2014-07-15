var connect = require('connect');
var http = require('http');
var port = process.env.port || 1337;
var serveStatic = require('serve-static');


var connect = require('connect');
var http = require('http');

var app = connect();


app.use(serveStatic('public'));

// respond to all requests
/*
app.use(function(req, res) {
    res.end('Hello from Connect!\n');
});
*/

//create node.js http server and listen on port
http.createServer(app).listen(port);

