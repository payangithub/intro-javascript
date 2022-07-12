/*
    Ejercicio 4:
    Crea un programa donde cuentes el numero de ocurrencias que existen de una letra en una cadena.
    Considera la cadena de texto y la letra a buscar como parametros.
*/

//Se crea funcion para buscar un caracter en una cadena de caracteres.
function buscarCaracter(cadena,caracter) {    
    //Se crea un Array vacio para insertar el numero contador tantas veces como se repita.    
    var contenedor = [];
    //Se crea ciclo para recorrer la cadena y busccar el caracter.
    for (var i = 0; i < cadena.length; i++) {
        //Solo si lo encuentra inserta el contador.
        if (cadena[i].toLowerCase() === caracter) contenedor.push(i);
    }
    //Se retorna el tamaño del Array, para determinar cuantas veces encontro el caracter.
    return contenedor.length;    
}

//Solicitar al usuario que proporcione la cadena donde se desea buscar el caracter.
var cadena=prompt("Favor de ingresar la cadena:");
//Solicitar el caracter a buscar.
var caracter=prompt("Favor de ingresar el caracter a buscar:");

//Imprimer cuantas veces se encontro el caracter.
console.log(buscarCaracter(cadena,caracter)+ ' Veces');