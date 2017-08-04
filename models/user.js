const db = require('../db/config');

const User = {};

User.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [userName]);
};

User.create = user => {
  return db.one(`
    INSERT INTO users
    (username, email, password_digest, firstname, lastname)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [user.username, user.email, user.password_digest, user.firstname, user.lastname]);
};

// User.findUserShows = (id) => {
//   return db.manyOrNone(
//     `SELECT shows.title, shows.genre, shows.country, shows.network, shows.status
//     FROM shows
//     JOIN users_shows ON shows.id = users_shows.show_id
//     JOIN users ON users.id = users_shows.user_id
//     WHERE users.id = $1`, [id]
//     );
// };


module.exports = User;
