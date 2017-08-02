require('isomorphic-fetch');
// require('dotenv').config();

function getPopularShows(req, res, next) {
  fetch('https://www.episodate.com/api/most-popular?page=2$')
    .then((fetchRes) => {
      return fetchRes.json();
    }).then((jsonFetchRes) => {
      console.log(jsonFetchRes);
      console.log(jsonFetchRes.tv_shows);
      // adding properties to res.locals
      res.locals.title = jsonFetchRes.tv_shows.name;
      res.locals.country = jsonFetchRes.tv_shows.country;
      res.locals.network = jsonFetchRes.tv_shows.network;
      res.locals.status = jsonFetchRes.tv_shows.status;
      res.locals.picture = jsonFetchRes.tv_shows.country.image_thumbnail_path
      next();
    }).catch((err) => {
      console.log(err);
      // in case there's an error in the API call, we don't want to just
      // display an error on the page... this helps the app stay functional
      res.locals.title = 'Coming Soon!';
      res.locals.country = null;
      res.locals.network = null;
      res.locals.status = null;
      res.locals.picture = null
      next();
    });
}

module.exports = {
  getPopularShows,
}
