/*
    Ejercicio 4:
    Usando for, crea un programa que imprima en consola los numeros impares del 1 al 50.
*/
//Ciclo For
for (let i = 1; i <= 50; i = i + 1) {
    if((i%2)){
        //Es impar
        console.log(i);
    }else{
        //Es par
        continue;
    }    
}