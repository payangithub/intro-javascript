/*
    +++++++++++++++++++++++++++++++++++++++++    
            Actividad 2-Ejercicio 1 
    +++++++++++++++++++++++++++++++++++++++++
    1.-Realizar un programa que determine si la persona es candidata o no a vacunarse y a que grupo pertenece 
       utilizando condicionales, tomando encuenta los siguientes criterios.

    <<Aplicamos las condiciones correspondientes a cada grupo, para determinar a cual pertenece la persona.

        G-1:Mayor de 18 años que residen en un municipio fronterizo del Norte del pais.
        G-2:Embarazadas mayores de 18 años con mas de 9 semanas de gestacion.
        G-3:Personas que cumplen 30 años o mas en este año.
    >>
*/
    
var notificacion2 = ''
var aspirante = prompt('Favor de Ingresar su Nombre:')
var fecha_nacimiento = new Date(prompt('Favor de Ingresar su Fecha de Nacimiento: R=(YYYY-MM-DD)'))
var sexo = prompt('Favor de Ingresar su Sexo: R=(MASCULINO - FEMENINO)')
var residencia = prompt('¿Reside en un Municipio Fronterizo del Norte del País? R=(SI o NO)')

var notificacion1 = 'Excelente Dia ' + aspirante

var sem_Gest = 0
var esta_embarazada = false 
if (sexo === 'FEMENINO') {
    esta_embarazada = Number(prompt('Esta Embarazada?: R:(0=NO o 1=SI)'))
    if (esta_embarazada) {
        sem_Gest = Number(prompt('Favor de Ingresar el Numero de Semanas de Gestación que Tiene?.'))            
    }
}

const fecha_hoy = new Date()
//Calcular la edad de la persona en base a la fecha actual.
var edad_asp = fecha_hoy.getFullYear() - fecha_nacimiento.getFullYear()

/* console.log('Su edad es: ',edad_asp)
console.log('Su residencia es: ',residencia)
console.log('Esta embarazada:',esta_embarazada)  */

if (esta_embarazada === false && edad_asp >= 18 && residencia === 'SI') {
    notificacion2 = 'Usted Pertenece al Grupo <<Mayor de 18 años que residen en un municipio fronterizo del Norte del pais>>.'
} else if (esta_embarazada && edad_asp >= 18 && sem_Gest > 9) {
    notificacion2 = 'Usted Pertenece al Grupo <<Embarazadas mayores de 18 años con mas de 9 semanas de gestacion>>.'
} else if (esta_embarazada === false && edad_asp >= 30 && residencia === 'NO') {
    notificacion2 = 'Usted Pertenece al Grupo <<Personas que cumplen 30 años o mas en este año>>.'
} else {
    notificacion2 = 'Usted no es Candidat@ para Aplicarse la Vacuna en estos Momentos.'
}
//Informar al usuario si aplica o no para la vacunacion.
alert(notificacion1 + ' ' + notificacion2)
