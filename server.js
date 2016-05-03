module.exports = (port, path, callback) => {
  // make things easy
  let express = require('express');
  let app = express();
  let server = require('http').Server(app);
  let io = require('socket.io')(server);

  // server static files
  app.use(express.static('public'));
  // logging
  app.use(require('morgan')('combined'));

  server.listen(port, callback);
  return server;
};
