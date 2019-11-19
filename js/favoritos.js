window.onload = function() {
  //Paso 1: Leo Storage
  var recuperoStorage = localStorage.getItem("seriesFavoritos");
  console.log(recuperoStorage);
  // Si todavía no tenía gifs favoritos
  if (recuperoStorage == null) {
    // Creo una lista vacia
    seriesFavoritos = [];
  } else {
    // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
    seriesFavoritos = JSON.parse(recuperoStorage);
  }
  for (var i = 0; i < seriesFavoritos.length; i++) {

    // BUSCAR ESE GIF Y MOSTRARLO
    fetch("https://api.themoviedb.org/3/tv/" + seriesFavoritos[i] + "?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US")
      .then(function(response) {
        return response.json();
      })
      .then(function(serie) {
        console.log(serie)
        document.querySelector(".seriesfavoritas").innerHTML += '<li>' + '<a href="info_serie.html?id=' + serie.id + '">' + '<img src="https://image.tmdb.org/t/p/w300/' + serie.poster_path + '">' + '</a>' + '</li>'
        if (datos.poster_path == null) {
          var foto = document.querySelector('.seriesfavoritas');
          foto.innerHTML += '<li><a href="info_serie.html?id=' + datos.results[i].id + '"> ' + '<img src="img/notfound.jpg">' + '</a></li>'
        }

      })

  }









}
