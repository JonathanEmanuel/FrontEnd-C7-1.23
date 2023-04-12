/* ---------------------- obtenemos variables globales ---------------------- */
const form = document.querySelector('form');
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');

/* -------------------------------------------------------------------------- */
/*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
/* -------------------------------------------------------------------------- */
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // FALTA HACER LAS VALIDACIONES Y NORMALIZAR
    const email = inputEmail.value;
    const password = inputPassword.value;

    if( email.trim() == '' || password.trim() == '' ){
        Swal.fire({
            title: 'Error',
            text: 'Por favor, complete los campos',
            icon: 'info',
            confirmButtonText: 'Aceptar'
        })

        return;
    } 

    const datos = { 
        email,
        password
    }

    const settings = {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }


    realizarLogin(settings);

});


/* -------------------------------------------------------------------------- */
/*                     FUNCIÓN 2: Realizar el login [POST]                    */
/* -------------------------------------------------------------------------- */
function realizarLogin(settings) {
       
    const endpoint = 'https://todo-api.ctd.academy/v1/users/login';
    fetch( endpoint, settings )
    .then(  resp => resp.json() )
    .then( json => {
        console.log(json);

        if( json.jwt){
            localStorage.setItem('jwt', JSON.stringify( json.jwt) )
            location.replace('mis-tareas.html');
        } else {
            //alert('No puedes acceder ' + json);
            let mensaje = 'No puedes acceder: ' + json
            Swal.fire({
                title: 'Error',
                text: mensaje,
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            })
        }
    })

};
