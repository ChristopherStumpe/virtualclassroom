// Import passport and Google OAuth 2.0
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

passport.serializeUser(function (user, done) {
  // console.log("!!!seralize!!", user)
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  // find user in db and entire user
  let log = 0;
  const data = {
    id: user.id,
    fullName: user.displayName,
    lastName: user.name.familyName,
    firstName: user.name.givenName,
    email: user.emails[0].value,
    photo: user.photos[0].value,
  };
  console.log(log === 0 ? "logged in" : "logged out");
  log === 0 ? (log = 1) : (log = 0);
  // console.log("!!!de-seralize!!", data);
  done(null, user);
});

// defining how passport will use google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `http://localhost:${process.env.SERVER_PORT}/auth/google/callback`,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("access token: ", accessToken, "refresh token", refreshToken);
      // accessToken, and refreshToken can be used for additional google products
      // use the profile info (profile id) to check if the user is registered in the db
      const data = {
        id: profile.id,
        fullName: profile.displayName,
        lastName: profile.name.familyName,
        firstName: profile.name.givenName,
        email: profile.emails[0].value,
        photo: profile.photos[0].value,
      };
      // if the user doesn't exists, save to db, else selected the user and pass them to the done function
      // signal that this is done
      console.log("!!! instance of google profile!!", data);
      return done(null, profile);
    }
  )
);
