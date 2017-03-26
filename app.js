var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    methodOverride = require('method-override'),
    Movie = require('./models/Movie');

// Routes
movieRoutes = require('./routes/movies');

// Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/movies', movieRoutes);

module.exports = app;
