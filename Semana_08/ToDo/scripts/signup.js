window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.querySelector('form');
    const inputNombre = this.document.querySelector('#inputNombre');
    const inputApellido = this.document.querySelector('#inputApellido');
    const inputEmail = this.document.querySelector('#inputEmail');
    const inputPassword = this.document.querySelector('#inputPassword');
    const inputPasswordRepetida = this.document.querySelector('#inputPasswordRepetida');



    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault();
  
        // FALTA REALIZAR LAS VALIDACIONES
        if( inputPassword.value === inputPasswordRepetida.value ){
            const datos = {
                firstName : inputNombre.value,
                lastName: inputApellido.value,
                email: inputEmail.value,
                password: inputPassword.value  
            }

            const config = {
                method: 'POST',
                body: JSON.stringify(datos ),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }

            realizarRegister(config);

        } else {
            alert('Las contraseñas son distintas');
        }


    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(settings) {
        
        // Comunicación con la API
        const endPoint = 'https://todo-api.ctd.academy/v1/users';


        fetch(endPoint, settings)
        .then(  respuesta => respuesta.json() )
        .then( (json)=> {
            console.log(json);
            if( json.jwt ) {
                // Guardo en el localStorage el toke
                localStorage.setItem('jwt', JSON.stringify(json.jwt));
                location.replace('mis-tareas.html');
            } else {
                alert('Algunos datos son incorrectos');
            }
        })
        .catch(  error => {  // Si no se cumple
            console.log('ocurrio error' , error);
        })


    };


});

