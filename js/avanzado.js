window.onload = function (){
  console.log("Hola puto");
  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US")
  .then(function(respuesta){
   return respuesta.json();
  })
  .then(function(datos){
   console.log(datos);
    var buscador = document.querySelector(".avana");
    var form = document.createElement("select");
    buscador.append(form);
    var gnre = datos.genres;

    for (var i=0; i<gnre.length; i++){
      form.innerHTML += '<option><a href="series_xgenero.html?id='+ datos.genres[i].id +'&name='+ datos.genres[i].name +'">'+  datos.genres[i].name + '</a></option>'
    }
  })
}
