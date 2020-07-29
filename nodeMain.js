/*debugger;*/


var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var dotenv = require('dotenv').config({ path: 'C:\\Users\\lucas\\Documents\\YTChatConfig.env' }/*Probably not needed, more secure?*/);

http.createServer(function(req, res) {
    if (req.url === '/') {
        fs.readFile(__dirname + '/index.html', function(err, data) {
            if (err){
                throw err;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data + process.env.API_KEY + '</div></body></html>'); 
            res.end();
            return;
        });
    } else if (req.url === '/main.js') {
        fs.readFile(__dirname + '/main.js', function (err, data) {
            if (err) { throw err; }
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
            return;
        });
    }
}).listen(8080);


/*var http = require('http');
var fs = require('fs');
var url = require('url');


http.createServer(function (req, res) {  
    var path = url.parse(req.url).pathname;
    path = path.normalize;
    if ((path = '/') || (path = '/index.html')) {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
          });
    }
    else {
        res.writeHead(404);
        res.write('<h1>We are sorry. The page you are looking for does not exist.</h1>');
        res.end();
    }
}).listen(8080);*/

/*var static = require('node-static');
var http = require('http');

var file = new(static.Server)();

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(8080);*/

console.log(process.env.API_KEY);
var API_KEY = process.env.API_KEY;

console.log("End");
