/* 
    Ejercicio 2:
    Usando While crea un programa que pregunte al usuario un numero. Mostrar los numeros
    que son multiplos de 5 desde 1 hasta el numero introducido por el usuario.
*/

var numero = Number(prompt("Favor de introducir un numero:"))
var multiplo = 5
let i=1
//Armar ciclo con While.
while(i<=numero)
{
    //Validar si es multiplo de 5 se imprimira de lo contrario se ira por el que sigue.
    if ((i%multiplo))
    {
        //alert("Continue:"+i);
        //Saltar a la siguiente iteracion.
        //continue;
    }else{
        //alert(i);
        console.log('Con While los multiplos de 5 son: ',i);
    } 
    i=i+1;
}

