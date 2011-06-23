
/**
 * Logs things
 *
 * Usage: 
 *
 * utils.logger('function_name', 'log_name', 'STATUS', 'message', request);
 */
function logger(func_name, log_name, code, message, request) {
  var now = new Date();
  var timestamp = parseInt(now.getTime() / 1000)
  if (!request) {
    ip = '127.0.0.1';
  } else {
    ip = request.connection.remoteAddress;
  };
  var log_msg = func_name + ':' + log_name + ':' + timestamp + ':' + ip + ':' + code + ':' + message;
  console.log(log_msg);
}

exports.logger = logger

