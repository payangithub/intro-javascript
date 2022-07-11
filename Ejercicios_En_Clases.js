/* let estudiantes =['Cesar','Alejandra','Claudia','Edgar'];
estudiantes[1] = 'Mario';
estudiantes[6] = 'Jared';
//console.log(estudiantes[6])
console.log(estudiantes) */


//Necesitamos imprimir en una lista numerada todos los estudiantes. ITERANDO EN EL ARRAY

let estudiantes = ['Cesar', 'Alejandra', 'Claudia', 'Edgar'];
let frutas = ['Pera','Manzana','Fresa'];

for(let i=0; i<estudiantes.length;i++)
{
    console.log(`${i+1}-${estudiantes[i]}`);
}