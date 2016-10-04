var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var MovieSchema = require('./movie.js');

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  favMovies: [MovieSchema]
});

userSchema.plugin(passportLocalMongoose);

var UserModel = mongoose.model('User', userSchema);


module.exports = UserModel;
