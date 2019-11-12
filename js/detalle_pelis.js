window.onload = function(){

// ////////////////Info de la serie
var querystring = location.search;
var query2 = new URLSearchParams(querystring)
var id = query2.get("id")

fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US")
.then(function(respuesta){
 return respuesta.json();
})
.then(function(datos){
 console.log(datos);
  var info_conteiner = document.querySelector(".info_conteiner");
  var foto_conteiner = document.querySelector(".foto_conteiner");

  info_conteiner.innerHTML += '<h2><strong>'+  datos.name + '</strong></h2>'

  var gnre = datos.genres
  var losgeneros ="";
  for (var i=0; i<gnre.length; i++){
    losgeneros += ' <a href="series_xgenero.html?id='+ datos.genres[i].id+'">' + datos.genres[i].name + '</a> '

  }
  info_conteiner.innerHTML += '<h3><strong>Géneros: </strong>' +  losgeneros + '</h3>'

  info_conteiner.innerHTML += '<h3><strong>Lenguaje original: </strong>'+  datos.original_language + '</h3>'

  info_conteiner.innerHTML += '<h3><strong>Sinopsis:</strong>'+  ' <p><em>' + datos.overview + '</em></p></h3>'

  // fecha de estreno
  info_conteiner.innerHTML += '<h3><strong>Fecha de estreno: </strong>'+  datos.first_air_date + '</h3>'

  // poster
  foto_conteiner.innerHTML = '<img src="https://image.tmdb.org/t/p/w500/'+ datos.poster_path + '">'
})
///////TRAILER
fetch("https://api.themoviedb.org/3/tv/" + id + "/videos?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US")
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    console.log(datos);
     var div_trailer = document.querySelector(".trailer_conteiner");
     var trailer = datos.results;

     for (var i=0; i<trailer.length; i++){
       div_trailer.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + datos.results[i].key + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'


     }
   })
//----------- Boton --------------------
var recom = document.querySelector(".Recomendaciones");
var btn = document.querySelector("#boton-recom");

btn.onclick = function (){
  recom.style.display = "block";
  btn.onclick = function (){
    recom.style.display = "none";
    btn.onclick = function (){
      recom.style.display = "block";
      btn.onclick = function (){
        recom.style.display = "none";
      }
    }
  }
}






/////////////////// RECOMENDADOS
fetch("https://api.themoviedb.org/3/tv/" + id + "/recommendations?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US&page=1")
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    console.log(datos);
     var recomen = document.querySelector("#Reco");
     var pel = datos.results;

     for (var i=0; i<pel.length; i++){
       recomen.innerHTML += '<li><a id="click_pelis" href="info_serie.html?id='+ datos.results[i].id +'"> ' + '<img src="https://image.tmdb.org/t/p/w500/' + datos.results[i].poster_path + '">' + '</a></li>'
     }
   })



   // 
   // window.onload = function() {
   //
   //   //Paso 1: Leo Storage
   //
   //   var recuperoStorage = localStorage.getItem("seriesFavoritos");
   //
   //   // Si todavía no tenía gifs favoritos
   //   if (recuperoStorage == null) {
   //     // Creo una lista vacia
   //     seriesFavoritos = [];
   //   } else {
   //     // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
   //     seriesFavoritos = JSON.parse(recuperoStorage);
   //   }
   //
   //   var datos = new URLSearchParams(location.search);
   //   var idSerie = datos.get("idGif");
   //
   //   if (seriesFavoritos.includes(idSerie)) {
   //     document.querySelector("button").innerHTML = "QUITAR DE FAVORITOS";
   //   }
   //
   //
   //
   //   fetch("https://api.giphy.com/v1/gifs/" + idSerie + "?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU")
   //     .then(function(response) {
   //       return response.json();
   //     })
   //     .then(function(gif) {
   //       document.querySelector("h1").innerHTML = gif.data.title;
   //       document.querySelector("img").src = gif.data.images.original.url;
   //     })
   //
   //     document.querySelector("button").onclick = function() {
   //
   //
   //       //Paso 2: Modificar la informacion
   //       // Si el gif ya era favorito
   //       if (gifsFavoritos.includes(idGif)) {
   //         // Lo quito
   //         var index = gifsFavoritos.indexOf(idGif);
   //         gifsFavoritos.splice(index, 1);
   //         document.querySelector("button").innerHTML = "AGREGAR FAVORITO";
   //       } else {
   //         //Lo agrego
   //         gifsFavoritos.push(idGif);
   //         document.querySelector("button").innerHTML = "QUITAR DE FAVORITOS";
   //       }
   //
   //
   //       //Paso 3: Escribir en storage
   //       var infoParaStorage = JSON.stringify(gifsFavoritos);
   //       localStorage.setItem("gifsFavoritos", infoParaStorage);
   //       console.log(localStorage);
   //     }
   // }













}
