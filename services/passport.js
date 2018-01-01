/**
 * Passport Configuration and Strategy setup.
 * @author Grey <vapurrmaid@gmail.com>
 * @requires passport
 * @todo - register a fb developer account, the keys are currently empty
 */
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
// const FacebookStrategy = require('passport-facebook').Strategy
const User = require('../models').User
const Keys = require('../config/keys')

/// //////////////////////////////////////////////////////////////
// Passport Session Configuration
/// //////////////////////////////////////////////////////////////

// if authentication succeeds (via any passport strategy), setup cookies
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// subsequent requests need to deserialize cookie to authenticate user
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id)
    .catch((err) => {
      return done(err)
    })
  return done(null, user)
})

/// //////////////////////////////////////////////////////////////
// Google Oauth 2.0 Strategy
/// //////////////////////////////////////////////////////////////

/**
 * Configuration options used by Google Strategy.
 * Provides Credentials.
 * @typedef {Object} GoogleOption
 * @property {String} clientID - Google Credential
 * @property {String} clientSecret - Google Credential
 * @property {String} callbackUrl - Url Google sends back to in our application
 * @constant {GoogleOption}
 */
const googleOptions = {
  clientID: Keys.googleClientID,
  clientSecret: Keys.googleClientSecret,
  callbackURL: 'http://localhost:8081/auth/google/callback'
}

/*
 * Setup Google OAuth 2.0 Strategy
 */
passport.use(new GoogleStrategy(googleOptions, async (accessToken, refreshToken, profile, done) => {
  // see if user exists - if they do, return their model
  const existingUser = await User.findOne({where: { googleProfile: profile.id }})
    .catch((err) => {
      return done(err)
    })
  if (existingUser) return done(null, existingUser)

  // else - create a new user/initialize in db
  else {
    console.log('Testing Google OAuth 2.0', profile) // TESTING
    const user = await User.create({ googleProfile: profile.id })
      .catch((err) => {
        return done(err)
      })
    return done(null, user)
  }
}))

/// //////////////////////////////////////////////////////////////
// passport-facebook Strategy
/// //////////////////////////////////////////////////////////////

/**
 * Configuration options used by Facebook Strategy.
 * Provides Credentials.
 * @typedef {Object} FacebookOption
 * @property {String} clientID - Facebook Credential
 * @property {String} clientSecret - Facebook Credential
 * @property {String} callbackUrl - Url Facebook sends back to in our application
 * @constant {FacebookOption}
 */
// const facebookOptions = {
//   clientID: Keys.fbClientID,          // @todo - this is currently empty
//   clientSecret: Keys.fbClientSecret,  // @todo - this is currently empty
//   callbackURL: 'http://localhost:3000/auth/fb/callback'
// }

/*
 * Setupt Facebook Oauth 2.0 Strategy
 */
// passport.use(new FacebookStrategy(facebookOptions, async (accessToken, refreshToken, profile, done) => {
//   // see if user exists - if they do, return their model
//   const existingUser = await User.findOne({where: { facebookProfile: profile.id }})
//     .catch((err) => {
//       return done(err)
//     })
//   if (existingUser) return done(null, existingUser)

//   // else - create a new user/initialize in db
//   else {
//     console.log('Testing Facebook OAuth 2.0', profile) // TESTING
//     const user = await User.create({ facebookProfile: profile.id })
//       .catch((err) => {
//         return done(err)
//       })
//     return done(null, user)
//   }
// }))
