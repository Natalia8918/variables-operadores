// anotamos las temperaturas iniciales como guia
const celcius = 0;
const kelvin = 273.15;
const fahrenheit = 32;

// ingreso de temperatura por usuario en celcius
num1 = prompt ("Ingresa la temperatura que deseas calcular en grados celcius")

// Se pasan los grados celcius a kelvin y fahrenheit con sus respectivas formulas
document.write("La temperatura en celcius es: ")
document.write (num1)

document.write("La temperatura en Kelvin es: ")
document.write (kelvin + parseInt(num1))

document.write("La temperatura en Fahrenheit es: ")
document.write ( parseInt(num1 * (9/5))+ fahrenheit)
