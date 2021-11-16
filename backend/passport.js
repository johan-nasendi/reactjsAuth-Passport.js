const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");


const GOOGLE_CLIENT_ID = "522367489216-502l3cunre8du4ln460gi9342lp0bvek.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "58f6cef1115abf5212f1";
GITHUB_CLIENT_SECRET = "e37c57476eed38972908d6f6519a5830c60d30c1";

FACEBOOK_APP_ID = "1739787092880959";
FACEBOOK_APP_SECRET = "2bc107a5fd86320002b165d664a74fe6";

passport.use(
    new GoogleStrategy({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        function(accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);
passport.use(
    new GithubStrategy({
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "/auth/github/callback",
        },
        function(accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);
passport.use(
    new FacebookStrategy({
            clientID: FACEBOOK_APP_ID,
            clientSecret: FACEBOOK_APP_SECRET,
            callbackURL: "/auth/facebook/callback",
        },
        function(accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);


passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});