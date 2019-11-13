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
}


// VIENOD COMO SE HACE FAVORITOS
//
//    var queryString = location.search
//
// <<<<<<< HEAD
//    queryString = new URLSearchParams(queryString)
// =======
//
//
// >>>>>>> master
//
//    var idSerie = queryString.get("idSerie")
//
//    console.log(idSerie);
//
//    // INICIO BLOQUE 1 - Leer el array de storage
//
//      // Paso 1 - Leo de localStorage
//      var jsonFavoritas = localStorage.getItem("seriesFavoritas")
//
//      if (jsonFavoritas == null) {
//        var favoritas = []
//      } else {
//        // Paso 2 - Desempaqueto el json
//        var favoritas = JSON.parse(jsonFavoritas)
//
//      }
//    // CIERRA BLOQUE 1
//
//    if (favoritas.indexOf(idSerie) >= 0) {
//      document.querySelector(".estrellita").style.backgroundColor = "gold"
//    }
//
//    // Bloque 3 - Que pasa al clickear en la estrella
//    document.querySelector(".estrellita").onclick = function(e) {
//      e.preventDefault()
//      // Bloque 3 a - Modifico el array
//      if (favoritas.indexOf(idSerie) >= 0) {
//        // La quito
//        var pos = favoritas.indexOf(idSerie)
//        favoritas.splice(pos,1)
//        document.querySelector(".estrellita").style.backgroundColor = "white"
//      } else {
//        // La agrego
//        favoritas.push(idSerie)
//        document.querySelector(".estrellita").style.backgroundColor = "gold"
//      }
//      // Fin bloque 3 a
//
//      // Bloque 3 b
//
//
//        var json = JSON.stringify(favoritas)
//
//        localStorage.setItem("seriesFavoritas", json)
//      // Fin bloque 3 b
//    }
//    // Fin bloque 3
//
//
//
//
//
//
//
//
//
//
//
//
// }
