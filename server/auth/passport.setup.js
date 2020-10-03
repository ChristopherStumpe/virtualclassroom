// Import passport and Google OAuth 2.0
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

passport.serializeUser(function(user, done) {
  // console.log("!!!seralize!!", user)
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  // find user in db and entire user
  // console.log("!!!de-seralize!!", user)
  done(null, user);
});

// defining how passport will use google strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `http://localhost:${process.env.SERVER_PORT}/auth/google/callback`
  },
  (accessToken, refreshToken, profile, done) => {
    // accessToken, and refreshToken can be used for additional google products
    // use the profile info (profile id) to check if the user is registered in the db
    // if the user doesn't exists, save to db, else selected the user and pass them to the done function
    // signal that this is done
    // console.log("!!! instance of google profile!!", profile.id);
    return done(null, profile);
  }
));