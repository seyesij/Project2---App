# Series Junkie
https://seriesjunkie.herokuapp.com/

![Image of Screenshot](https://github.com/seyesij/Project2-App/blob/master/appscreenshot.png)

## What is Series Junkie?

> This is a TV Series Web App for tv lovers, where you can find information about different tv shows!

## Technical Discussion

> Created with HTML/EJS, CSS, Javascript, SQL, PG-PROMISE, Node, Express

### Notes on Game Structure

> Code samples
- function getSearchedShow(req, res, next) {
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
 - User.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [userName]);
};

- showapiController.index = (req, res) => {
      res.render('shows/show-index', {
        currentPage: 'index',
        message: 'ok',
        data: res.locals.show,
        pageNumber: res.locals.page,
        showName: res.locals.name,
      })
};

> Description of challenges you overcame, etc.
- Some functionalities were quite difficult to figure out for example, saving information into join tables from the frontend (making a watchlist for each user and being able to "add to watchlist" on the click of a button). Using an API and getting it to work how I want it to was also quite challenging. 

## Opportunities for Future Growth

> If you had more time to work on your game, what would you do?
-	Add a watchlist
-	Find a better API with more information on shows
- Figure out a way to make the nav different when a user logs in vs when not logged in
- Add tv show trailers


