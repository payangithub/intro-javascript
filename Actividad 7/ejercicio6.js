/*
    Ejercicio 6:
    Crea un programa, el cual sirva para convertir temperaturas. De Celcius-Farenheit y viceversa.
    Utiliza las expresiones matematicas necesarias para la conversion. Que dicho programa recibe
    como argumentos las temperaturas y regresa el resultado imprimiendo en pantalla la conversion.
    Tu solucion es libre de logica.

    Formulas:
    1.-Para convertir de ºC a ºF use la fórmula: ºF = ºC x 1.8 + 32. 
    2.-Para convertir de ºF a ºC use la fórmula: ºC = (ºF-32) ÷ 1.8
*/
//Se crea funcion para convertir temperatura de Celsius a Farenheit.
function gradosCelsiusFarenheit(celsius){
    var conversion = celsius*1.8 + 32 ;
    return conversion;
}
//Se crea funcion para convertir temperatura de Farenheit a Celsius.
function gradosFarenheitCelsius(farenheit) {
    var conversion = (farenheit-32) / 1.8;
    return conversion;
}

//Pedir al usuario los grados Celcius a convertir a Farenheit.
var gradosCelsius=prompt("Favor de ingresar los grados Celsius:");
console.log(`La conversion a Farenheit es: ${gradosCelsiusFarenheit(gradosCelsius)}`);

//Pedir al usuario los grados Farenheit a convertir a Celcius.
var gradosFarenheit = prompt("Favor de ingresar los grados Farenheit:");
console.log(`La conversion a Celsius es: ${gradosFarenheitCelsius(gradosFarenheit)}`);