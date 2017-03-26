var express = require('express'),
    router = express.Router(),
    Movie = require('../models/Movie.js');

//------------------
// GET all movies
//------------------

router.get('/', function(req, res) {
  Movie.getAllMovies(function(err, movies) {
    if (err) {
      res.json(err);
    } else {
      res.json(movies);
    }
  })
});

//------------------
// POST a movie
//------------------

router.post('/', function(req, res) {
  Movie.addMovie(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
      res.send({Message: "Successfully added movie!"});
    }
  })
});

//------------------
// GET a movie
//------------------

router.get('/:id', function(req, res) {
  Movie.getMovieById(req.params.id, function(err, movie) {
    if (err) {
      res.json(err);
    } else {
      res.json(movie);
    }
  })
});

//------------------
// UPDATE a movie
//------------------

router.put('/:id', function(req, res) {
  Movie.updateMovie(req.params.id, req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json()
      res.send({Message: "Successfully updated movie!"})
    }
  })
});

//------------------
// DELETE a movie
//------------------

router.delete('/:id', function(req, res) {
  Movie.deleteMovie(req.params.id, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.send({Message: "Successfully deleted movie!"})
    }
  })
});


module.exports = router;
