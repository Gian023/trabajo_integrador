// Intento hacer favoritos
//    window.onload = function() {
//
//      //Paso 1: Leo Storage
//
//      var recuperoStorage = localStorage.getItem("seriesFavoritos");
//
//      // Si todavía no tenía gifs favoritos
//      if (recuperoStorage == null) {
//        // Creo una lista vacia
//        seriesFavoritos = [];
//      } else {
//        // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
//        seriesFavoritos = JSON.parse(recuperoStorage);
//      }
//
//      var datos = new URLSearchParams(location.search);
//      var idSerie = datos.get("idSerie");
//
//      if (seriesFavoritos.includes(idSerie)) {
//        document.querySelector("button").innerHTML = "QUITAR DE FAVORITOS";
//      }
//
//
//
//      fetch("https://api.themoviedb.org/3/tv/" + idSerie + "?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US")
//        .then(function(response) {
//          return response.json();
//        })
//        .then(function(serie) {
//          document.querySelector("h1").innerHTML = datos.results[i].id;
//          document.querySelector("img").src = "https://image.tmdb.org/t/p/w500/' + datos.results[i].poster_path;
//          //Preguntar
//        })
//
//        document.querySelector("button").onclick = function() {
//
//
//          //Paso 2: Modificar la informacion
//          // Si el gif ya era favorito
//          if (seriesFavoritos.includes(idSerie)) {
//            // Lo quito
//            var index = seriesFavoritos.indexOf(idSerie);
//            seriesFavoritos.splice(index, 1);
//            document.querySelector("button").innerHTML = "AGREGAR FAVORITO";
//          } else {
//            //Lo agrego
//            gifsFavoritos.push(idSerie);
//            document.querySelector("button").innerHTML = "QUITAR DE FAVORITOS";
//          }
//
//
//          //Paso 3: Escribir en storage
//          var infoParaStorage = JSON.stringify(seriesFavoritos);
//          localStorage.setItem("gifsFavoritos", infoParaStorage);
//          console.log(localStorage);
//        }
//    }
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
//
//
//
//
//
//
// }
