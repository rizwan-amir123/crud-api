/*
const express = require("express");
const passport = require('passport');
const auth = express.Router();
const GitHubStrategy = require('passport-github2').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// GitHub authentication strategy
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: 'http:://localhost:8080/auth/github/callback'
  },
  function (accessToken, refreshToken, profile, done) {
    // You can store user data in your database here
    return done(null, profile);
  }));
  
  // Route to start GitHub authentication
  auth.get('/auth/github',
    passport.authenticate('github', { scope: ['user:email'] })
  );
  
  // Callback route after GitHub has authenticated the user
  auth.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    function (req, res) {
       // Successful authentication, redirect home.
      //const username = req.user.username || req.user.displayName || req.user.email;
      console.log("user:",req.user);
      // Successful authentication, generate JWT token and redirect home.
      const token = generateToken(req.user);
      res.cookie('jwt', token); // Set the token as a cookie
      res.redirect('/');
      console.log("success");
   });

   // Initialize Passport
app.use(passport.initialize());
app.use(passport.session());
   module.exports = auth;
   */