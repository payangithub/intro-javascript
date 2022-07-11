/*
    Ejercicio 2:
    
    Construye un codigo bajo las siguientes reglas;
        *Declara un arreglo vacio, con un ciclo While que se ejecute 5 veces, agrega los elementos
         al Array.
*/

//Se declara arreglo vacio.
var arreglo_vacio=[];
//Crear ciclo While 
var i=0;
while(i<5){
    //Asignar numero en turno al array
    arreglo_vacio.push(i+1);    
    //console.log(arreglo_vacio[i]);
    //Se incrementa contador
    i++;
}

//Se imprime el Array
console.log("Este arreglo se genero: "+arreglo_vacio);