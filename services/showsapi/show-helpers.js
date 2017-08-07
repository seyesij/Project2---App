require('isomorphic-fetch');

//Get Shows from API
function getPopularShows(req, res, next) {
  let pageNumber = req.query.page || 1;
  //if user searches show search result
  if (req.query.search) {
      fetch(`https://www.episodate.com/api/search?q=${req.query.search}$`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
      res.locals.show = jsonRes.tv_shows;
      res.locals.name = req.query.search;
      return next();
    }).catch(err => {
      console.log(err);
      return next();
    })
  }
  //else if user clicks on next button show next page
  fetch(`https://www.episodate.com/api/most-popular?page=${pageNumber}$`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
      res.locals.show = jsonRes.tv_shows;
      res.locals.page = pageNumber;
      return next();
    }).catch(err => {
      console.log(err);
      return next();
    })
}

module.exports = {
  getPopularShows,
}

