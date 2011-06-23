var sys = require("sys");
var exec = require("child_process").exec;
var utils = require("./utils");


/**
 * Generates the events feed.
 *
 * This function pulls the events feeds out of a cache and
 * responds with the data in the cache.
 */
function events_feed(response, request) {

  var now = new Date();
  var timestamp = parseInt(now.getTime() / 1000)

  var command = 'redis-cli -h localhost -p 6379 GET events';

  exec(command, { timeout: 10000, maxBuffer: 20000*1024 },
    function (error, stdout, stderr) {
      if ( stderr ) {
        utils.logger('events_feed', 'stderr', 'ERR', stderr, request);
        response.writeHead(500, {'Content-Type': 'text/html'});
        response.write("500 Server Error");
        response.end();
      } else {;
        var obj = {
          'metadata': {
            'created': timestamp,
          },
          'events': stdout,
        };
        response.writeHead(200, {"Content-Type": "text/json"});
        response.write(JSON.stringify(obj));
        response.end();
        utils.logger('events_feed', 'stdout', 'OK', 'Responded with events', request);
      }
    });
}

exports.events_feed = events_feed

