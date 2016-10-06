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

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/Proj2';

mongoose.connect(mongoURI);

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

app.listen(process.env.PORT || 3000, function(){
    console.log('Listening on port '+process.env.PORT);
});
