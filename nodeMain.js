/*debugger;*/


var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var dotenv = require('dotenv').config({ path: 'C:\\Users\\lucas\\Documents\\YTChatConfig.env' }/*Probably not needed, more secure?*/);
var port = 8080;

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
    } else if (req.url === '/favicon.ico') {
        fs.readFile(__dirname + '/favicon.ico', function (err, data) {
            if (err) { throw err; }
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.write(data);
            res.end();
            return;
        });
    }
}).listen(port);

console.log("Server now Running on Port " + port);
