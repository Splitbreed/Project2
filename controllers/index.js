var express = require('express');
var router = express.Router();
var request = require('request');

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

router.post('/login', )

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
