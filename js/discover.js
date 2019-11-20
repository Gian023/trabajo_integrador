// window.onload = function() {
// var buscarRandom = document.querySelector(".descubrir")
// function aleatorio () {
//   return Math.floor(Math.random() * 9542);
// }
//
// buscarRandom.innerHTML = '<a href="../info_series.html?id=' + aleatorio() + '">'+'Descubrir'+'</a>'
//
// }

// var id = aleatorio ()
//
// console.log(id)
// var url = "https://api.themoviedb.org/3/tv/" + aleatorio() + "?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US"
// fetch(url)
// .then(function(response) {
//  return response.json()
// })
// .then(function(information) {
//  console.log(information);
//  var info = document.querySelector('.contenedor')
//  var foto = document.querySelector('.foto')
//    info.innerHTML += '<h2><strong>'+  information.name + '</strong></h2>'
// var gnre = information.genres
// var losgeneros ="";
// for (var i=0; i<gnre.length; i++){
//   losgeneros += ' <a href="series_xgenero.html?id='+ information.genres +'">' + datos.genres.name + '</a> '
//
// }
// info.innerHTML += '<h3><strong>Géneros: </strong>' +  information.losgeneros + '</h3>'
//
// info.innerHTML += '<h3><strong>Lenguaje original: </strong>'+  information.original_language + '</h3>'
//
// info.innerHTML += '<h3><strong>Sinopsis:</strong>'+  ' <p><em>' + information.overview + '</em></p></h3>'
//
// // fecha de estreno
// info.innerHTML += '<h3><strong>Fecha de estreno: </strong>'+  information.first_air_date + '</h3>'
//
// // poster
// foto.innerHTML = '<img src="https://image.tmdb.org/t/p/w500/'+ information.poster_path + '">'
// })







}
