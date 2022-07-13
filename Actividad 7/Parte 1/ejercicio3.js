/*
    Ejercicio 3:
    Desarrolla un metodo para verificar si una palabra es un palindromo. Casos de prueba: const 
    word1='madam', const word2='computadora'.
*/

//Crear funcion para determinar si una palabra es "Palindromo".
function esPalindromo(palabra) {                
    var i = 0;
    var longitudCadena = palabra.length;
    //Se hace el ciclo pero con tope de la mitad de los caracteres para ir comparando la primer 
    //letra vs la ultima y la segunda vs la penultima y asi etc..
    while (i < (longitudCadena / 2)) {
        //Se utiliza la funcion "charAt" para obtener un caracter en base al index que se le mande.
        if (palabra.charAt(i) != palabra.charAt(longitudCadena - 1 - i)){
            return false;
        }
        i++;        
    }
    return true;
}

//Pedir al usuario que ingrese la palabra a determinar si va ser "Palindromo".
var palabra=prompt("Favor de ingresar la palabra a evaluar si es PALINDROMO:");
//Mandar llamar la funcion.
if (esPalindromo(palabra)){
    console.log("Si es Palindromo")
}else{
    console.log("No es Palindromo")
}