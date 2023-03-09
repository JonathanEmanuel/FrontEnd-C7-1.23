/* -------------------------------------------------------------------------- */
/*                      FUNCION 04. renderizado de errores                     */
/* -------------------------------------------------------------------------- */


function renderizarErrores(lista){
    console.log('ups tenes algunos errores');
    const divErrores = document.querySelector('#errores');

    if( divErrores ){
        console.log('Existe el div errores');
        //divErrores.innerHTML = '';
        divErrores.remove();

    }
    
    if(  lista.length > 0  ){
        const div = document.createElement('div');
        div.setAttribute('id', 'errores');
        const ul = document.createElement('ul');
        div.style = 'color: red';
        div.appendChild(ul);

        let template ='';
        lista.forEach(error => {
            console.log(error);
            template += `<li>  ${error}  </li>`

        });

        ul.innerHTML = template;
        console.log(div);
        formulario.appendChild(div);
    }


}


const inputs =document.querySelectorAll('input');

inputs.forEach( inputs => {
    inputs.addEventListener('click', function(){
        const divErrores = document.querySelector('#errores');

        if( divErrores ){
            console.log('Existe el div errores');
            //divErrores.innerHTML = '';
            divErrores.remove();
    
        }
    })
});


/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de mostrar que el formulario se completó correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Recibe el listado de errores, y solo si no hay ninguno debe:
// 2 - mostrar al final del formulario un caja con la misma estructura que la caja de errores, pero con la tonalidad verde
// 3 - dentro la caja debe mostrar un párrafo con el mensaje: "¡Formulario completado con éxito!"
// 4 - a su vez se debe deshabilitar el boton del formulario
// 5 - finalmente pasados 4 segundos: se debe eliminar esa caja, habilitar el boton y limpiar el formulario