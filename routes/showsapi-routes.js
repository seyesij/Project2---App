const express = require('express');
const showsapiRoutes = express.Router();

const authHelpers = require('../services/auth/auth-helpers');
const showHelpers = require('../services/showsapi/show-helpers');
const searchHelpers = require('../services/showsapi/search-helpers');
const showapiController = require('../controllers/showsapi-controller');

//All API routes
showsapiRoutes.get('/', showHelpers.getPopularShows, showapiController.index);
showsapiRoutes.get('/:id', searchHelpers.getSearchedShow, showapiController.show);


module.exports = showsapiRoutes;
