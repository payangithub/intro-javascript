/*
    Ejercicio 3:
    Por medio del ciclo For Iterar al array arreglo=[1,4,6,10,22,55,46,2,5,0] e imprimir cada 
    uno de los elementos de manera ordenada.
*/

//Declarar arreglo.
var arreglo = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];
//Metodo que los ordena automaticamente
//console.log(arreglo.sort(function(a,b){return a-b}));
var aux_elem;
var movimientos = 0;

//Metodo de Ordenacion Burbuja.
//Se crea el ciclo principal para recorrer el arreglo.
for (var i = 0; i < arreglo.length - 1; i++)
{
    //Se crea ciclo y se empieza desde el segundo elemento para compararlo con el primero.
    for (var j = 1; j < arreglo.length; j++) {
        // si el elemento anterior es mayor, hacemos el cambio
        if (arreglo[j] < arreglo[j - 1]) {   
            aux_elem = arreglo[j];
            arreglo[j] = arreglo[j - 1];
            arreglo[j - 1] = aux_elem;
            movimientos++;
        }
    }
}
//Impimir en cuantos movimientos se realizo el ordenamiento del arreglo.
console.log("Se logro en: "+movimientos+ " movimientos.")
//Imprimir arreglo
console.log(arreglo)