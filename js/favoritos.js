// window.addEventListener('load' ,function(){
//
//
//   var jsonFavoritas = localStorage.getItem("seriesFavoritas")
//
//   if (jsonFavoritas == null) {
//     var favoritas = []
//   } else {
//     // Paso 2 - Desempaqueto el json
//     var favoritas = JSON.parse(jsonFavoritas)
//   }
//
//   for (var i = 0; i < favoritas.length; i++) {
//     fetch("https://api.themoviedb.org/3/movie/ "+ favoritas[i] +" ?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US")
//       .then(function(respuesta) {
//         return respuesta.json()
//       })
//       .then(function(serie) {
//
//
//
//           document.querySelector(".seriesfavoritas").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+pelicula.id+'"><img src="https://image.tmdb.org/t/p/original/' + pelicula.poster_path + '" alt=""></a><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
//
//       })
//   }
//
//   /* Header y Footer */
//
//
//
// })
