let v1 =12;
let v2 =10;
let v3 =4;
let v4 =6;

let sumaVar = v1+v2;
let restaVar= v4-v3;
let multVar= sumaVar*restaVar;

let esPar = (multVar % 2) == 0;

console.log("Mis variables iniciales fueron: ",{v1}," ",{v2}," ",{v3}," y ",{v4},". La respuesta a verificar si el resultado final es par es: ",{esPar})