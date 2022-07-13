/*
    Ejercicio 2:
    Crea una funcion para calcular la sucesion Fibonacci.
*/
/* function Fibonacci(numero) {
    var aux = [];
    aux[0] = 0;
    aux[1] = 1;
    for (var i = 2; i < numero; i++) {
        aux[i] = aux[i - 2] + aux[i - 1];
    }
    //Falta poner la recursividad OJO.

    return aux;
}
//var f = Fibonacci(10);
var secuenciaFibonacci=prompt("Favor de proporcionar el numero para la secuencia Fibonacci:")
console.log(Fibonacci(secuenciaFibonacci)); */

//Funcion recursiva Fibonacci.
const fibonacci = (numero) =>{
    if(numero<2) return numero;

    return fibonacci(numero-1)+fibonacci(numero-2);
}
console.log(fibonacci(2));

//Ejemplo seccuencia Fibonacci [0, 1, 1, 2, 3, 5, 8, 13, 21,...]
//Se crea la funcion de forma Arrow Function.
const Fibonacci = (secuencia) => {
    //Se valida si la secuencia es menor que 2 se retorna la secuencia que corresponde al resultado de la formula.
    if (secuencia < 2){
        return secuencia;        
    } 
    //Se implementa la recursividad para llamarse a si mismo y sumar los dos numeros anteriores de la secuencia.
    return Fibonacci(secuencia - 2) + Fibonacci(secuencia - 1);
}

//Se pide al usuario que proporcione un numero de secuencia Fibonnacci para calcular su valor.
var secuenciaFibonacci = prompt("Favor de proporcionar el numero para la secuencia Fibonacci:")
console.log(Fibonacci(secuenciaFibonacci));