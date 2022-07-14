// Ejercicios de Objetos y sus métodos básicos:


/**
    * Del siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
    * 
    1. Muestra en pantalla el valor de la propiedad name mediante dot notation       
    2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
    3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
 */
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };

    /********************************************
                 RESPUESTA 
    *********************************************/
    //R1:
        console.log(student.name);
    //R2:
        console.log(student['age']);
    //R3:
        student.name ='Steve Jobs';
        console.log(student);

/**
    * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra:
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/
    //Se declara Objeto Literal
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    let studentKeys = Object.keys(student)
    //console.log(studentKeys);
    /********************************************
                RESPUESTA 
    *********************************************/
   //Se configuran las propiedades del objeto studentKeys
    Object.defineProperties(studentKeys, {
        name : {
            value: 'David Rayy',
            writable: true,
            enumerable: true,
            configurable: true
        },
        sclass: {
            value: 'VI',
            writable: true,
            enumerable: true,
            configurable: true
        },
        rollno: {
            value: 12,
            writable: true,
            enumerable: true,
            configurable: true
        }
    });
    console.log(studentKeys);

/**
    * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
        
    /********************************************
                RESPUESTA 
    *********************************************/
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
       
    const validarPropiedad = (objeto, propiedad) => {

        if (objeto[propiedad] === undefined) {
            return  `No se encuentra la propiedad <<${propiedad}>>.`;
        } else {
            return `Si se encuentra la propiedad <<${propiedad}>>.`;
        }
    }
   
    //Se imprime la Arrow fuction para determinar si se encuentra la propiedad que se envia como parametro.
    console.log(validarPropiedad(student, 'name'));


/** 
    * Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
    * Imprima también el objeto antes o después de eliminar la propiedad. 
    * Objeto para usar:
        var student = {
            name: "David Rayy",
            sclass: "VI",
            rollno: 12
        };
*/
    /********************************************
                RESPUESTA 
    *********************************************/
    //Se declara Objeto Literal:
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    //Imprimir el objeto literal.
    console.log(student);
    //Eliminar la propiedad "rollno".
    delete student.rollno;
    //Imprimir el objeto literal sin la propiedad "rollno".
    console.log(student);

/**
    * Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
    * 
    * var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
    La nueva edad debe ser 35.
 */ 
    /********************************************
                RESPUESTA 
    *********************************************/
    //Se declara el objeto literal.
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
    //Imprimir objeto.
    console.log(student);
    //Modificar la propiedad "age" para que su valor = 35.
    student.age = 35;
    //Imprimir objeto ya actualizado.
    console.log(student);

/**
    * Escriba un programa para añadir una nueva propiedad al siguiente objeto:
    * var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
    La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.
 */
    /********************************************
                RESPUESTA 
    *********************************************/
    //Se declara el objeto literal.
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
    //Imprimir objeto.
    console.log(student);
    //Agregar al objeto la propiedad "pet".
    student['pet'] = ['cat','dog'];
    //Imprimir objeto despues de agregar la nueva propiedad
    console.log(student);

/**
    * Crea un código para llenar un objecto vacio:
    * 
    * const objeto = {}
    * 
    * Con las siguiente propiedades:
        * color
        * tamaño
        * peso
        * cantidad
        * 
*/
    /********************************************
                RESPUESTA 
    *********************************************/
    //Se crea objeto vacio.
    const objeto = {}

    Object.defineProperties(objeto, {
        color: {
            value: 'black',
            writable: true,
            enumerable: true,
            configurable: true
        },
        tamaño: {
            value: 'big',
            writable: true,
            enumerable: true,
            configurable: true
        },
        peso: {
            value: 110,
            writable: true,
            enumerable: true,
            configurable: true
        },
        cantidad: {
            value: 50,
            writable: true,
            enumerable: true,
            configurable: true
        }
    });
    console.log(objeto);


/*
    una función que reciba un objeto y un string…
    El string va a ser el nombre de una propiedad, y
    esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes
    la función debe retornar true o false
*/
    /********************************************
             RESPUESTA 
    *********************************************/
    //Se crea un Arrow Function.
    const validarPropiedad = (objecto, propiedad) => {
    
        if (objecto[propiedad]===undefined) {
            return false;
        }else{
            return true;
        }
    }

    //Crear objeto literal.
    var student = {
        name: "Payan",
        age: 36,
        job: "engineer"        
    };
    console.log(validarPropiedad(student,'job'));

/*
    Create an object that will be filled only by a function inside of it,
    and not from someone outside of it's function.. 
    example:
    let myObject = {
        myFunction: function ()... // This function is supposed to fill this object
    }

    myObject.myNewProp = "Hello world" // This should throw an exception or error because we don't want this object to be filled from outside...
    It supposed to be filled using it's own function
    Add any type of element on the object.. arrays, objects, int, strings, etc
*/

    /********************************************
             RESPUESTA 
    *********************************************/
    //Se crea Objeto Literal.
    let myObject = {
        //Se crea funcion interna en el objeto para crear y cargar los valores de cada propiedad del objeto.
        myFunction: 
            function cargar(pProfesion,pSexo,pEdad,pSueldo){
                Object.defineProperties(myObject,{
                    "profesion":{
                        value: pProfesion,
                        writable: true,
                        enumerable: true,
                        configurable: true
                    },
                    "sexo":{
                        value: pSexo,
                        writable: true,
                        enumerable: true,
                        configurable: true
                    },
                    "edad":{
                        value: pEdad,
                        writable: true,
                        enumerable: true,
                        configurable: true
                    },
                    "sueldo": {
                        value: pSueldo,
                        writable: true,
                        enumerable: true,
                        configurable: true
                    }  
                });
            }
    }
    //Ejecutar la funcion del objeto y cargar todas sus propiedades y sus valores deacuerdo a los parametros que se le envia.
    myObject.myFunction("Ingeniero","Masculino",36,30000);
    //Imprir el Objeto
    console.log(myObject);    

/*
    var simpleExercise = [{a: 11, b:224, name: "M48 Bulldog"}, {a:23, b:56, name: "Object 140"}, {a: 32, b:75, name: "T57 Heavy"}];
    Hacer una función para que reciba ese arreglo de objetos
    y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
    // al String "name" para que devuelva algo así:
//     ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]*/

    /********************************************
         RESPUESTA 
    *********************************************/
    //Se define el arreglo de objetos.
    var simpleExercise = [{ a: 11, b: 224, name: "M48 Bulldog" }, 
                        { a: 23, b: 56, name: "Object 140" }, 
                        { a: 32, b: 75, name: "T57 Heavy" }
                        ];
    
    //Solucion 1:
        //Hacer funcion que reciba un Arreglo de Objetos utilizando metodo "Map".
        let sumConcatProp = simpleExercise.map(function(element) {
            //Imprimir la suma de a+b y concatenar name.
            return `${element.a + element.b} -=- ${element.name}`;
        });            
        //Se imprime el Array 
        console.log(sumConcatProp);
        //Result: ["Susan Steward", "Daniel Longbottom", "Jacob Black"]
    //Solucion 2:
        //Hacer funcion que reciba un Arreglo de Objetos utilizando metodo "Map" version simplificada en 1 linea.
        const resultado = simpleExercise.map((array) => `${array.a + array.b} -=- ${array.name}`);
        //Se imprime el Array 
        console.log(resultado);
        //Result: [ '235 -=- M48 Bulldog', '79 -=- Object 140', '107 -=- T57 Heavy' ]