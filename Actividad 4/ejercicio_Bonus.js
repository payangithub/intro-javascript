/*
    Bonus:
    Generar dos números aleatorios: uno de un dígito, otro de máximo 3 dígitos, preguntar al 
    usuario el resultado de la multiplicación de los dos números. Si contesta correctamente 
    saldrá el mensaje de ganaste, si no le realizará de nuevo la pregunta pero con dos números 
    diferentes.
*/
//Se crea funcion para obtener los numeros random de 1 a N numeros, dependiendo el parametro 
//que se le envie.
function ObtenerRandomIntDigito(max) {
    return Math.floor(Math.random()*max)+1;
}

//Variable Iterante para salir del ciclo cuando el usuario de una respuesta correcta.
let i=0;
while(i<1){    
    //Para que obtenga los numeros aleatorios del 1-9.
    var numero1 = ObtenerRandomIntDigito(9);    
    //Para que obtenga los numeros aleatorios del 1-999.
    var numero2 = ObtenerRandomIntDigito(999);
    var respuesta = prompt("Favor de ingresar el resultado de la multiplicacion: " + numero1 + " * " + numero2 );
    if (respuesta == (numero1 * numero2)){
        alert("Respuesta correta :), Ganaste!");
        i++;
    }else{
        continue;
    }
}