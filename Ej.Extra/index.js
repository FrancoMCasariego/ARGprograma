let entrada = window.prompt("Ingrese su nombre: ");
let datos = entrada.split(" ");

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");

nombre.innerHTML = datos[0];
nombre.innerHTML = datos[1];