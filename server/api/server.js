var http = require("http");
var url = require("url");
var querystring = require("querystring");
var utils = require("./utils");

var port = 8888;

function start(route, handle) {
  http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    route(pathname, handle, response, request);
  }).listen(port);
  utils.logger('server', 'startup', 'OK', 'Server has started');
  utils.logger('server', 'listening', 'OK', 'Listening on port: ' + port);
}

exports.start = start;

