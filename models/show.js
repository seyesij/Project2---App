const db = require('../db/config');

const Show = {};

// Show.findUserShows = (id) => {
//    return db.manyOrNone(
//     `SELECT shows.title, shows.genre, shows.country, shows.network, shows.status
//     FROM shows
//     JOIN users_shows ON shows.id = users_shows.show_id
//     JOIN users ON users.id = users_shows.user_id
//     WHERE users.id = $1`, [id]
//     );
// }

Show.findUserShows = id => {
  return db.manyOrNone(`
    SELECT * FROM shows
    WHERE user_id = $1
  `, [id]);
};

Show.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM shows
    WHERE id = $1
  `, [id]);
}

Show.create = (show, userid) => {
  return db.one(`
    INSERT INTO shows
    (title, genre, country, network, status, user_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
  `, [show.title, show.genre, show.country, show.network, show.status, userid]);
}

Show.update = (show, id) => {
  return db.one(`
    UPDATE shows SET
    title = $1,
    genre = $2,
    country = $3,
    network = $4,
    status = $5
    WHERE id = $6
    RETURNING *
  `, [show.title, show.genre, show.country, show.network, show.status, id]);
}

Show.destroy = (id) => {
  return db.none(`
    DELETE FROM shows
    WHERE id = $1
  `, [id]);
}

module.exports = Show;




