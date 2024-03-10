
//  //Defino array para las habitaciones

//  const habitaciones = [
//   {id:1, nombre:"Habitación Cruel Summer", imagen:"https://cdn.bueno-bonito-barcelona.com/wp-content/uploads/sites/2/2016/11/chambre-double1.jpg", descripcion:"Cama doble y dos camas individuales", precio: 30000}, //0
//   {id:2, nombre:"Habitación Daylight", imagen:"https://cdn.bueno-bonito-barcelona.com/wp-content/uploads/sites/2/2016/11/chambre-double1.jpg",descripcion:"Cama doble", precio: 35000},//1
//   {id:3, nombre:"Habitación Afterglow", imagen:"https://cdn.bueno-bonito-barcelona.com/wp-content/uploads/sites/2/2016/11/chambre-double1.jpg",descripcion:"Dos camas dobles", precio: 40000},//2
//   {id:4, nombre:"Habitación The Archer", imagen:"https://cdn.bueno-bonito-barcelona.com/wp-content/uploads/sites/2/2016/11/chambre-double1.jpg",descripcion:"Dos camas dobles y tres camas individuales", precio: 45000},//3
//   {id:5, nombre:"Habitación Lover", imagen:"https://cdn.bueno-bonito-barcelona.com/wp-content/uploads/sites/2/2016/11/chambre-double1.jpg",descripcion:"Cama doble", precio: 50000},//4
//   {id:6, nombre:"Habitación Paper Rings", imagen:"https://cdn.bueno-bonito-barcelona.com/wp-content/uploads/sites/2/2016/11/chambre-double1.jpg",descripcion:"Tres Camas doble", precio: 55000},//5
//  ];
 

//  LocalStorage y JSON

// //  LocalStorage de habitaciones
//  const guardarHabitaciones = (habitaciones) => {
//     localStorage.setItem("habitaciones", JSON.stringify(habitaciones))
//  }

fetch('./js/habitaciones.json')
.then(back => back.json())
.then(habitaciones => {
  let arrayDeHabitaciones = JSON.stringify(habitaciones);
  localStorage.setItem('habitaciones', arrayDeHabitaciones);
});

 const obtenerHabitaciones = ()=> {
    return JSON.parse(localStorage.getItem("habitaciones")) || []
 } 

 //LocalStorage de reservas 
 const guardarReservas = (habitaciones) => {
     localStorage.setItem("reservas", JSON.stringify(habitaciones))
  }

  const obtenerReservas = ()=> {
     return JSON.parse(localStorage.getItem("reservas")) || []
  } 

  //nuevo

  const obtenerIdHabitacion = ()=> {
    return JSON.parse(localStorage.getItem("habitacion")) || 0;
 } 
 
// fin nuevo


//render de mis habitaciones
function renderHabitaciones(){
    const habitaciones = obtenerHabitaciones();
    let contenido = "";

    for (const habitacion of habitaciones) {
        contenido += `<div class="card col-md-5 mb-5 py-2 g-2 px-3 offset-md-1">
        <img style= width:100% height:100% src="${habitacion.imagen}" class="card-img-top" alt="${habitacion.nombre}">
        <div class="card-body">
          <h5 class="card-title">${habitacion.nombre}</h5>
          <p class="card-text">${habitacion.descripcion}</p>
          <a href="reservas.html" onclick="verHabitacion(${habitacion.id});" class="btn btn-secondary">Reservar</a>
        </div>
      </div>`

    }

    document.getElementById("habitaciones").innerHTML = contenido;
}


//nuevo
const verHabitacion = (id) => {
  localStorage.setItem("habitacion", JSON.stringify(id));
}


//nuevo

const obtenerHabitacion = () => {
  const habitaciones = obtenerHabitaciones();
  const id = obtenerIdHabitacion();
  const habitacion = habitaciones.find(item => item.id === id);
  
  return habitacion;
}




//
// guardarHabitaciones(habitaciones);
renderHabitaciones();



