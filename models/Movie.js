var db = require('../dbconnection');

var Movie = {

  getAllMovies: function(callback) {
      return db.query('SELECT * FROM movies', callback);
  },

  addMovie: function(Movie, callback) {
    console.log(Movie);
    return db.query('INSERT INTO movies values(?,?,?,?)', [Movie.title, Movie.diretor, Movie.genre], callback);
  },

  getMovieById: function(id, callback) {
    return db.query('SELECT * FROM movie WHERE id=?', [id], callback);
  },

  updateMovie: function(id, Movie, callback) {
    return db.query('UPDATE movie SET genre=?, director=? WHERE id=?', [Movie.genre, Movie.director, id], callback);
  },

  deleteMovie: function(id, callback) {
    return db.query('DELETE FROM movie WHERE id=?', [id], callback);
  },

  remove: function(callback) {
    return db.query('DELETE FROM movie');
  }

};

module.exports = Movie;
