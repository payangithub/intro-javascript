/*
    Ejercicio 1:
    Crear una funcion que recibe 2 parametros(una oracion y la palabra a buscar). Retornar true o
    false en caso de que una oracion contenga una palabra dada, es decir, si yo mando "Hola mundo"
    y mando la pabra a buscar "perro" me debe retornar un false. En cambio si mando "mundo" entonces
    deber retornar "true".
*/

//Se crea la funcion para buscar la palabra enviada como parametro.
function encontrarPalabra(oracion,buscar) {
    //Se utiliza la funccion indexOf para buscar una palabra en la oracion enviada como parametro.
    var resultado = oracion.indexOf(buscar);

    if (resultado >= 0) { 
        return true; //Si existe la palabra.
    } else {
        return false; //Si es negativo el numero del resultado, no existe la palabra.
    } 
}

//Pedir al usuario el parametro de la cadena donde se buscara la palabra.
var cadena =prompt("Favor de ingresar la cadena:");
//Pedir la palabra a buscar.
var palabra =prompt("Favor de especcificar la palabra a buscar:");

var respuesta = encontrarPalabra(cadena,palabra);

//Validadr si se encontro la palabra, si es true(si se encontro), si es false(no se encontro).
if(respuesta){
    console.log("Si se encontro.")
}else{
    console.log("No se encontro.")
}