'use strict'
const app = require('../src/app');
const debug = require('debug')('gerador:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

const server = http.createServer(app);

server.listen(port);

server.on('listening', onListening);

function normalizePort(val) {
    let port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  }
  
  function onListening() {
    let addr = server.address();
    let bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }
  