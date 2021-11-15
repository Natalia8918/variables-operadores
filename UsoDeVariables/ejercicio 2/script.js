// Se crean dos variables para que el usuario ingrese el numero
var numero1 = prompt("Ingrese el primer numero entero: ");
var numero1 = parseInt (numero1);
var numero2 = prompt("Ingrese el segundo numero entero: ");
var numero2 = parseInt (numero2);

// Se realizan distintas operaciones con las variables 
var resultado1 = (numero1+numero2);
var resultado2 = (numero1-numero2);
var resultado3 = (numero1/numero2);
var resultado4 = (numero1*numero2);
var resultado5 = (numero1%numero2);

// Se muestra el resultado en la consola y pagina web
alert("La suma es: "+resultado1)
console .log(resultado1);
document.write("<p> La suma es : ",resultado1,"</p>")

alert("La resta es: "+resultado2)
console .log(resultado2);
document.write("<p> La resta es : ",resultado2,"</p>")

alert("La división es: "+resultado3)
console .log(resultado3);
document.write("<p> La división es : ",resultado3,"</p>")

alert("La multiplicación es: "+resultado4)
console .log(resultado4);
document.write("<p> La multiplicación es : ",resultado4,"</p>")

alert("El resto es: "+resultado5)
console .log(resultado5);
document.write("<p> El resto es : ",resultado5,"</p>")

