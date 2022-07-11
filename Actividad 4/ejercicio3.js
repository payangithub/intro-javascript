/* 
    Ejercicio 3:
    Crea el mismo problema del ejercicio 2, pero ahora usando Do While.    
*/

var numero = Number(prompt("Favor de introducir un numero:"))
var multiplo = 5
let i = 1
//Armar ciclo con Do While.
do{
    //Validar si es multiplo de 5 se imprimira de lo contrario se ira por el que sigue.
    if ((i % multiplo)) {
        //alert("Continue:"+i);
        //Saltar a la siguiente iteracion.
        //continue;
    } else {
        //alert(i);
        console.log('Con Do While Los multiplos de 5 son: ', i);
    }
    i = i + 1;
}while (i <= numero)