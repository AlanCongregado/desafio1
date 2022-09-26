/* calcular cuanto cobrará un vendedor teniendo en cuenta que tiene una comision de 5% sobre las ventas totales*/

/* function sueldoVendedor(){
let sueldoFijo = parseInt(prompt("Ingrese venta total del vendedor"));
let comision = 0.05;
let sueldoTotal = sueldoFijo + (sueldoFijo * comision)
return sueldoTotal;
}

sueldoVendedor() */

/* programa para determinar si un alumno "promociona","aprueba" o "reprueba" */

/* let nota = parseFloat(prompt("Ingrese la nota del alumno"))

if (nota < 4){
    console.log("Reprobado");
} else if (nota <= 7){
    console.log("Aprobado");
} else if(nota < 7 || nota <= 10) {
    console.log("Promociona");
} else{
    console.log("Nota invalida");
} */

/* Pedir 10 números y mostrar el mayor por pantalla */

/* let mayor = 0;

for (let i = 0; i < 10; i++) {
    let numeroUsuario = parseInt(prompt("Ingrese un número"))
    if (numeroUsuario > mayor) {
        mayor = numeroUsuario;
    }
} console.log(mayor);
 */

/* Contar hasta 50 de 5 en 5 */

/* let numero = 0;

while (numero <= 50) {
    console.log(numero);
    numero +=5;
} */

/* Desafio 2 */
/* Un login para inicio de sesion a un e-commerce de productos de gimnasio/ crossfit */
let usuario = prompt("Ingrese su nombre de usuario");
let pinUsuario = "1287";
let ingresar = false;

function saludar(usuario) {
  let saludo = `Bienvenido ${usuario}`;
  return saludo;
}

for (let i = 2; i >= 0; i--) {
  let pinIngresado = prompt("ingrese su pin");
  if (pinIngresado == pinUsuario) {
    alert(saludar(usuario));
    ingresar = true;
    break;
  } else {
    alert("Error. te quedan " + i + " intentos");
  }
}

if (ingresar == true) {
  let opcion = prompt(
    "que vas a comprar? \n1.disco de 5kg=$200 \n2.disco de 10kg=$300 \n3.disco de 15kg=$400m \n4.disco de 20kg=$500. \nsi queres salir presioná x."
  );
  let cantidad = parseInt(prompt("Cuantos discos vas a llevar?"));
  let disco5 = 200;
  let disco10 = 300;
  let disco15 = 400;
  let disco20 = 500;
  let iva = 1.21;
  function total(a, b, c) {
    let importeTotal = a * b * c;
    return importeTotal;
  }
  while (opcion != "x" || opcion != "X") {
    switch (opcion) {
      case "1":
        alert(
          "El total de tu compra con IVA es de: $" +
            total(cantidad, disco5, iva)
        );
        break;
      case "2":
        alert(
          "El total de tu compra con IVA es de: $" +
            total(cantidad, disco10, iva)
        );
        break;
      case "3":
        alert(
          "El total de tu compra con IVA es de: $" +
            total(cantidad, disco15, iva)
        );
        break;
      case "4":
        alert(
          "El total de tu compra con IVA es de: $" +
            total(cantidad, disco20, iva)
        );
        break;

      default:
        alert("opcion no válida");
        break;
    }
  }
}
