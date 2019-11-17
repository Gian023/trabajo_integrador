window.addEventListener("load", function() {
  //Paso 1: Leo Storage
  var recuperoStorageTarde = localStorage.getItem("seriesFavoritosTarde");
  console.log(recuperoStorageTarde);
  // Si todavía no tenía gifs favoritos
  if (recuperoStorageTarde == null) {
    // Creo una lista vacia
    seriesFavoritosTarde = [];
  } else {
    // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
    seriesFavoritosTarde = JSON.parse(recuperoStorageTarde);
  }
  for (var i = 0; i < seriesFavoritosTarde.length; i++) {

      // BUSCAR ESE GIF Y MOSTRARLO
      fetch("https://api.themoviedb.org/3/tv/" + seriesFavoritosTarde[i] + "?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US")
        .then(function(response) {
          return response.json();
        })
        .then(function(serie) {
          console.log(serie)
          document.querySelector("#mas").innerHTML += '<li>'+ '<a href="info_serie.html?id='+ serie.id +'">' + '<img src="https://image.tmdb.org/t/p/w300/' + serie.poster_path + '">' + '</a>'+ '</li>'
        })
}
})
