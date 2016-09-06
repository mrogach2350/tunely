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
