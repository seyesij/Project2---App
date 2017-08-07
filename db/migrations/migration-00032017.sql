-- \c shows_app_dev;

CREATE TABLE IF NOT EXISTS users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS shows
(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  genre VARCHAR(255),
  country VARCHAR(255),
  network VARCHAR(255),
  status VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS users_shows
(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  show_id INT REFERENCES shows(id)
);

ALTER TABLE shows
ADD COLUMN user_id INTEGER REFERENCES users(id);
