// PROMEDIO
// Se crean 5 variables con sus respectivos valores ingresados por el usuario
var nota1 = prompt("Ingrese primera nota");
var nota2 = prompt("Ingrese segunda nota");
var nota3 = prompt("Ingrese tercera nota");
var nota4 = prompt("Ingrese cuarta nota");
var nota5 = prompt("Ingrese quinta nota");

// Se suman las variables y el resultado se divide en 5
var resultado = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)+parseFloat(nota5))/5;
alert("Su promedio es: "+resultado)

// Se muestra el resultado en la consola y web
console .log(resultado);
document.write("<p> Su promedio es : ",resultado,"</p>")