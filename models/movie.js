var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
  actors: Array,
  title: String,
  year: Number,
  summary: String,
  genre: String,
  poster: String,
  imdbId: String,
  numOfFavs: Number
});

var movieModel = mongoose.model('Movie', movieSchema);

module.exports = {
  movieModel: movieModel,
  movieSchema: movieSchema
}
