/**
 * Express application Setup.
 * @author Grey <vapurrmaid@gmail.com>
 * @requires express
 * @todo Wire in websockets/ws
 */
const express = require('express')
const logger = require('morgan') // debugging
const session = require('express-session')
const passport = require('passport')
// const bodyParser = require('body-parser')
const Keys = require('./config/keys')
const sequelize = require('./models').sequelize
const SequelizeStore = require('connect-session-sequelize')(session.Store)

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
 * Initialize Express-Session
 */

/**
 * Configuration for express-session
 * @typedef {SessionConfig}
 * @property {Boolean} httpOnly - Set-Cookie HttpOnly attr
 * @property {?number} - Specifices ms to use when calculating Set-Cookie Expires attr
 * @property {String} path - Specifies the value for the Path Set-Cookie
 * @property {?Boolean} proxy - whether or not to trust proxy headers. Undefined leaves
 *   this to Express's configuration.
 * @property {Boolean} resave - @todo research this for pg store
 * @property {Boolean} saveUninitialized - @todo research this for pg store
 * @property {String} secret - Secret used to sign cookies
 * @property {Object.<Store>} store - session store instance. Defaults to Memory (leaky!)
 * @const {SessionConfig}
 */
const sessionConfig = {
  httpOnly: true,
  maxAge: null,
  path: '/',
  resave: false,
  sameSite: true,
  saveUninitialized: false,
  secret: Keys.cookieKey,
  secure: process.env.NODE_ENV === 'production',
  store: new SequelizeStore({
    db: sequelize
  })
}

app.use(session(sessionConfig))

/*
 * Initialize Passport with cookies session
 * Note: must always be done after express-session
 */
app.use(passport.initialize())
app.use(passport.session())

/// ////////////////////////////////////////////////////
// Routes
/// ////////////////////////////////////////////////////

/*
 * Add all of the Routes
 */
require('./routes/authRoutes')(app)

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
