//Ejercicio 1

var nombre=prompt("Favor de Ingresar su nombre: ")
var edad=prompt("Favor de Ingresar su edad: ")

if(edad>=18)
{
    if(nombre=='Mario'|| nombre=='Carlos'){
        alert("Puede ingresar al area VIP.")
    }else{
        alert("Puede ingresar a la discoteca.")
    }
}else{
    alert("El usuario es menor de 18 años, no puede ingresar a la discoteca.")
}