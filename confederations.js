module.exports = function (app) {

  var net = require('net')
    , fs  = require('fs')
    , socket_path
    , server;

  socket_path = './tmp/confederations.sock';

  if (fs.existsSync(socket_path)) {
    fs.unlinkSync(socket_path);
  }

  server = net.createServer(function (c) {
    console.log('server connected');
    c.on('end', function () {
      console.log('server disconnected');
    });
    c.write('hello\r\n');
    c.pipe(c);
  });

  server.listen(socket_path, function () {
    console.log('Confederation socket up!');
  });

};
