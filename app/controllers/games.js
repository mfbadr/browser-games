'use strict';

exports.colors = function(req, res){
  res.render('games/colors');
};

exports.pacman = function(req, res){
  res.render('games/pacman');
};

exports.painter = function(req, res){
  res.render('games/painter');
};
