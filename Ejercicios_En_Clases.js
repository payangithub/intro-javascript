/* let estudiantes =['Cesar','Alejandra','Claudia','Edgar'];
estudiantes[1] = 'Mario';
estudiantes[6] = 'Jared';
//console.log(estudiantes[6])
console.log(estudiantes) */


//Necesitamos imprimir en una lista numerada todos los estudiantes. ITERANDO EN EL ARRAY

/* let estudiantes = ['Cesar', 'Alejandra', 'Claudia', 'Edgar'];
let frutas = ['Pera','Manzana','Fresa'];

for(let i=0; i<estudiantes.length;i++)
{
    console.log(`${i+1}-${estudiantes[i]}`);
} */

//**************Funciones 

//estructura function declaration

/* function nombreFunction(parametro1, parametro2, ...) {
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

 */

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
        enumerable: true,
        value: 'white',
        writable: true,
        configurable: true
    },
    //Faltan mas propiedades 
    //...............
})