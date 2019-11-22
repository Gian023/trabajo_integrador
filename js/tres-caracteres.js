window.addEventListener("load", function() {

  var queryString = location.search; //Capturamos la query string del navegador

  var searchParams = new URLSearchParams(queryString); //Obtenemos las posiciones y los datos de la queryString

  var busqueda = searchParams.get("busqueda");

  var tresCaracteres = document.querySelector('.uk-search-input')
  document.querySelector('.conenedor_buscador form').addEventListener('submit', function(event) {

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

//LOG IN (lo hago en este para no crear t linkear más archivos js)
var logForm = document.querySelector(".LogIn")
var nombre = document.querySelector("[name=nombre]")
var email = document.querySelector("[name=email]")

var nombreUsuario = "";

// validacion email
logForm.onsubmit = function(event){
var regaxEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if (nombre.value == "" || email.value == "") {
  event.preventDefault()
  UIkit.notification({
    message: 'Llene los dos campos por favor',
    status: 'primary',
    pos: 'top-center',
    timeout: 3000
   });
}
else if (regaxEmail.test(email.value) == false) {
 event.preventDefault()
 UIkit.notification({
   message: 'Ingrese una direccion de correo valida',
   status: 'primary',
   pos: 'top-center',
   timeout: 3000
  });
}else{
  console.log(nombre.value);
  UIkit.notification({
    message: 'Bienvenido ' + nombre.value,
    status: 'primary',
    pos: 'top-center',
    timeout: 5000
   });
}
  guardarUsuarios()

}
  function guardarUsuarios(){
    localStorage.setItem('nombre', nombre.value)
    localStorage.setItem('email', email.value)
  }
  obtenerUsuarios()
  function obtenerUsuarios(){
  nombreUsuario = localStorage.getItem("nombre")
  }

 var logOUTButton = document.querySelector("#logOut")

  if (nombreUsuario != "") {
    // UIkit.notification({
    //   message: 'Bienvenido ' + nombreUsuario,
    //   status: 'primary',
    //   pos: 'top-center',
    //   timeout: 5000
    //  });
    document.querySelector("#a_usuario").style.display = "none"
    logOUTButton.style.display = "block"
  }

  logOUTButton.onclick = function(){
    if (logOUTButton.style.display == "block" ) {
      document.querySelector("#a_usuario").style.display = "block"
      document.querySelector("#logOut").style.display = "none"
    }
  }






})
