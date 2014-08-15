'use strict';

var morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('express-method-override'),
    games           = require('../controllers/games'),
    home           = require('../controllers/home');

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../static'));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(methodOverride());

  app.get('/', home.index);
  app.get('/colors', games.colors);

  console.log('Routes Loaded');
};

