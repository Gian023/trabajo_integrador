window.onload = function(){
// nada
// Api's
fetch("https://api.themoviedb.org/3/discover/tv?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false")
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    console.log(datos);
     var sliderUl = document.querySelector("#maspopulares");
     var pel = datos.results;

     for (var i=0; i<pel.length; i++){
       sliderUl.innerHTML += '<li><a href="(5)info_serie.html"> ' + '<img src="https://image.tmdb.org/t/p/w500/' + datos.results[i].poster_path + '">' + '</a></li>'
     }
   })
   //
   /*fech de top rated */
   fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=7246c48f98d8db92d443b21af0633a14&language=en-US&page=1")
     .then(function(respuesta){
       return respuesta.json();
     })
     .then(function(datos){
       console.log(datos);
        var ul = document.querySelector("#mayorpuntaje");
        var pel = datos.results;

        for (var i=0; i<pel.length; i++){
          ul.innerHTML += '<li>' + '<img src="https://image.tmdb.org/t/p/w500/' + datos.results[i].poster_path + '">' + '</li>'
        }
      })

   /*fech de series al aire */
   fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=7246c48f98d8db92d443b21af0633a14&language=en-US&page=1")
   .then(function(respuesta){
    return respuesta.json();
   })
   .then(function(datos){
    console.log(datos);
     var ul = document.querySelector("#alaire");
     var pel = datos.results;

     for (var i=0; i<pel.length; i++){
       ul.innerHTML += '<li>' + '<img src="https://image.tmdb.org/t/p/w500/' + datos.results[i].poster_path + '">' + '</li>'
     }
   })
   console.log("hola");
// GENEROSSSSSSS
fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US")
.then(function(respuesta){
 return respuesta.json();
})
.then(function(datos){
 console.log(datos);
  var div = document.querySelector(".gnre");
  var pel = datos.results;

  for (var i=0; i<pel.length; i++){
    div.innerHTML += '<li>' + '<img src="https://image.tmdb.org/t/p/w500/' + datos.results[i].poster_path + '">' + '</li>'
  }
})





















}
