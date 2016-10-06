var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var movieSchema = require('./movie.js').movieSchema;

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  favMovies: [movieSchema]
});

userSchema.plugin(passportLocalMongoose);

var UserModel = mongoose.model('User', userSchema);


module.exports = UserModel;
