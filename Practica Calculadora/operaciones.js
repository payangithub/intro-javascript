//Definimos las variables globales.
var cifra1;
var cifra2;
var operador;
//Definimos funcion para limpiar el resultado.
function borrar_result() {    
    document.getElementById("btn_resultado").textContent = "";
}
//Definimos funcion para inicializar variables que se utilizan para el calculo del resultado de la operacion.
function limpiar_variables() {    
    cifra1 = 0;
    cifra2 = 0;
    operador = "0";
}
//Definimos funcion para hacer la operacion de la calculadora.
function calcular() {
    var Resultado = document.getElementById("btn_resultado");
    switch (operador) {
        case "+":
            Resultado.textContent = (parseFloat(cifra1) + parseFloat(cifra2));
            break;
        case "-":
            Resultado.textContent = parseFloat(cifra1) - parseFloat(cifra2);
            break;
        case "*":
            Resultado.textContent = parseFloat(cifra1) * parseFloat(cifra2);
            break;
        case "/":
            Resultado.textContent = parseFloat(cifra1) / parseFloat(cifra2);
            break;
    }
    //Ejecutamos funcion para inicializar variables.    
    limpiar_variables();
}
//Definimos funcion para cargar la funcionalidad de todos los objetos.
function cargaFuncionalidad() {
    //Definimos todas las variables de cada objeto.       
    const button_uno = document.getElementById('btn_uno');
    const button_dos = document.getElementById('btn_dos');
    const button_tres = document.getElementById('btn_tres');
    const button_cuatro = document.getElementById('btn_cuatro');
    const button_cinco = document.getElementById('btn_cinco');
    const button_seis = document.getElementById('btn_seis');
    const button_siete = document.getElementById('btn_siete');
    const button_ocho = document.getElementById('btn_ocho');
    const button_nueve = document.getElementById('btn_nueve');
    const button_cero = document.getElementById('btn_cero');
        
    const button_multiplicacion = document.getElementById('btn_multiplicacion');
    const button_division = document.getElementById('btn_division');
    const button_suma = document.getElementById('btn_suma');
    const button_resta = document.getElementById('btn_resta');
        
    const button_igual = document.getElementById('btn_igual');
    const button_reset = document.getElementById('btn_reset');
    const button_resultado = document.getElementById('btn_resultado');

    //Definimos el evento Click para cada objeto.    
    button_uno.addEventListener('click',function(){                
        button_resultado.textContent = button_resultado.textContent + "1";    
    });
    button_dos.addEventListener('click',function(){                
        button_resultado.textContent = button_resultado.textContent + "2";
    });    
    button_tres.addEventListener('click',function(){                
        button_resultado.textContent = button_resultado.textContent + "3";
    });       
    button_cuatro.addEventListener('click',function(){                
        button_resultado.textContent = button_resultado.textContent + "4";
    });    
    button_cinco.addEventListener('click',function(){                
        button_resultado.textContent = button_resultado.textContent + "5";
    });    
    button_seis.addEventListener('click',function(){                
        button_resultado.textContent = button_resultado.textContent + "6";
    });    
    button_siete.addEventListener('click',function(){                                    
        button_resultado.textContent = button_resultado.textContent + "7";
    });    
    button_ocho.addEventListener('click',function(){                
        button_resultado.textContent = button_resultado.textContent + "8";
    });    
    button_nueve.addEventListener('click',function(){                                                
        button_resultado.textContent = button_resultado.textContent + "9";
    });    
    button_cero.addEventListener('click',function(){                                 
        button_resultado.textContent = button_resultado.textContent + "0";
    });    
    button_reset.addEventListener('click',function(){                                     
        borrar_result();    
    });    
    button_suma.addEventListener('click',function(){                
        cifra1 = button_resultado.textContent;
        operador = "+";
        borrar_result();
    });    
    button_resta.addEventListener('click',function(){                
        cifra1 = button_resultado.textContent;
        operador = "-";
        borrar_result();
    });    
    button_multiplicacion.addEventListener('click',function(){                
        cifra1 = button_resultado.textContent;
        operador = "*";
        borrar_result();
    });
    button_division.addEventListener('click',function(){                
        cifra1 = button_resultado.textContent;
        operador = "/";
        borrar_result();
    });    
    button_igual.addEventListener('click',function(){                
        cifra2 = button_resultado.textContent;        
        calcular();        
    });
}