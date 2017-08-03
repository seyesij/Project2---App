require('isomorphic-fetch');
// require('dotenv').config();

function getSearchedShow(req, res, next) {
  let showName = req.query.q;

  fetch(`https://www.episodate.com/api/search?q=${showName}$`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
      //console.log(jsonRes.tv_shows);
      res.locals.show = jsonRes.tv_shows;
      res.locals.name = showName;
      return next();
    }).catch(err => {
      console.log(err);
      return next();
    })
}

module.exports = {
  getSearchedShow,
}

// https://www.episodate.com/api/search?q=:search&page=:page
// https://www.episodate.com/api/search?q=arrow
