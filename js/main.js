

//           /* function edadHuesped(){

//             let edadHuesped= parseInt(prompt("Ingrese la edad del huésped"))
//             if(edadHuesped >=18){
//                 alert("Puede hospedarse sin acompañante")
//             }else if (edadHuesped < 18){
//                 alert("Necesita hospedarse con la autorizacion de un tutor/a o un acompañante mayor de edad")
//             }
//             console.log(edadHuesped)
//            }    
//           */ 


// // Accedo a los nodos
// console.log(document.body);
// console.log(document.head);


// // Mensaje de bienvenida

// alert("¡Bienvenido/a a Cornelia Street Hotel!");

// const savedName = "coder";
// const savedPass = "54321";


// opcion = parseInt(prompt("Elija una opción para continuar: \n1-Ir a la web del hotel \n2-Ingresar a mi cuenta \n3-Crear una cuenta"));

// let newUser;
// let newPass;
// let userPass;
// let userName;

// console.log(newUser);
// console.log(newPass);
// console.log(userName);
// console.log(userPass);

// let continuar = true;

// //ingresar a la cuenta
// const login = () => {

// let userName= prompt ("Por favor, ingrese su nombre de usuario")

// if (userName==savedName){
//   let userPass= prompt("Por favor, ingrese su contraseña")
//   if (userPass==savedPass){
//     alert("Bienvenido/a a la web de Cornelia Street Hotel, " + userName)
//   console.log("Usuario correcto")}
// }

// else if (userName==newUser){
//   let userPass= prompt("Por favor, ingrese su contraseña")
//   if (userPass==newPass){
//     alert("Bienvenido/a a la web de Cornelia Street Hotel, " + userName)
//   console.log("Usuario correcto")}
// }

// else{
//   alert ("Nombre de usuario incorrecto")
// }

// }

// //Crear una cuenta
// const registrar = () => {
//   newUser = prompt("Ingrese el nombre de usuario que desee");
//   newPass = prompt("Ingrese la contraseña que desee");
//   let verificaContrasenia = prompt("Repita la contraseña elegida");
//   if (verificaContrasenia == newPass) {
//     alert("Gracias por registrarse en Cornelia Street Hotel " + newUser);
//     return newUser, newPass;
//   } else {
//     alert("La contraseña ingresada es incorrecta");
//   }
// }


// //Menú de opciones

// while(opcion != "0" && continuar){
//   switch(opcion){
//    case 1: alert ("¡Bienvenido/a a la web Cornelia Street Hotel!");
//      continuar = false
//         break

//    case 2: login();
//       continuar = false
//         break

//    case 3: registrar();
     
//         break

//     default: alert("Por favor, elige una opción que sea válida");
//       break;
  
//   }
//   if (continuar) {
//     opcion = parseInt(
//       prompt("\n1-Ir a la web del hotel \n2-Ingresar a mi cuenta \n3-Crear una cuenta"),
      
//     );
//   }
  
// }

//  //Defino array para las habitaciones

//  const habitaciones = [
//   {id:1, nombre:"Habitación Cruel Summer", descripción:"Cama doble y dos camas individuales", precio: 30000}, //0
//   {id:2, nombre:"Habitación Daylight", descripción:"Cama doble", precio: 35000},//1
//   {id:3, nombre:"Habitación Afterglow", descripción:"Dos camas dobles", precio: 40000},//2
//   {id:4, nombre:"Habitación The Archer", descripción:"Dos camas dobles y tres camas individuales", precio: 45000},//3
//   {id:5, nombre:"Habitación Lover", descripción:"Cama doble", precio: 50000},//4
//   {id:6, nombre:"Habitación Paper Rings", descripción:"Tres Camas doble", precio: 55000},//5
//  ]


// class Carrito {
//   constructor() {
//     this.habitaciones = [];
//     this.iva = 21;
//     this.totalParaPagarIva= 1;
//     this.totalPagar =0;
//   }


//   agregarHabitaciones(id) {
  
//     let habitacion = habitaciones.find( hab => hab.id === id);
//     console.log(habitacion);

//     if (habitacion){
//       this.habitaciones.push(habitacion);
//       console.log("Estas por reservar #" + id + " Presione Continuar para seguir");
//     }  
//     else{
//       console.log("No encontramos la habitación con #" + id + "!");
//     }
//   }

//   listarHabitaciones(){
//     let salida = "";
  
//     this.habitaciones.forEach(item => {
//       salida += item.id + " - " + item.nombre + " -$" + item.precio + "\n";
//     })
//     return salida;
//   }

//   calcularTotalHabitaciones() {
//     return this.habitaciones.length;
//   } 

// /* calcularSumaTotal() {
//     this.totalPagar = 0;
//     this.habitaciones.forEach(item => {
//       this.totalPagar += item.precio;
//     });
//     return this.totalPagar;
//    /* return this.habitaciones.reduce((acumulador, item) => acumulador += item.precio, 0);
//   }*/

//   sumarIva() {
//     if (this.calcularTotalHabitaciones() >= this.totalParaPagarIva){
//       return Math.round((this.calcularTotalPagar() * this.iva) / 100)
//     } else{
//       return 0;
//     }
//   }

//   calcularTotalPagar() {
//     let total = 0;

//     this.habitaciones.forEach(item => {
//       total += item.precio;
//     });
//     return total;
//   }


// }

// function listarHabitaciones(){
//   let salida = "";

//   habitaciones.forEach(item => {
//     salida += item.id + " - " + item.nombre + " -$" + item.precio + "\n";
//   })
//   return salida;
// }



// const carrito = new Carrito();
// let opcionSeleccionada = 6;


// while (opcionSeleccionada != 0){
//   opcionSeleccionada = parseInt(prompt("Por favor, seleccione la habitación que desea reservar: 0 continuar\n\n" + listarHabitaciones()));

//   if (opcionSeleccionada == 0){
//     break;
//   }

//   carrito.agregarHabitaciones(opcionSeleccionada);

// }


// let productosCarrito = "Detalle de su compra: \n\n" + carrito.listarHabitaciones();
// let subTotal = "Subtotal: $" + carrito.calcularTotalPagar();
// let iva = "Iva: $" + carrito.sumarIva();
// let montoFinal = Math.round(carrito.calcularTotalPagar() +
// carrito.sumarIva());
// alert((productosCarrito + "\n\n" + subTotal + "\n" + iva + "\n") + "El precio total de su estadia es: $" + montoFinal);



 //Defino array para las habitaciones

 const habitaciones = [
  {id:1, nombre:"Habitación Cruel Summer", imagen:"https://cdn.bueno-bonito-barcelona.com/wp-content/uploads/sites/2/2016/11/chambre-double1.jpg", descripcion:"Cama doble y dos camas individuales", precio: 30000}, //0
  {id:2, nombre:"Habitación Daylight", imagen:"https://cdn.bueno-bonito-barcelona.com/wp-content/uploads/sites/2/2016/11/chambre-double1.jpg",descripcion:"Cama doble", precio: 35000},//1
  {id:3, nombre:"Habitación Afterglow", imagen:"https://cdn.bueno-bonito-barcelona.com/wp-content/uploads/sites/2/2016/11/chambre-double1.jpg",descripcion:"Dos camas dobles", precio: 40000},//2
  {id:4, nombre:"Habitación The Archer", imagen:"https://cdn.bueno-bonito-barcelona.com/wp-content/uploads/sites/2/2016/11/chambre-double1.jpg",descripcion:"Dos camas dobles y tres camas individuales", precio: 45000},//3
  {id:5, nombre:"Habitación Lover", imagen:"https://cdn.bueno-bonito-barcelona.com/wp-content/uploads/sites/2/2016/11/chambre-double1.jpg",descripcion:"Cama doble", precio: 50000},//4
  {id:6, nombre:"Habitación Paper Rings", imagen:"https://cdn.bueno-bonito-barcelona.com/wp-content/uploads/sites/2/2016/11/chambre-double1.jpg",descripcion:"Tres Camas doble", precio: 55000},//5
 ];

 //LocalStorage y JSON
 const guardarHabitaciones = (habitaciones) => {
    localStorage.setItem("habitaciones", JSON.stringify(habitaciones))
 }

 const obtenerHabitaciones = ()=> {
    return JSON.parse(localStorage.getItem("habitaciones")) || []
 } 

//  const guardarReservas = (habitaciones) => {
//     localStorage.setItem("habitaciones", JSON.stringify(habitaciones))
//  }

//  const obtenerReservas = ()=> {
//     return JSON.parse(localStorage.getItem("habitaciones")) || []
//  } 

//render de mis habitaciones
function renderHabitaciones(){
    const habitaciones = obtenerHabitaciones();
    let contenido = "";

    for (const producto of habitaciones) {
        contenido += `<div class="card col-md-6" >
        <img style= width:100% height:100% src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <a href="#" class="btn btn-secondary">Reservar</a>
        </div>
      </div>`
    }

    document.getElementById("habitaciones").innerHTML = contenido;
}

//Evento
function alertaReserva() {
    document.getElementById("botonReserva").innerHTML = `<div class="card my-5">
    
    <div class="card-body">
      <h5 class="card-title">Está por realizar una reserva</h5>
      <p class="card-text">¿Seguro quiere continuar?</p>
      <a href="#" class="btn btn-success">Si</a>
      <a href="#" class="btn btn-danger">No</a>
    </div>
  </div>`
}

let valReserva = document.getElementById("habitaciones")
valReserva.onclick = alertaReserva;

//
guardarHabitaciones(habitaciones);
renderHabitaciones();



