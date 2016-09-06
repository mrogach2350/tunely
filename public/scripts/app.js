/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
var $albums;

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

  function renderAlbum(album) {
    console.log('rendering album:', album);
    var albumsHtml = template(album);
    $albums.append(albumsHtml);
  }
});





// this function takes a single album and renders it to the page
