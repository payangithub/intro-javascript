/*
    Ejercicio 2:
    Mediante una funcion, y dado un arreglo de enteros const numbers=[1,2,3,4,10,11], encuentra
    la suma de sus elementos.
*/
//Se crea funcion para sumar todos los elementos de una Array.
function sumaElementos(arreglo) {
    var total = 0;
    for (let index = 0; index < arreglo.length; index++) {        
        total = total + arreglo[index];
    }
    return total;
}

//Se declara Array constante.
const numbers = [1, 2, 3, 4, 10, 11];
//Se ejecuta la funccion de 'sumaElementos()' y se imprime la suma de todos sus elementos.
console.log(`La suma es: ${sumaElementos(numbers)}`);