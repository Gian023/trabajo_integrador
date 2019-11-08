window.onload = function(){

// ////////////////Info de la serie
var querystring = location.search;
var query2 = new URLSearchParams(querystring)
var id = query2.get("id")

console.log(querystring);
console.log(query2);
console.log(id);



fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US")
.then(function(respuesta){
 return respuesta.json();
})
.then(function(datos){
 console.log(datos);
  var info_conteiner = document.querySelector(".info_conteiner");

  info_conteiner.innerHTML += '<h1>'+  datos.name + '</h1>'

  var gnre = datos.genres
  var losgeneros ="";
  var losgenerosID = "";
  for (var i=0; i<gnre.length; i++){
    losgeneros += ' <a href="series_xgenero.html?'+datos.genres[i].id+'">' + datos.genres[i].name + '</a> |'

  }
  info_conteiner.innerHTML += '<h2>Géneros: ' +  losgeneros + '</h2>'

  // info_conteiner.innerHTML += '<h3>Generos:'+  datos.genres + '</h3>'
})

//





















}
