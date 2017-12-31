/**
 * Entry point for Node serer. Most of this code was adapted from
 * bin/www of an express-generator application.
 * @see {@link https://github.com/sequelize/express-example/blob/master/bin/www} for an example.
 * @requires app {Express}
 * @requires models/index
 * @requires http
 */

const app = require('./app')
const debug = require('debug')('express-sequelize')
const http = require('http')
const models = require('./models')

/*
 * Dynamic Port Bindidng from environment, store in Express App
 * We either get from ENV (production) or set dev port to 8081
 */

const port = normalizePort(process.env.PORT || 8081)
app.set('port', port)

/*
 * Create HTTP Server
 */
const server = http.createServer(app)

/*
 * Initialize the Database and listen on the port
 */
models.sequelize.sync().then(function () {
  server.listen(port, function () {
    debug('Express server listening on port ' + server.address().port)
  })

  server.on('error', onError)
  server.on('listening', onListening)
})

/**
 * Normalize port into a number, string, or false.
 * Written by express-generator
 * @param {Num} val - An integer Port value
 * @returns {Num|String|false} Integer of the port, the port name or false if invalid
 */
function normalizePort (val) {
  let port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port is a number
    return port
  }

  return false
}

/**
 * Handler for  http server 'error' events.
 * Written by express-generator
 * @param {Object.<Event>} error - An http error object
 */
function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 * Written by express-generator
 */
function onListening () {
  var addr = server.address()
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  debug('Listening on ' + bind)
}
