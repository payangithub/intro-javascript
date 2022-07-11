/*
    Ejercicio 2:
    Acomoda el arreglo de menor a mayor:
    var arr=[4,6,1,0,8,2,45,11,5,33,50,101]
*/

//Declarar arreglo
var arr = [4, 6, 1, 0, 8, 2, 45, 11, 5, 33, 50, 101];
//Ordenar arreglo con el metodo sort e imprimirlo.
console.log(arr.sort(function(a,b){return (a-b)}));