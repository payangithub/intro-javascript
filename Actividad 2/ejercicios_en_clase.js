/*
//Determinar que tipo de usuario soy en un banco.
//Mas de 100000 son clientes platinum
//Mas de 50000 son clientes gold 
//Mas de 10000 son clientes Standard
//Menos de 10000 no son clientes

let tipo = "";
let cantDinero = 150000;

if(cantDinero >=100000){
    console.log('Clientes Platinum');    
}else if(cantDinero >=50000){
    console.log('Cliente Gold');
}else if(cantDinero>=10000){
    console.log('Cliente Standard');
}else{
    console.log('No eres Cliente');
}

//console.log('Ups no se ejecuto');
*/
/*
//Switch Colores de semaforo

let color = 'amarillo';
switch(color){
    case 'amarillo';
        console.log('Esperar');
    break;
    case 'verde';    
        console.log('Arrancar');
    break;
    case 'rojo';
        console.log('Detenerse');
    default;
        console.log('No reconozco tu color');
}
*/
/*
//Si el jugador cuenta con velocidad y altura entra al equipo
//Dependiendo de su edad entra a inferiores o mayores.
//vel: 30km/h altura:175

let velocidad =20;
let altura = 190;
let edad = 15;

if(velocidad >=30 && altura >=175 && edad >18){
    console.log('Puedes ingresar al equipo de mayores');
} else (velocidad >= 30 && altura >= 175 && (edad >15 || edad <= 18){
    console.log('Puede ingresar al equipo de menores');
}else{
    console.log('No puedes ingresar al equipo');
}
*/