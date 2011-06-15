var sys = require("sys");
var exec = require("child_process").exec;

function events_feed(response, request) {
  var command = 'redis-cli -h localhost -p 6379 GET events';
  exec(command, { timeout: 10000, maxBuffer: 20000*1024 },
    function (error, stdout, stderr) {
      response.writeHead(200, {"Content-Type": "text/json"});
      var obj = {
        'events': stdout,
      };
      response.write(JSON.stringify(obj));
      response.end();
    });
}

exports.events_feed = events_feed

