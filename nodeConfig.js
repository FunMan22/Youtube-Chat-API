/*debugger;*/
var http = require('http');
var fs = require('fs');
/*
fs.readFile('../YTChatConfig.json', function(err2, data2) {
    var APIData = data2;
});*/

http.createServer(function (req, res) {
    debugger;
    fs.readFile('../YTChatConfig.json', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        return res.end();
      });
}).listen(8081);

console.log("End");
