/**
 * Express application Setup.
 * @author Grey <vapurrmaid@gmail.com>
 * @requires express
 * @todo Wire in PassportJS
 * @todo Wire in Routes
 * @todo Wire in websockets/ws
 */

const express = require('express')
const logger = require('morgan') // debugging

/// ////////////////////////////////////////////////////
// App Creation
/// ////////////////////////////////////////////////////

/*
 * Create the Express App
 */
const app = express()

/*
 * Add Morgan Logger
 */
app.use(logger('dev'))

/// ////////////////////////////////////////////////////
// Pre-Route Middlewares
/// ////////////////////////////////////////////////////

/*
 * Initialize Passport with cookies session
 * @todo - reconfigure this depending on cookies/tokens
 */
// app.use(passport.initialize())
// app.use(passport.session());

/// ////////////////////////////////////////////////////
// Routes
/// ////////////////////////////////////////////////////

/*
 * Add all of the Routes
 */
// require('./routes/authRoutes')(app)

/// ////////////////////////////////////////////////////
// Post-Route Middlewares
/// ////////////////////////////////////////////////////

/*
 * Generic Catch-all middleware. Sends 422 with err message.
 * @requires middlewares/catchPost
 */
// app.use(catchPost);

/*
 * 404 Handler
 * @todo refactor into middlewares
 */
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

/*
 * Error handler - only leaks stacktraces in dev environment
 * @todo refactor into middlewares
 */
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  })
})

module.exports = app
