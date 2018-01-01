/**
 * Express Router sub-module for handling authentication related requests
 * @author Grey <vapurrmaid@gmail.com>
 * @requires body-parser
 * @requires passport
 */
const bodyParser = require('body-parser')
const passport = require('passport')
require('../services/passport')
const AuthController = require('../controllers/authController')

/**
 * body-parser middleware, configured type application/x-www-form-urlencoded
 * @constant
 */
const urlencodedParser = bodyParser.urlencoded({ extended: false })

/**
 * Google-oauth20 middleware. If successful, receives Google profile and email.
 * @constant
 */
const requireGoogleSignIn = passport.authenticate('google', {
  scope: ['profile', 'email']
})

/**
 * Google-oauth20 middleware for Google's oauth callback route.
 * Used to redirect based upon sucess/failure.
 * @constant
 */
const requireGoogleCbSucces = passport.authenticate('google', {
  failureRedirect: '/login' // @todo - route doesn't exist
})

module.exports = (app) => {
  app.get('/auth/google', urlencodedParser, requireGoogleSignIn)
  app.get('/auth/google/callback', requireGoogleCbSucces, AuthController.test)
}
