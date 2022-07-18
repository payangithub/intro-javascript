let estudiantes =['Cesar','Alejandra','Claudia','Edgar'];
estudiantes[1] = 'Mario';
estudiantes[6] = 'Jared';
//console.log(estudiantes[6])
console.log(estudiantes) 


//Necesitamos imprimir en una lista numerada todos los estudiantes. ITERANDO EN EL ARRAY

let estudiantes = ['Cesar', 'Alejandra', 'Claudia', 'Edgar'];
let frutas = ['Pera','Manzana','Fresa'];

for(let i=0; i<estudiantes.length;i++)
{
    console.log(`${i+1}-${estudiantes[i]}`);
} 

//**************Funciones 

//estructura function declaration

function nombreFunction(parametro1, parametro2, ...) {
    //body de la funcion
    return resultado     
}

//ejecutar dicha funcion:
nombreFunction(2,5,7)

//Crear una funcion que determina si una persona puede o no entrar a la disco:

function evaluarEdad(nombre,edad){
    if(edad>=18){
        console.log(`Si puede entrar ${nombre}`)
    }else{
        return false
    }
}

evaluarEdad('Payan',36);

//arrow function:
let entrarDisco=(nombre,edad)=>{
    if (edad >= 18) {
        console.log(`Si puede entrar ${nombre}`)
    } else {
        return false
    }
}

// arrow function:
let sumNumbers =(a,b)=>{
    const sum=a+b
    return sum/2
}


//objetos:

//declarar un objeto literal 
const obj ={
    color: 'verde',
    edad: 2,
    peso: 5,
    'nombre-planta': 'monstera'
}

//acceder a las prop del obj -notacion de punto
console.log(obj.edad);

//corchetes 
console.log(obj['nombre-planta']);

//modificar el valor de una prop
obj.edad =3;
console.log(obj);
    
//agregar nueva prop
obj['pais-origen'] = 'Mexico';
console.log(obj);

//borrar una propiedad
delete obj.edad;
console.log(obj);

//define properties
const car ={}

Object.defineProperties(car,{
    color:  {        
        value: 'white',
        writable: true,
        enumerable: true,        
        configurable: true
    },
    //Faltan mas propiedades 
    //...............
}) 

//crear un arreglo de objetos 
const transformers =[
    {
        name:'Optimus Prime',
        team: 'Autobot',
        form: 'Trailer'
    },
    {
        name: 'Bumblebee',
        team: 'Autobot',
        form: 'Camaro'
    },
    {
        name: 'Megatron',
        team: 'Decepticon',
        form: 'Jet'
    }
]

/* //Obtener los nombres de cada uno de los transformers:
function getNames(arr){
    const names=[];
    for(let i=0;i<arr.length;i++){
        names.push(arr[i].name);
    }
    return names;
}

console.log(getNames(transformers)); 

//map: retorna un nuevo arreglo
const names = transformers.map((transformers) => transformers.name);
console.log(names); */

//filter: obtener los trasformers que son decepticons
function getTeam(arr) {
    const team = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].team=='Decepticon'){
            team.push(arr[i]);
        }        
    }
    return team;
}

console.log(getTeam(transformers));

//filter:
PENDIENTE 



//Ejemplo de for..in
    const obj={
        a:1,
        b:2,
        c:3,
        d:4
    };

    for(const key in obj){
        console.log(obj[key])
    }
    //Result:
    /*
        1
        2
        3
        4 
    */

//Ejemplo for..of (Sirve solo para Array y String)
    const array =['a','b','c','d'];
    for(const item of array){
        console.log(item);
    }
    //Result:
    /* 
        a
        b
        c
        d
    */

//Ejemplo for..of (Sirve solo para Array y String)
    const string = 'Ire Aderinokun';
    for (const character of string) {
        console.log(character);
    }
    //Result:
    /*
        I
        r
        e
        
        A
        d
        e
        r
        i
        n
        o
        k
        u
        n
    */        

//Ejemplo forEach() <<Este es para arreglos>>
//Converting a for loop to forEach.
    const items = ['item1', 'item2', 'item3'];
    const copyItems =[];

    //before 
    for (let i = 0; i < items.length; i++) {
        copyItems.push(items[i]);    
    }
    console.log(copyItems);
    //Result: ['item1', 'item2', 'item3']

    //after 
    items.forEach((item)=>{
        copyItems.push(item);
    });
    console.log(copyItems);
    //Result: ['item1', 'item2', 'item3']

//Ejemplo:  Map (Realiza Modificaciones, da variantes al arreglo original, lo devuelve a otro arreglo).


//Ejemplo: Filter(Hace criterios de busqueda y lo retorna en una copia de arreglo con el resultado).

//Ejemplo: Reduce(Da un resultado acumulado, reduce a un solo elemento de un conjunto de ellos, sirve para sumar los
//         elementos de un arreglo).