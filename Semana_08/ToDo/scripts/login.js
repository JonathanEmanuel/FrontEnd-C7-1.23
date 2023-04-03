window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
   
    const form = document.querySelector("form");
    const inputEmail = document.getElementById("inputEmail");
    const inputPassword = document.getElementById("inputPassword");

  

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
       
        event.preventDefault();

        const settings = {
            email: inputEmail.value,
            password: inputPassword.value
        }
        const config = {
            method: 'POST',
            body: JSON.stringify(settings),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }
        realizarLogin(config);



    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
       

        const endPoint = 'https://todo-api.ctd.academy/v1/users/login';
        fetch(endPoint, settings)
        .then( respuesta => respuesta.json())
        .then( (json)=> {
            console.log(json);
            // Guardo el jwt si el login es exitoso
            if( json.jwt){
                console.log('Datos Correctos');
                localStorage.setItem('jwt', JSON.stringify(json.jwt));
                location.replace("mis-tareas.html");

            } else {
                alert('Error ' + json);
            }
        })
        .catch(  error => {
            console.log('ocurrió un error', error);
        })
    };



});