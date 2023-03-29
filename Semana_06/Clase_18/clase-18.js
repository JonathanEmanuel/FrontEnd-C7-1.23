/* -------------------------------------------------------------------------- */
/*                     FUNCIOON 01 - ESCUCHAMOS EL SUBMIT                     */
/* -------------------------------------------------------------------------- */
const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('📧');
    postearAPI();
})


/* -------------------------------------------------------------------------- */
/*                FUNCION 02- CAPTURA LOS DATOS DEL FORMULARIO                */
/* -------------------------------------------------------------------------- */
function capturarDatos(){
    const titulo = document.querySelector('#titulo');
    const comentario = document.querySelector('#comentario');

    let datos = {
        title: titulo.value,
        body: comentario.value,
        userId: 1
    }
    return datos;
}

/* -------------------------------------------------------------------------- */
/*                       FUNCION 03 - CREA POST A LA API                      */
/* -------------------------------------------------------------------------- */

function postearAPI(){

    const datos = capturarDatos();
    const endPoint = 'https://jsonplaceholder.typicode.com/posts';
    const config = {
        method: 'POST',
        body: JSON.stringify(datos ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }

    fetch(endPoint, config)
    .then(  respuesta =>  respuesta.json() )
    .then( (json)=> {
        console.log(json);
    })
    .catch(  error => {  // Si no se cumple
        console.log('ocurrio error' , error);
    })
}

/* -------------------------------------------------------------------------- */
/*                FUNCION 04 - RENDERIZAR DATOS DE LA RESPUESTA               */
/* -------------------------------------------------------------------------- */
// 1.Mostrar el mensaje POST Creado
// 2.Mostrar el titulo del post y su id
function renderizarDato(datos){
    
}
