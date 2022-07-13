/*
    Ejercicio 5:
    Escribe un metodo que retorne el elemento mayor del arreglo dado: arr=[45,56,32,98,1000,5,23].
*/

//Crear funcion para elegir el elemento mayor de un Array.
function elementoMayor(arreglo) {
    //Se ordena el arreglo mediante la funcion "sort" y se pasa a otro Array ya ordenado.
    var ordena = arreglo.sort(function(a,b){return (a-b)});
    //Se obtiene el total de elementos del arreglo.
    var totElementos = ordena.length;
    //Se retorna el ultimo elemento del arreglo, como ya se encuentra ordenado el mayor de los 
    //elementos se encuentra al final.
    return ordena[totElementos-1];
}

//Se define el Array.
var arr = [45,56,32,98,1000,5,23];
//Se imprime el mayor de los elementos del Array.
console.log(`El numero mayor del arreglo es: ${elementoMayor(arr)}`);