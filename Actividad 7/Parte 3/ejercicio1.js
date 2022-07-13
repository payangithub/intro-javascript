/*
    Ejercicio 1:
    Escriba una funcion llamada mutiply que acepten dos parametros. Si a la funcion se le pasan ambos parametros,
    deberia devolver el producto de los dos. Si a la funcion solo se le pasa un parametro, deberia devolver una funcion
    a la que luego se le puede pasar otro parametro para devolver el producto.
*/
//Se crea la funcion de forma Arrow Function.
const multiply = (parametro1, parametro2) => {
    //Validar que se halla ingresado almenos un parametro.
    if(parametro1===undefined){
       return "No se proporcionaron parametros.Resultado Vacio.";
    }else if(parametro2===undefined){ //Se si manda un solo parametro se le pone el segundo en codigo duro.
        //Se implementa la recusrividad mandandose llamar asi misma.
        return multiply(parametro1,20);
    }else{ //Si vienen los dos parametros se retorna el producto.        
        return parametro1 * parametro2;
    }  
}
//Se imprime el resultado con cero parametros 
console.log(multiply());
//Se imprime el resultado con 1 parametro
console.log(multiply(8));
//Se imprime el resultado con dos parametros
console.log(multiply(8,3));