var Movie = require('../../models/movie.js').movieModel;

var parseIt = function(str){
  return JSON.parse(str);
}

var addIt = function(info){
  var ret = new Movie({
    actors: info.Actors,
    title: info.Title,
    year: info.Year,
    summary: info.Plot,
    genre: info.Genre
  });
  return ret;
}
module.exports = {
  parseIt: parseIt,
  addIt: addIt
}
