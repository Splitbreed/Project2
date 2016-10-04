var express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var hbs = require('hbs');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var request = require('request');

var User = require('./models/user.js')

var app = express();

var baseControllers = require('./controllers/index.js');

mongoose.connect('mongodb://localhost/auth-hw');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.set("view engine", "hbs");

app.use(require('express-session')({
  secret: 'lorem mufukin ipsum',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', baseControllers);

app.listen(3000, function(){
    console.log('Listening on port 3000');
});
