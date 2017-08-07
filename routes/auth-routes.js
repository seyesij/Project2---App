const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
//import auth
const authHelpers = require('../services/auth/auth-helpers');
//import users controller
const usersController = require('../controllers/users-controller');

//All auth routes
authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/login');
});

authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register');
});

authRouter.post('/register', usersController.create);

authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/shows',
    failureRedirect: '/auth/login',
    failureFlash: true,
  })
);

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRouter;
