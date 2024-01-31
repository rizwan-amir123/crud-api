/*
const express = require('express');
const router = express.Router();

const express = require("express");
const router = require("./api/router");
const mongoose = require("mongoose");
const cors = require("cors");

const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const LocalStrategy = require('passport-local').Strategy;
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const session = require('express-session');

const dotenv = require("dotenv");
dotenv.config();

const PORT = 8080;
const app = express();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
});

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
})
//const res = require('./api/router.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

// Configure session
app.use(session({ secret: 'T8oQ65gNRG(egC5a<mp_', resave: true, saveUninitialized: true }));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

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

// Google authentication strategy
passport.use(new GoogleStrategy({
  clientID: 'your-google-client-id',
  clientSecret: 'your-google-client-secret',
  callbackURL: '/auth/google/callback'
},
function (accessToken, refreshToken, profile, done) {
  // You can store user data in your database here
  return done(null, profile);
}));


// Serialize and deserialize user for session management
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  const user = users.find(u => u.id === id);
  done(null, user);
});


// Generate JWT token
function generateToken(user) {
  const payload = { id: user.id, username: user.username, email: user.email };
  const secretKey = 'your-secret-jwt-key';
  const options = { expiresIn: '1h' }; // Set the expiration time as needed

  return jwt.sign(payload, secretKey, options);
}

// Route to start GitHub authentication
app.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

// Callback route after GitHub has authenticated the user
app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  function (req, res) {
     // Successful authentication, redirect home.
    //const username = req.user.username || req.user.displayName || req.user.email;
    console.log(req.user);
    // Successful authentication, generate JWT token and redirect home.
    const token = generateToken(req.user);
    res.cookie('jwt', token); // Set the token as a cookie
    res.redirect('/');
    console.log("success");
  });

// Route to start Google Sign-In
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback route after Google has authenticated the user
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function (req, res) {
    // Successful authentication, generate JWT token and redirect home.
    const token = generateToken(req.user);
    res.cookie('jwt', token); // Set the token as a cookie
    res.redirect('/');
  });

/*
app.use('/api/', res);
app.use('/api/task', res);
app.use('/api/task/pending', res);
app.use('/api/task/late', res);
app.use('/api/task/processing', res);
app.use('/api/task/notassigned', res);
app.use('/api/task/done', res);
app.use('/api/task/:taskID', res);

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});


module.exports = app;
*/
