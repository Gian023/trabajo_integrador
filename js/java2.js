window.onload = function(){

// Api's
// GENEROSSSSSSS
console.log("äsofihjaks0daosj");
fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US")
.then(function(respuesta){
 return respuesta.json();
})
.then(function(datos){
 console.log(datos);
  var div = document.querySelector(".gnre");
  var gnre = datos.generes;

  for (var i=1; i<16; i++){
    div.innerHTML += '<li><a href="#">'+  datos.generes[i].name + '</a>+ </li>'
  }
})





















}
