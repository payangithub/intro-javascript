//Ejercicio 1

var jugador1=prompt("Jugador 1 favor de ingresar: Piedra, Papel o Tijera")
var jugador2 = prompt("Jugador 2 favor de ingresar: Piedra, Papel o Tijera")

if ((jugador1 === 'Piedra' && jugador2 === 'Tijera') || 
    (jugador1 === 'Tijera' && jugador2 === 'Papel') ||
    (jugador1 === 'Papel' && jugador2 === 'Piedra')
){
    alert("Jugador 1 Gana")    
} else if((jugador1 === 'Piedra' && jugador2 === 'Piedra') ||
           (jugador1 === 'Tijera' && jugador2 === 'Tijera') ||
           (jugador1 === 'Papel' && jugador2 === 'Papel')
         ){
            alert("Es Empate")
}else{
    alert("Gana el Jugador 2")
}

