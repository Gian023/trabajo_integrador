window.onload = function(){

//////////////////Info de la serie
var querystring = location.search;
var query2 = new URLSearchParams(querystring)
var id = query2.get("id")

// GENEROSSSSSSS
console.log("hola mundo!");
fetch("https://api.themoviedb.org/3/discover/tv?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US&sort_by=popularity.desc&page=2&timezone=America%2FNew_York&include_null_first_air_dates=false&with_genres=" + id )
.then(function(respuesta){
 return respuesta.json();
})
.then(function(datos){
 console.log(datos);
  var div = document.querySelector(".contenedor_g");
  var series = datos.total_results;
  var titulo = document.querySelector("#titulos");
  // titulo.innerHTML =;

  for (var i=0; i<datos.total_results; i++){
    div.innerHTML += '<li><a id="click_pelis" href="info_serie.html?id='+ datos.results[i].id +'"> ' + '<img src="https://image.tmdb.org/t/p/w500/' + datos.results[i].poster_path + '">' + '</a></li>'
  }
})





















}
