var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}

handle["/events/.json"] = requestHandlers.events_feed;

server.start(router.route, handle);
