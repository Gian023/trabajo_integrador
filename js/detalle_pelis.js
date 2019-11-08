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
  // var gnre = datos.generes;
  info_conteiner.innerHTML += '<h1>'+  datos.name + '</h1>'
  // info_conteiner.innerHTML += '<li><a href="#">'+  datos.generes[i].name + '</a>+ </li>'
  // for (var i=1; i<16; i++){
  //
  // }
})

//





















}
