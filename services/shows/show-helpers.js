require('isomorphic-fetch');
// require('dotenv').config();

function getPopularShows(req, res, next) {

  let pageNumber = req.query.page || 1;
  // const button = document.querySelector('.next');
  // button.addEventListener('click', () => {
  //   pageNumber++;
  // })
  fetch(`https://www.episodate.com/api/most-popular?page=${pageNumber}$`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
      //console.log(jsonRes.tv_shows);
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
