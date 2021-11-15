// Solicitud de Números al usuario
const dias = window.prompt('Ingrese Numero de días que desea calcular');
const dias_int = parseInt(dias);

// Operacion
const AñosSemanasDias = function (diastranscurridos) {
    const años = Math.floor((diastranscurridos / 365) ?? 0);
    const RestanteMenosAños = diastranscurridos - (365 * años);
    const semanas = Math.floor((RestanteMenosAños >= 0 ? RestanteMenosAños / 7 : diastranscurridos / 7) ?? 0);
    const dias = (RestanteMenosAños >= 0 ? RestanteMenosAños % 7 : diastranscurridos % 7) ?? 0;
    return `${años} Años con ${semanas} Semanas y ${dias} dias`;
}

// Resultado
const resultado = AñosSemanasDias(dias_int);

// se le informa el resultado al usuario
window.alert(resultado);
document.write("<p> el numero ingresado corresponde a ",resultado,"</p>")