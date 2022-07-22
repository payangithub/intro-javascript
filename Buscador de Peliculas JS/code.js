//01. Captura de variables
const formBusqueda = document.querySelector('#form-busqueda');
const inputName = document.querySelector('#inputName');
const inputGenero = document.querySelector('#inputGenre');
const inputYear = document.querySelector('#inputYear');
const boxPeliculas = document.querySelector('#box-peliculas');

//5. Crear un objeto con la seleccion de busqueda del usuario.
const datosBusqueda={
    nombre:'',
    genero:'',
    year:''
}

//02.Crear el evento para mostrar informacion cuando cargue la pagina.
document.addEventListener('DOMContentLoaded', () => {    
    mostrarHTML(peliculas);
})

//03.Crear funcion que recorre el array de objetos y muestre el HTML.
function mostrarHTML(peliculas){
    //console.log(peliculas);
    limpiarHTML();

    peliculas.forEach( pelicula => {        
        const {nombre,year,genero,descripcion,imagen} = pelicula;
        
        const cardPelicula = document.createElement('div');
        cardPelicula.classList.add('col','mb-3');
        cardPelicula.innerHTML = `
            <div class="card bg-secondary flex-row">
                <div class="w-50">
                    <img src="${imagen}" class="img-fluid object-fit" alt="">
                </div>
                <div class="card-body w-50">
                    <h2 class="card-title">${nombre}</h2>
                    <p>Año: ${year}</p>
                    <p>Genero: ${genero}</p>                    
                    <p>Descripcion:</p>
                    <p>${descripcion}</p>
                </div>
            </div>
        `; 
        boxPeliculas.appendChild(cardPelicula)        
    })  
}

//04.Crear el evento de envio de formulario. Aqui se hace el filtro.
formBusqueda.addEventListener('submit', (e) => {
   
    e.preventDefault();

    datosBusqueda.nombre =  inputName.value;
    datosBusqueda.genero = inputGenero.value;
    datosBusqueda.year = inputYear.value;
    //datosBusqueda.inputYear = inputYear.value;
    
    filtrarPeliculas();

    //Se resetean los valores del buscador, en este caso todos los parametros a un valor inicial "=Choose".
    formBusqueda.reset();          
});

//07. Crear una funcion para filtrar peliculas.
function filtrarPeliculas(){

    const resultado = peliculas.filter( filtrarName ).filter( filtrarGenero ).filter( filtrarYear );

    //Trabajar cuando se envie el formularo y no hayan opciones selecccionadas.
    //Object.values(); obtiene los valores del objeto.
    const hayResultado = Object.values(datosBusqueda).filter( e => e);

    if(hayResultado.length){  
        if(resultado.length){                    
            mostrarHTML(resultado);  
            //Verifica si existe el mensaje elimina todos los hijos.
            if (boxPeliculas.parentElement.lastChild.classList.contains('bg-danger')) {
                boxPeliculas.parentElement.lastChild.remove();   //Elimina los hijos.     
            }                            
        }else{
            sinResultado();        
        }       
        
    }else{
        sinResultado();        
    }             
}

//08. Generar funciones que se van a enviar al filter.
function filtrarName(pelicula){
    const{nombre} = datosBusqueda;
    if(nombre){
        return pelicula.nombre == nombre;
    }
    return peliculas;
}

function filtrarGenero(pelicula){
    const{genero} = datosBusqueda;
    if(genero){
        return pelicula.genero == genero;
    }
    return peliculas;    
}

function filtrarYear(pelicula){
    const{year} = datosBusqueda;
    if(year){
        return pelicula.year == year;
    }
    return peliculas;    
}

//09. Generar una funcion limpiar, luego agrgar a mostrarHTML()
function limpiarHTML(){
    while(boxPeliculas.firstChild){
        //boxPeliculas.innerHTML='';// Metodo Facil para borrar todos los elementos.
        boxPeliculas.firstChild.remove();       
    }            
}

//Funcion que muestra mensaje de sin resultado.
function sinResultado(){
    //alert("Entro");
    limpiarHTML();    
    const sinResultado = document.createElement('div');
    sinResultado.classList.add('bg-danger','text-white','border-danger','p-4','text-center');
    sinResultado.textContent ='No hay resultados';

    //boxPeliculas.appendChild(sinResultado);
    boxPeliculas.parentElement.appendChild(sinResultado);
}