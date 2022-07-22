let btnInicio=document.querySelector('#inicio');
//var btnInicio2 = document.getElementById("inicio");
let player1=document.querySelector('#jugador1');
let player2=document.querySelector('#jugador2');
let player3=document.querySelector('#jugador3');

let pos1=0;
let pos2=0;
let pos3=0;

let btnReiniciar = document.querySelector('#reiniciar');
//let btnReiniciar2 = document.getElementById("reiniciar");
btnReiniciar.style.display='none';
btnInicio.style.display = 'block';

btnInicio.addEventListener('click',() =>{
    btnInicio.style.display = 'none';

    let intervalo = setInterval(carrera,130);

    function carrera(){
        pos1+=Math.round(Math.random()*20);
        player1.style.left =`${pos1}px`;

        pos2+=Math.round(Math.random()*20);
        player2.style.left =`${pos2}px`;

        pos3+=Math.round(Math.random()*20);
        player3.style.left =`${pos3}px`;

        if(pos1>=646){
            clearInterval(intervalo)
            //console.log('Ganador: Rojo');
            alert('Ganador: Rojo');
            activarReinicio();
        }else if(pos2>=646){
            clearInterval(intervalo)
            //console.log('Ganador: Azul');
            alert('Ganador: Azul');
            activarReinicio();
        }if(pos3>=646){
            clearInterval(intervalo)
            //console.log('Ganador: Amarillo');
            alert('Ganador: Amarillo');
            activarReinicio();
        }        
    } 
    
    function activarReinicio() {    
        //alert("Entro");
        //btnInicio.style.display = 'none';        
        btnReiniciar.style.display ='block';
    }
})

btnReiniciar.addEventListener('click', () => {       
    //btnInicio: active;
    btnReiniciar.style.display = 'none';        
    btnInicio.style.display = 'inline';

    /* pos1 += Math.round(Math.random() * 20); */
    player1.style.left = '0px';

    //pos2 += Math.round(Math.random() * 20);
    player2.style.left = '0px';

    //pos3 += Math.round(Math.random() * 20);
    player3.style.left = '0px';

    pos1 = 0;
    pos2 = 0;
    pos3 = 0;       
})
