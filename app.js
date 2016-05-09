var http = require('http');
var returnModule = require('./modules/return.js');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(returnModule.message() + returnModule.dollars());
  res.end();
}).listen(3000);

console.log('listening on port 3000');
