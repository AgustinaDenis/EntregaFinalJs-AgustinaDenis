
//Alerta de inicio
alert("¡Bienvenido/a a Cornelia Street Hotel!");

const nombreUsuario1 = "coder";
const contrasenia1 = "54321";

var contrasenia2;
var nombreUsuario2;
var loginType = parseInt( prompt("\n1 Ingresar a la web del hotel \n2 Crear una cuenta \n3 Iniciar sesion "));
var nuevaContrasenia;
var continuar = true;


//  2 registro de cuenta para el huesped
const registrar = () => {

  nombreUsuario2 = prompt("Ingrese el nombre de usuario que desee");
  contrasenia2 = prompt("Ingrese la contraseña que desee");
  let verificaContrasenia = prompt("Repita la contraseña elegida");
  if (verificaContrasenia == contrasenia2) {
    alert("Gracias por registrarse en Cornelia Street Hotel " + nombreUsuario2);
    return nombreUsuario2, contrasenia2;
  } else {
    alert("La contraseña ingresada es incorrecta");
  }
}

// 3 iniciar sesion // Solo me toma contraseñas con números

const login = () => {
 
    console.log(nombreUsuario1);
    console.log(contrasenia1);
    console.log(nombreUsuario2);
    console.log(contrasenia2);
    
    var nuevoUsuario = prompt("Escriba su nombre de usuario");
    if (nuevoUsuario === nombreUsuario1 || nuevoUsuario === nombreUsuario2) {
      nuevaContrasenia = parseInt(prompt("Escriba su contraseña"));
      if (nuevaContrasenia == contrasenia1 || nuevaContrasenia == contrasenia2) {
        alert("¡Un gusto verte de nuevo por acá!");
        continuar = false;
        return continuar;
      } else {
        alert("La contraseña ingresada es incorrecta");
      }
    } else {
      alert("El usuario ingresado es incorrecto");
    }
    
    
    
  };



while (loginType != 0 && continuar) {
  switch (loginType) {
    case 1:
        alert("Bienvenido/a a la web de Cornelia Street Hotel");
        continuar = false;
        break;

    case 2:
      registrar();
      break;

    case 3:
     login();
     break
      


    default:
      alert("Por favor, elige una opción que sea válida");
      break;
  }
  if (continuar) {
    loginType = parseInt(
      prompt("\n1 Ingresar \n2 Registrar \n3 Iniciar Sesion "),
      
    );
  }
}



          /* function edadHuesped(){

            let edadHuesped= parseInt(prompt("Ingrese la edad del huésped"))
            if(edadHuesped >=18){
                alert("Puede hospedarse sin acompañante")
            }else if (edadHuesped < 18){
                alert("Necesita hospedarse con la autorizacion de un tutor/a o un acompañante mayor de edad")
            }
            console.log(edadHuesped)
           }    
          */ 
             
 
