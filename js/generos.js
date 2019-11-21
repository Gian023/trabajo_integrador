window.addEventListener("load", function() {

  // Api's
  // GENEROSSSSSSS
//   console.log("äsofihjaks0daosj");
//   fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US")
//     .then(function(respuesta) {
//       return respuesta.json();
//     })
//     .then(function(datos) {
//       console.log(datos);
//       var div = document.querySelector(".generos_container ul");
//       var gnre = datos.genres;
// var accion = document.querySelector(".action")
// var animation = document.querySelector(".animation")
// var comedy = document.querySelector(".comedy")
// var crime = document.querySelector(".crime")
// var documentary = document.querySelector(".documentary")
// var drama = document.querySelector(".drama")
// var kids = document.querySelector(".kids")
// var mistery = document.querySelector(".mistery")
// var news = document.querySelector(".news")
// var scifi = document.querySelector(".scifi")
// var soap = document.querySelector(".soap")
// var talk = document.querySelector(".talk")
// var war = document.querySelector(".war")
// var western = document.querySelector(".western")
// // accion.innerHTML += "<a href='series_xgenero.html?id=10759&name="Action & Adventure"'>"
// // animation.innerHTML
//       for (var i = 0; i < gnre.length; i++) {
//         div.innerHTML += '<li><a href="series_xgenero.html?id=' + datos.genres[i].id + '&name=' + datos.genres[i].name + '">' + datos.genres[i].name + '</a></li>'
//       }

      //Random

      var buscarRandom = document.querySelector(".descubrir")

      function aleatorio() {
        return Math.floor(Math.random() * 9542);
      }

      buscarRandom.innerHTML = '<a href="info_serie.html?id=' + aleatorio() + '">' + 'Descubrir' + '</a>'







    // 
    //
    // })
    //
    //







})
