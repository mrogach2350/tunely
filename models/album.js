var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var songModel = require('./song.js');

var AlbumSchema = new Schema({
  name: String,
  artistName: String,
  releaseDate: String,
  genres: Array,
  songs: [songModel.schema]
});

var Album = mongoose.model('Album', AlbumSchema);
module.exports = Album;
