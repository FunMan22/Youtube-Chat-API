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
            if (err){ throw err; }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data + process.env.API_KEY + ', ' + process.env.CLIENT_ID + ', ' + process.env.CLIENT_SECRET + '</div></body></html>'); 
            res.end();
            return;
        });
    } else if (req.url === '/js/main.js') {
        fs.readFile(__dirname + '/js/main.js', function (err, data) {
            if (err) { throw err; }
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
            return;
        });
    } else if (req.url === '/img/favicon.ico') {
        fs.readFile(__dirname + '/img/favicon.ico', function (err, data) {
            if (err) { throw err; }
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.write(data);
            res.end();
            return;
        });
    } else if (req.url === '/css/main.css') {
        fs.readFile(__dirname + '/css/main.css', function (err, data) {
            if (err) { throw err; }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
            return;
        });
    } else if (req.url === '/js/youtube.js') {
        fs.readFile(__dirname + '/js/youtube.js', function (err, data) {
            if (err) { throw err; }
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
            return;
        });
    } else if (req.url === '/img/youtube%20logo.png') {
        fs.readFile(__dirname + '/img/youtube logo.png', function (err, data) {
            if (err) { throw err; }
            res.writeHead(200, { 'Content-Type': 'img/png' });
            res.write(data);
            res.end();
            return;
        });
    } else if (req.url === '/img/youtube%20banner.png') {
        fs.readFile(__dirname + '/img/youtube banner.png', function (err, data) {
            if (err) { throw err; }
            res.writeHead(200, { 'Content-Type': 'img/png' });
            res.write(data);
            res.end();
            return;
        });
    } else {
        res.writeHead(404);
        res.end();
        return;
    }
}).listen(port);

console.log("Server now Running on Port " + port);
