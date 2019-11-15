window.addEventListener("load",function(){

  var queryString = location.search; //Capturamos la query string del navegador

  var searchParams = new URLSearchParams(queryString); //Obtenemos las posiciones y los datos de la queryString

  var busqueda = searchParams.get("busqueda");

  var tresCaracteres = document.querySelector('.uk-search-input')
  document.querySelector('.conenedor_buscador form').addEventListener('submit', function(event){

    if (tresCaracteres.value.length < 3) {

      UIkit.notification({
      message: 'Ingrese al menos 3 caracteres',
      status: 'primary',
      pos: 'top-center',
      timeout: 3000
      });
      event.preventDefault();

    }
  })







})
