window.onload = function(){

// Api's
fetch("https://api.themoviedb.org/3/discover/tv?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false")
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    console.log(datos);
     var ul = document.querySelector("#pelis");
     var pel = datos.results;

     for (var i=0; i<pel.length; i++){
       ul.innerHTML += '<li>' + '<img src="' + datos.results[i].backdrop_path + '">' + '</li>'
     }
   })
























}
