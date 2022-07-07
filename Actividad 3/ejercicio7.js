//Ejercicio 7

var numero1 = Number(prompt("Favor de Ingresar el Primer Numero:"))
var numero2 = Number(prompt("Favor de Ingresar el Segundo Numero:"))
var numero3 = Number(prompt("Favor de Ingresar el Tercer Numero:"))

switch (true)
{
    case numero1 > numero2 && numero1 > numero3:
        alert(numero1 +" Es el Mayor")
        break
    case numero2 > numero1 && numero2 > numero3:
        alert(numero2 + " Es el Mayor")
        break
    case numero3 > numero1 && numero3 > numero2:
        alert(numero2 + " Es el Mayor")
        break
    case numero1 === numero2:
        alert(numero1 + " y "+ numero2 + " Son iguales")
        break        
    case numero1 === numero3:
        alert(numero1 + " y " + numero3 + " Son iguales")
        break        
    case numero2 === numero3:
        alert(numero2 + " y " + numero3 + " Son iguales")
        break        
    default:
        alert("Empate")
        break
}
