/*
    Ejercicio 1:
    Construye un codigo bajo las siguientes reglas:
        *Itera arreglo=[1,4,6,10,22,55,46,2,5,0] utilizando un ciclo for.
        *Imprime en consola los valores que sean mayor que 3.
*/ 

//Declarar arreglo.
var arreglo = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];
//Ciclo for para recorrer el arreglo.
for(var i=0; i<arreglo.length; i++){
    //Imprmir los numeros mayor a 3.
    if (arreglo[i]>3){
        console.log(arreglo[i]);
    }else{
        continue;
    }
}