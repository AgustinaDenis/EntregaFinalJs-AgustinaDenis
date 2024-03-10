
function renderHabitacion(){
    const habitacion = obtenerHabitacion();
    let contenido =  `<div class="card col-md-5 mb-5 py-3 g-2 px-3 offset-md-1">
        <img style= width:100% height:100% src="${habitacion.imagen}" class="card-img-top" alt="${habitacion.nombre}">
        <div class="card-body">
          <h5 class="card-title">${habitacion.nombre}</h5>
          <p class="card-text">${habitacion.descripcion}</p>
          <p class "card-text">$${habitacion.precio}</p>
        </div>
      </div>`
  
      document.getElementById("habitacionReservada").innerHTML = contenido;
    }
  
    
 // Formulario
 
 let campoNombre = document.getElementById("nombre");
 let campoApellido = document.getElementById("apellido");
 let campoMail = document.getElementById("mail");


 //nombre
 campoNombre.onkeyup = () => {
  let validacionNombre = document.getElementById("validacionNombre");
  if (campoNombre.value.length > 0) {
    if (validarNombre(campoNombre.value)){
      validacionNombre.className = "my-3 p-3 border border-success text-success";
      validacionNombre.innerHTML = "Válido";
    }} else {
  validacionNombre.innerHTML = "";
  validacionNombre.className = "";
}
 }

 //apellido
 campoApellido.onkeyup = () => {
  let validacionApellido = document.getElementById("validacionApellido");
  if (campoApellido.value.length > 0) {
    if (validarApellido(campoApellido.value)){
      validacionApellido.className = "my-3 p-3 border border-success text-success";
      validacionApellido.innerHTML = "Válido";
    }} else {
  validacionApellido.innerHTML = "";
  validacionApellido.className = "";
}
 }


 //mail
campoMail.onkeyup = () => {
    let validacionMail = document.getElementById("validacionMail");

    if (campoMail.value.length > 0) {
        if (validarMail(campoMail.value)) {
            validacionMail.className = "my-3 p-3 border border-success text-success";
            validacionMail.innerHTML = "Mail aceptado";
        } else {
            validacionMail.className = "my-3 p-3 border border-danger text-danger";
            validacionMail.innerHTML = "Por favor, ponga una dirección de correo existente";
        }
    } else {
        validacionMail.innerHTML = "";
        validacionMail.className = "";
    }

   
}

//nombre
function validarNombre(nombre) {
  if (nombre.includes("")) {
      return true
  } else {
      return false
  }
}


//apellido
function validarApellido(apellido) {
  if (apellido.includes("")) {
      return true
  } else {
      return false
  }
}


//mail
function validarMail(mail) {
    if (mail.includes("@")) {
        return true
    } else {
        return false
    }
}
  
//boton

function validarForm () {
  
  Swal.fire({
    title: "Seguro quiere realizar la reserva?",
    text: "Presione SI para reservar o NO para cancelar la reserva",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "NO",
    confirmButtonText: "SI"
  }).then((result) => {
    if (result.isConfirmed) {
      guardarNombre();
      Swal.fire({
        title: "¡Felicidades, su reserva ha sido realizada!",
        text: "Por favor, envíe el comprobante de pago a nuestro número de Whatsapp: +54 1145778962.",
        icon: "success"
      });
    }  if (result.isConfirmed) {
      guardarApellido();
      Swal.fire({
        title: "¡Felicidades, su reserva ha sido realizada!",
        text: "Por favor, envíe el comprobante de pago a nuestro número de Whatsapp: +54 1145778962.",
        icon: "success"
      });
    } if (result.isConfirmed) {
      guardarMail();
      Swal.fire({
        title: "¡Felicidades, su reserva ha sido realizada!",
        text: "Por favor, envíe el comprobante de pago a nuestro número de Whatsapp: +54 1145778962.",
        icon: "success"
      });
    } 
  });
 
}

//nombre

function guardarNombre(){
  let nombre = document.getElementById("nombre");
  localStorage.setItem("datoNombre" , JSON.stringify(nombre.value));
}

function eliminarNombre(){
  localStorage.removeItem("datoNombre");
}

//apellido

function guardarApellido(){
  let apellido = document.getElementById("apellido");
  localStorage.setItem("datoApellido" , JSON.stringify(apellido.value));
}

function eliminarApellido(){
  localStorage.removeItem("datoApellido");
}

//mail

function guardarMail(){
  let mail = document.getElementById("mail");
  localStorage.setItem("datoMail" , JSON.stringify(mail.value));
}

function eliminarMail(){
  localStorage.removeItem("datoMail");
}


  obtenerIdHabitacion(habitacionReservada);
  renderHabitacion();
  