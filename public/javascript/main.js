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

var exists = function(item, arr){
  // console.log(item);
  // console.log('--------');
  // console.log(arr);
  for (var i = 0; i < arr.length; i++){
    if (arr[i].title == item.title && arr[i].year == item.year){
      return true;
    } else if (arr[i].title == item.title && arr[i].year != item.year){
      return false;
    } else if (arr[i].title == item.title){
      return true;
    } else if (arr[i].title != item.title){
      return false;
    }
  }
}
module.exports = {
  parseIt: parseIt,
  addIt: addIt,
  exists: exists
}
