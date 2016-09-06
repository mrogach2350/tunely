/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
var $albums;
var allAlbums = [];
/* end of hard-coded data */



$(document).ready(function() {
  console.log('app.js loaded!');
  $albums = $('#albums');
  //$albums.empty();
  var source = $('#albums-template').html();
  var template = Handlebars.compile(source);
  $.ajax({
    metod: "GET",
    url:"/api/albums",
    dataType: "json",
    success:handleAlbums,
    error: handleError
  });
  function handleAlbums(json){
    json.forEach(function(input){
      renderAlbum(input);
  });
  }
  function handleError(error){
    console.log(error);
  }
  /*sampleAlbums.forEach(function(input){
    renderAlbum(input);
  });*/
  $('#album-form').on('submit', function(event){
    event.preventDefault();
    // var data = $(this).serialize();
    // console.log(data)
    $.ajax({
      method: 'POST',
      url: '/api/albums',
      data: $('#album-form').serialize(),
      success: newAlbumSuccess,
      error: newAlbumError
    });
    $('#album-form').trigger('reset');
  });

  function newAlbumError() {
    // console.log('ERROR')
  };

  function newAlbumSuccess(json) {
    // console.log("I'm Here!")
    $('#album-form input').val('');
    allAlbums.push(json);
    renderAlbum(json);
  }

  function renderAlbum(album) {
    console.log('rendering album:', album);
    album.genres = album.genres.join(', ');
    var albumsHtml = template(album);
    $albums.append(albumsHtml);
  }
});




// this function takes a single album and renders it to the page
