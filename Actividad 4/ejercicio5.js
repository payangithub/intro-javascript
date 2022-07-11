/*
    Ejercicio 5:
    Haciendo uso del For Loop, imprimir una lista del 1 al 100 y excluir un rango de 10 numeros,
    el inicio y fin del rango lo determinara el usuario.
*/

var rang_Ini=Number(prompt("Favor de ingresar el rango inicial:"))
var rang_Fin= Number(prompt("Favor de ingresar el rango final:"))

//Ciclo For
for (let i = 1; i <= 100; i = i + 1) {
    if (i < rang_Ini || i > rang_Fin) {
        //Imprimir 
        console.log(i);
    } else {
        //Excluir
        continue;
    }
}