/*
    Ejercicio 2:
    Basandose en la documetacion de MDN para arrays y objects, realizar los ejercicios.
*/
/*
## Problema 1:
    Cuadre el valor de cada elemento en el array.Suponga que solo obtendrá números en la array de entrada.
    `const input = [ 1, 2, 3, 4, 5 ];`
    Resultado esperado:
    `[ 1, 4, 9, 16, 25]`
*/
    //RESPUESTA:
    //Definir Array.
    const input = [1, 2, 3, 4, 5];
    //Array Auxiliar
    const arrayAux=[];
    //Se crea ciclo "forEach" para calcular la raiz cuadrada de cada elemento del Array.
    input.forEach(element => {
        arrayAux.push(element * element) ;
    });
    //Se imprime arrayAux con el resultado.
    console.log(arrayAux);


/*
    ## Problema 2:
    Calcule los valores de la media y la mediana de los elementos numéricos del siguiente arreglo.
    `const input = [12, 46, 32, 64];`
    Resultado esperado:
    `{ mean: 38.5, median: 32 }`
    Solución
*/
    //RESPUESTA:
    //Se crea funcion para obtener la "media y la mediana" de los elementos que contiene un arreglo que se manda como parametro.
    function getMediaMediana(arr) {
        const suma = [];
        var media =0;
        var mediana = 0;
        //var posicion;
        for (let i = 0; i < arr.length; i++) {
            media = media + arr[i];        
        }
        media = Math.floor(media/arr.length);

        let posicion = arr.length/2;
        mediana=arr[posicion];

        return `La media es: ${media} La mediana es: ${mediana}`;
    }
    //Se crea Array con elementos.
    const input = [12, 46, 32, 64];
    //Se imprime la media y la mediana del array proporcionado.
    console.log(getMediaMediana(input));

/*
    ## Problema 3
    Si la entrada dada es un número, debe devolver el factorial de ese número.El factorial de un número natural n 
    es el producto de los enteros positivos menores o iguales a n.Entonces, 2! = 2, 3! = 6, 4! = 24 y así sucesivamente.
    Caso de prueba:
    `const input = 6;
    Result: `720`
*/
    //RESPUESTA:
    //Se crea funcion para calcular el factorial del numero 6.
    function factorial(num) {
        if (num < 0)
            return -1;
        else if (num == 0)
            return 1;
        else {
            //Se utiliza recursividad.
            return (num * factorial(num - 1));
        }
    }
    //Se declara y se asigna variable de entrada.
    const input = 6;
    //Se imprime el fatorial de 6.
    console.log(factorial(input));