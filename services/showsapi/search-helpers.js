require('isomorphic-fetch');
require('body-parser');
// require('dotenv').config();

function getSearchedShow(req, res, next) {
  let showName = req.params.id;
  fetch(`https://www.episodate.com/api/search?q=${showName}$`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
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

