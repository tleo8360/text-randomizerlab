var http = require('http');
var sloths = require('./sloths');


http.createServer(function(request,response) {
  var chosenString = sloths[Math.floor(Math.random() * sloths.length)];

  response.writeHead(200,{'Content-type':"text/plain"});
  response.write(chosenString);
  response.end();
}).listen(8888);
