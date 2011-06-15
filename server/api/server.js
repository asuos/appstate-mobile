var http = require("http");
var url = require("url");
var querystring = require("querystring");

function start(route, handle) {
  http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    route(pathname, handle, response, request);
  }).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
