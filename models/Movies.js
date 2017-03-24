var db = require('../dbconnection');

var Movie = {

  getAllMovies: function(callback) {
      return db.query('SELECT * FROM movies', callback);
  },

  getMovieById: function(id, callback) {
    return db.query('SELECT * FROM movie WHERE id=?', [id], callback);
  },

  addMovie: function(Movie, callback) {
    return db.query('INSERT INTO movies values(?,?,?,?)', [Movie.id, Movie.title, Movie.diretor, Movie.genre], callback);
  },

  updateMovie: function(id, Movie, callback) {
    return db.query('UPDATE movie set genre=?, director=? WHERE id=?', [Movie.genre, Movie.director, id], callback);
  },

  deleteMovie: function(id, callback) {
    return db.query('DELETE FROM movie WHERE id=?', [id], callback);
  }

};

module.exports = Movie;
