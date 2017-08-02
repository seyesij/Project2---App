const db = require('../db/config');

const Show = {};

Show.findAll = () => {
  return db.query('SELECT * FROM shows');
}

Show.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM shows
    WHERE id = $1
  `, [id]);
}

Show.create = (show) => {
  return db.one(`
    INSERT INTO shows
    (title, genre, country, network, status)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [show.title, show.genre, show.country, show.network, show.status]);
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




