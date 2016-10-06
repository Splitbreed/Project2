var express = require('express');
var router = express.Router();
var request = require('request');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

var js = require('../public/javascript/main.js')

var User = require('../models/user.js');
var Movie = require('../models/movie.js');


router.get('/', function(req, res){
  res.render('main/index.hbs')
});

router.post('/register', function(req, res){
  User.register(new User({
    username: req.body.username
  }),
  req.body.password,
  function(err, user){
    if (err){
      console.log(err);
    }
    res.redirect('/');
  });
});

router.post('/login', passport.authenticate('local'), function(req, res){
  req.session.save(function(err){
    if (err){
      console.log(err);
    }
    else{
      res.redirect('/'+req.user.username);
      console.log(req.user.username);
    }
  });
});

router.get('/:username', function(req, res){
  if (!req.user){
    res.redirect('/');
  } else if (req.user && req.user.username == req.params.username){
    res.render('main/landing.hbs', {user: req.user});
  } else {
    console.log(req.user);
    // if (req.user && req.user.username != req.params.username)
    User.findOne({username: req.params.username}, function(err, other){
      console.log(other);
      res.render('main/notlanding.hbs', {user: other});
    });
  }
});

router.post('/:username/add', function(req, res){
  if(req.body.year){
    request('http://www.omdbapi.com/?t='+req.body.title+'&y='+req.body.year+'&plot=short&r=json', function(err, response, body){
      if (err) console.log(err);
      var parse = js.parseIt(body);
      var toPush = js.addIt(parse);
      req.user.favMovies.push(toPush);
      req.user.save();
      console.log(req.user);
      res.redirect('/'+req.user.username);
    });
  } else {
    request('http://www.omdbapi.com/?t='+req.body.title+'&y=&plot=short&r=json', function(err, body, body){
      if (err) console.log(err);
      var parse = js.parseIt(body);
      var toPush = js.addIt(parse);
      req.user.favMovies.push(toPush);
      req.user.save();
      console.log(req.user);
      res.redirect('/'+req.user.username);
    })
  }


});
// router.post('/', function(req, res){
//   request('http://www.omdbapi.com/?t='+req.body.title+'&y=&plot=short&r=json', function(err, response, body){
//     if(err) {
//       console.log(err)
//     }
//     else {
//       parse = JSON.parse(body);
//       res.render('main/index.hbs', {info: parse})
//     };
//   });
// });


module.exports = router;
