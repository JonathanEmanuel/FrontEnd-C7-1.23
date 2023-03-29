/* -------------------------------------------------------------------------- */
/*                         FUNCION 04 - Consultar API                         */
/* -------------------------------------------------------------------------- */

function consultarAPI(endpoint){

    console.log('INICIO: de la consulta a la API')
    btnOFF();
    fetch(endpoint)
    .then(  respuesta => {      // Si se cumple la promesa
        const promesaJSON = respuesta.json(); 
        console.log('OBJ RESPONSE');
        console.log(respuesta);
        console.log('---------');
        return promesaJSON;
    })
    .then( (json)=> {
        console.log(json);
        renderizarElementos(json);
    })
    .catch(  error => {  // Si no se cumple
        console.log('ocurrio error' , error);
    }).finally( ()=> {
        console.info('FIN: de la consulta a la API')
        btnON();
    })

}


const btn = document.querySelector('button');
const endpoint = 'https://jsonplaceholder.typicode.com/comments';

btn.addEventListener('click', function(){
    consultarAPI(endpoint);
       
});


function  btnOFF(){
    btn.style.color = 'black';
    btn.style.textDecoration = 'line-through';
    btn.setAttribute('disabled', 'disabled');
}

function btnON(){
    btn.style.color = 'blue';
    btn.style.textDecoration = 'none';
    btn.removeAttribute('disabled');
}

function renderizarElementos(listado){
    // desarrollar la funcion 👇
    const areaComentarios = document.querySelector('.comentarios');
    areaComentarios.innerHTML = '';
    listado.forEach(comentario => { 
        areaComentarios.innerHTML += // html 
            `<div class="comentario">
                <h4> ${ comentario.email} </h4>
                <p> ${comentario.body} </p>
            </div>`;
    });
}


/* ---- Mesa de Trabajo ---*/
// Crear otra funcion que realize una consutar en el 
// endpoint: https://jsonplaceholder.typicode.com/users/1
// Que los muestre por consola.
// name, username, email
// Estos datos deben mostrarse al finaliza la carga de los comentarios