/*
    ########################################################################### 
                                    Problema 1:
    ###########################################################################   
    Crea una función para encontrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia. 
    Retorna como resultado un objeto indicando las edades de cada miembro, y la diferencia de edad.
        
    jsx
    const Family = [
        {
        name: 'John',
        age: 13
        },
        {
        name: 'Mark',
        age: 56,
        },
        {
        name: 'Rachel',
        age: 45,
        },
        {
        name: 'Nate',
        age: 67,
        },
        {
        name: 'Jeniffer',
        age: 65,
        }
    ];

    Expected result:
    jsx
        {
        oldest: 67,
        youngest: 13,
        'age-difference': 54
    }
*/
    //RESPUESTA:
    //Se define Array de objetos.
    const Family =  [
                        {
                        name: 'John',
                        age: 13
                        },
                        {
                        name: 'Mark',
                        age: 56,
                        },
                        {
                        name: 'Rachel',
                        age: 45,
                        },
                        {
                        name: 'Nate',
                        age: 67,
                        },
                        {
                        name: 'Jeniffer',
                        age: 65,
                        }
                    ];
    
    //Se utiliza el metodo "map" para obtener todos las edades y almacenarlas en un array.     
    let arrayAuxEdad = Family.map(element=>{       
        return element.age;
    })
    //console.log(arrayAuxEdad);
    //Se define objeto.
    var rep={};
    rep['oldest']=Math.max(...arrayAuxEdad);
    //let old = Math.max(...arrayAuxEdad)
    rep['youngest']=Math.min(...arrayAuxEdad);
    //let joven = Math.min(...arrayAuxEdad)
    rep['age-difference']=(Math.max(...arrayAuxEdad)-Math.min(...arrayAuxEdad));
    //Se imprime resultado en un objeto.
    console.log(rep);    

/* 
    ########################################################################### 
                                    Problema 2:
    ###########################################################################    
    Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos.
    `const numbers = [ 1, -4, 12, 0, -3, 29, -150];` 
*/
    //RESPUESTA:
        //Se define arreglo.
        const numbers = [ 1, -4, 12, 0, -3, 29, -150];
        //Se utiliza el metodo "filter" para obtener todos los numeros positivos del arreglo mas el metodo "reduce" para
        //sumar todo los numeros positivos.
        console.log(`La suma de los numeros positivos es: ${numbers.filter(numero=> numero>=0).reduce((param1,param2)=> param1+param2)}`);        

/*
    ########################################################################### 
                                    Problema 3:
    ###########################################################################
    Cuente las ocurrencias de distintos elementos en la matriz 2D dada. La entrada dada es una matriz, cuyos elementos 
    son matrices de cadenas. El resultado es un objeto cuyos nombres de propiedad son los valores de las matrices y su 
    valor es el número de sus ocurrencias.
    ```jsx
    const input = [
        ['a', 'b', 'c'],
        ['c', 'd', 'f'],
        ['d', 'f', 'g'],
    ];
    ```
    Resultado esperado:
    ```jsx
    {
        a: 1,
        b: 1,
        c: 2,
        d: 2,
        f: 2,
        g: 1,
    }
    ```
*/
    //RESPUESTA:
    //Se define array.
    const input = [
        ['a', 'b', 'c'],
        ['c', 'd', 'f'],
        ['d', 'f', 'g'],
      ];    
    //Se declara Array de trabajo para el manejo de la informacion.
    let arrayElemento=[]    
    //Se crea ciclo para para recorrer el Array principal.
    for (let i = 0; i < input.length; i++) {
        //Se obtiene el valor de la primer posicion.
        let array= input[i];    
        //Se crea ciclo para barrer el arreglo.    
        for( let j=0; j<array.length;j++){
            //Se obtiene el valor de cada elemento.
            let elemento = array[j];
            //Se utiiliza el metodo "indexof" para determinar si existe o no el elemento.
            if (arrayElemento.indexOf(elemento)==-1 ){
                //Se inserta el elemento que no este repetido.
                arrayElemento.push(elemento)
            }               
        }            
    }
      
    //Se define array para almacenar las ocurrencias de cada elemento e immprimir el resultado.
    let arrayContador=[];
    let barridodata = arrayElemento.forEach(element=>{        
        //Se manda llamar el metodo "flat" para aplanar la matriz a una dimension y posteriormente al metodo "Filter" para 
        //buscar cada elemento y determinar cuantas ocurrencias tiene en el array principal.
        let ocurrencias= input.flat().filter(fil=>fil==element);       
        //Se almacena el total de ocurrencias.
        arrayContador[element]=ocurrencias.length
    })
    //Se imprime Resultado.
    console.log(arrayContador);

/* 
    ########################################################################### 
                                    Problema 4:
    ###########################################################################
    Escriba una función de JavaScript que tomará una serie de números almacenados
    y encontrará el segundo número más bajos y segundos más altos, respectivamente
    del siguiente arreglo:  * `const arr = [3,4,6,1,5,2,9,10,23,12]` *
    
    jsx
    const arr = [3,4,6,1,5,2,9,10,23,12]
*/
    //RESPUESTA:
    //Se define Array.
    const arr = [3, 4, 6, 1, 5, 2, 9, 10, 23, 12];
    //Crear funcion para ordenar array de manera ascendente.
    function ordenarAscArray(arr){              
        return arr.sort(function (a, b) { return a - b });       
    }
    //Se define Array aux.
    let arrayAux = ordenarAscArray(arr);
    //Imprimir array ordenado de manera ascendente.
    console.log(`Array ordenado de manera ASC: ${arrayAux}`);    
    //Imprimir el segundo elemento mas bajo.
    console.log(`Segundo Elemento mas Bajo: ${arrayAux[1]}`);
    //Imprimir el segundo elemento mas alto.
    console.log(`Segundo Elemento mas Alto: ${arrayAux[arrayAux.length-2]}`);  

/*
    ########################################################################### 
                                    Problema 5:
    ###########################################################################    
    De la siguiente estructura de datos, contesta las siguientes preguntas creando un programa para cada una.

    ```jsx
    let info = [
        {
            nombre: "Diego",
            materias: [
                {
                    nombreMateria: "español",
                    calificacion: 100
                },
                {
                    nombreMateria: "matemáticas",
                    calificacion: 70
                },
                {
                    nombreMateria: "ciencias",
                    calificacion: 55
                }
            ]
        },
        {
            nombre: "Jorge",
            materias: [
                {
                    nombreMateria: "español",
                    calificacion: 60
                },
                {
                    nombreMateria: "matemáticas",
                    calificacion: 65
                },
                {
                    nombreMateria: "ciencias",
                    calificacion: 80
                }
            ]
        }
    ]

    1. Retorna en un array las calificaciones de todos los estudiantes.
    2. Retorna el promedio de cada uno de los alumnos, devolviendo un arreglo con objetos como esto:

    ```jsx
    [
    { 
        "Jorge": {
        "promedio": 8.6
        }
    },
    {
        "Alumno": {
        "promedio": 5.5
        }
    },
    {
        "Alumno": {
        "promedio": 5.5
        }
    }
    ]
    ```

    1. Retorna la calificación mas baja
    2. Retorna la calificación mas alta
*/    
    //RESPUESTA:
    //Se crea la estructura de datos "info".
    let info = 
    [
        {        
            nombre: "Diego",
            materias: [
                {
                    nombreMateria: "español",
                    calificacion: 100
                },
                {
                    nombreMateria: "matemáticas",
                    calificacion: 70
                },
                {
                    nombreMateria: "ciencias",
                    calificacion: 55
                }
            ]
        },
        {
            nombre: "Jorge",
            materias: [
                {
                    nombreMateria: "español",
                    calificacion: 60
                },
                {
                    nombreMateria: "matemáticas",
                    calificacion: 65
                },
                {
                    nombreMateria: "ciencias",
                    calificacion: 80
                }
            ]
        }
    ];

    //R1: Retorna en un array las calificaciones de todos los estudiantes.
        //Se crea funcion para obtener las calificacioes de todos los alumnos.
        function getCalf(structDat) {
            const arrayAux = [];               
            structDat.forEach(element => {
                for (let i = 0; i < element.materias.length; i++) {
                    arrayAux.push(`${element.nombre} - ${element.materias[i].nombreMateria} - ${element.materias[i].calificacion}`);       
                }
            });       
            return arrayAux;
        }
        //Se imprime todas las califiaciones de todos los alumnos incluidos en la estructura de datos.
        console.log(getCalf(info));
    
    //R2: Retorna el promedio de cada uno de los alumnos, devolviendo un arreglo con objetos
        //Se crea funcion para obtener promedio de cada alumno.
        function getProm(structDat) {
            const arrayAux = [];        
            structDat.forEach(element => {                
                //arrayAux.push(`${element.nombre} - ${element.materias[j].calificacion}`);  
                for (let i = 0; i < element.materias.length; i++) {                    
                    //const arrayMateria =[];
                    arrayAux.push(element.materias[i].calificacion);
                    //arrayAux.push(`${element.nombre} - ${element.materias[j].calificacion}`);                    
                }
            });
            return arrayAux;
        }

        //let getPromx = info.map((items)=>items.materias)
        //Se imprime el promedio de todos los alumnos incluidos en la estructura de datos.
        console.log(getProm(info));
                
        //1. Retorna la calificación mas baja        
        //2. Retorna la calificación mas alta
        //Se crea funcion para obtener las calificacioes de todos los alumnos.
        function getOrd(structDat) {
            const arrayAux = [];
            structDat.forEach(element => {
                for (let i = 0; i < element.materias.length; i++) {
                    arrayAux.push(element.materias[i].calificacion);
                }
            });
            //Se ordena array 
            return arrayAux.sort(function(a,b){return (a-b)});             
        }
        //Se imprime todas las calificaciones de todos los alumnos incluidos en la estructura de datos.
        //console.log(getOrd(info));
        let array = getOrd(info);
        //Retorna la calificacion mas baja y la mas alta.
    	console.log(`Calificacion mas Baja:${array[0]} - Calificacion mas Alta:${array[array.length-1]}`);

/*
    ########################################################################### 
                                    Problema 6:
    ###########################################################################    
    Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.
    `matriz = [7,2,5,3,5,3]`
    `br = [7,2,5,4,6,3,5,3]`
    Los números que faltan en arr son `[4,6]`
*/
    //RESPUESTA
    //Se definen las dos matrices.
    let matriz = [7,2,5,3,5,3];
    let br = [7,2,5,4,6,3,5,3];

    //Se crea funcion para comparar los dos array y obtener los elementos que no coinciden.     
    function elemntNoCoinciden(matriz, br){
        //Se declara array auxiliar.
        const arrayAux = [];    
        //Ciclo para recorrer arreglo.                            
        for (let i = 0; i < br.length; i++) {    
            //Utilizamos el metodo "indexOf" para buscar el elemento en turno y si no existe se almacena en el array aux.
            if (matriz.indexOf(br[i]) === -1){
                arrayAux.push(br[i]);                  
            }                    
        }
        //Retornamos la respuesta en el Array Aux.
        return arrayAux;
    }
    //Imprimimos el resultado.
    console.log(elemntNoCoinciden(matriz,br));

/*
    ########################################################################### 
                                    Problema 7:
    ###########################################################################    
    ** Objetos - Recursividad:**
            Dada la siguiente estructura de datos, encuentra la cantidad de veces que está la propiedad`id`                
    const root2 = {
        id: '123',
        child: [{
            id: '234',
            child: [{
            test: {
                id: 2
            }
            }]
        }],
        child2: [{
            id: '345',
            child3: {
            id: '534'
            }
        }]
    };
    ```    
*/
    //************* RESPUESTA
        //Se defina la estrutura de datos.
        const root2 = {
            id: '123',
            child: [{
                    id: '234',
                    child:[{
                            test:{
                                   id: 2
                                 }
                          }]
                   }],
            child2: [{
                      id: '345',
                      child3: {
                                id: '534'
                              }
                    }]
        };

        function contarPropiedad(structuraDat,busqueda) {
            //Se define el array aux.
            const arrayAux = [];
            //Barrer el primer nivel de la estructura de datos, y almacenar todas las propiedades en el array aux.
            arrayAux.push(Object.keys(structuraDat))
            //Obtener el segundo nivel de la estructura de datos, y almacenar todas las propiedades en el array aux.            
            arrayAux.push(Object.keys(structuraDat.child[0]));
            //Obtener el tercer nivel de la estructura de datos, y almacenar todas las propiedades en el array aux. 
            arrayAux.push(Object.keys(structuraDat.child[0].child[0].test));

            //Obtener el segundo nivel de la estructura de datos, y almacenar todas las propiedades en el array aux.
            arrayAux.push(Object.keys(structuraDat.child2[0]));
            //Obtener el tercer nivel de la estructura de datos, y almacenar todas las propiedades en el array aux. 
            arrayAux.push(Object.keys(structuraDat.child2[0].child3));

            //Pasar el arreglo a una linea con el metodo "flat()"
            let unaLinea = arrayAux.flat();
                       
            //Despues con el metodo "Filter" busco la propiedad "id" y con el length obtengo el total de coincidencias.
            return unaLinea.filter(elemento => elemento === busqueda).length;
        }

        //console.log(Object.keys(root2));
        console.log(`El total de coincidencias de la propiedad <<ID>> es: ${contarPropiedad(root2,"id")}`);        