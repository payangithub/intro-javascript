let counter =0;
let valueSpan = document.getElementById('contador');

/* //event handler 
function increment() {
    //al mandarse llamar esta funcion vamos a aumentar el contador
    counter++;
    valueSpan.textContent = counter;
} */

//event listener 
const buttonIncrement = document.getElementById('btn-incremento')

buttonIncrement.addEventListener('click',function(){
    counter++;
    valueSpan.textContent = counter;
})

//event handler 
function decrement() {
    //al mandarse llamar esta funcion vamos a aumentar el contador
    counter--;
    valueSpan.textContent = counter;
}