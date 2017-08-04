const express = require('express');
const showRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const showsController = require('../controllers/shows-controller');

showRoutes.get('/', authHelpers.loginRequired, showsController.index);
showRoutes.post('/', authHelpers.loginRequired, showsController.create);

showRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
  res.render('shows/show-add');
  });

showRoutes.get('/:id', authHelpers.loginRequired, showsController.show);
showRoutes.get('/:id/edit', authHelpers.loginRequired, showsController.edit);
showRoutes.put('/:id', authHelpers.loginRequired, showsController.update);
showRoutes.delete('/:id', authHelpers.loginRequired, showsController.delete);

module.exports = showRoutes;
