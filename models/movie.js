var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var movieSchema = mongoose.Schema({
  actors: Array,
  title: String,
  year: Number,
  summary: String,
  Genre: String,
  numOfFavs: Number
});


module.exports = movieSchema
