var mongoose = require("mongoose");
var Schema = mongoose.Schema;
module.exports.Song = require('./song.js');

var AlbumSchema = new Schema({
  name: String,
  artistName: String,
  releaseDate: String,
  genres: Array,
  songs = []
});

var Album = mongoose.model('Album', AlbumSchema);
module.exports = Album;
