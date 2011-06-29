var utils = require("./utils");
var client = require("./node_modules/node-redis").createClient();

/**
 * Generates the events feed.
 *
 * This function pulls the events feeds out of a cache and
 * responds with the data in the cache.
 */
function events_feed(response, request) {

//var now = new Date();
//var timestamp = parseInt(now.getTime() / 1000)

  client.get('events', function(error, value) {
    if (!error) {
      response.writeHead(200, {"Content-Type": "text/html"}); // text/json
      response.write(value);
      response.end();
    } else {
      utils.logger('events_feed', 'error', 'ERR', error, request);
      response.writeHead(500, {'Content-Type': 'text/html'});
      response.write("500 Server Error");
      response.end();
    };
  });
}
exports.events_feed = events_feed

