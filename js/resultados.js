window.addEventListener("load",function(){
var queryString = location.search; //Capturamos la query string del navegador

var searchParams = new URLSearchParams(queryString); //Obtenemos las posiciones y los datos de la queryString

var busqueda = searchParams.get("busqueda"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").

var url = "https://api.themoviedb.org/3/search/tv?api_key=7246c48f98d8db92d443b21af0633a14&language=en-US&query=" + busqueda + '&page=1'
fetch(url)
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
  var destino = document.querySelector(".resultados");
  var datosFinales = datos.results;
  var titulo = document.querySelector(".primero");

  titulo.innerText = busqueda;

  console.log(datos);

  for(var i=0; i<datosFinales.length; i++){
    destino.innerHTML+= '<li><a href="info_serie.html?id='+ datos.results[i].id+'"> '+'<img src="https://image.tmdb.org/t/p/w500/' + datos.results[i].poster_path + '">' + '</a></li>'
  }

})
