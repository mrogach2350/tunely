/************
 * DATABASE *
 ************/

 var db = require('../models');


// GET /api/albums
function index(req, res) {
  db.Album.find({}).exec(function(err, albums){
    if(err){
      res.status(500).send(err);
      return;
    }
    res.json(albums);
  });
  // res.json(albums);
}

function create(req, res) {
  // console.log(req.body);
  var newAlbum = new db.Album({
    name: req.body.name,
    artistName: req.body.artistName,
    releaseDate: req.body.releaseDate,
    genres: req.body.genres.split(', ')
  });
  newAlbum.save(function(err, album){
    if (err){
      return console.log('create error '+ err);
    }
    console.log('created ', album.name);
    res.json(album);
  });
}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
