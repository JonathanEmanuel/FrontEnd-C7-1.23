 /* -------------------------------------------------------------------------- */
 /*               FUNCION 01: Capturamos los datos del fomrulario              */
 /* -------------------------------------------------------------------------- */

// Captura los datos del fomrulario y retorna un objeto informacion
function capturarDatos(){
    const informacion = {
        nombre: '',
        password: '',
        telefono: '',
        hobbies: [],
        nacionalidad: ''
    }
    
    // Selecciono los elemento del fomulario
    const inputNombre = document.querySelector('#nombre');
    const inputPassword = document.querySelector('#pass');
    const inputTel = document.querySelector('#tel');
    const hobbiesCheckbox = document.querySelectorAll('[name=hobbies]');
    const nacionalidadRadio = document.querySelectorAll('[name=nacionalidad]');


    // leer los valores de los inputs y asignarlos al obj informacion
    informacion.nombre = inputNombre.value 
    informacion.password = inputPassword.value
    informacion.telefono = inputTel.value;

    // Recorro el nodeList y verifico
    hobbiesCheckbox.forEach( hobbie => {
        // Por cada hobbie varifico si estan activos
        if( hobbie.checked == true){
            informacion.hobbies.unshift ( hobbie.id );
        } 
    });

    // Recorro el nodeList y verifico
    nacionalidadRadio.forEach(  nacionalidad => {
        if( nacionalidad.checked ){
            informacion.nacionalidad = nacionalidad.id
        }
    });

    //console.log(inputNombre, inputPassword, inputTel, hobbies, nacionalidad);
    return informacion;
    
}


/* -------------------------------------------------------------------------- */
/*           FUNCION 02: Escuchamos el evento Submit del Formulario           */
/* -------------------------------------------------------------------------- */
const formulario =  document.querySelector('form');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const datosInscripcion = capturarDatos();
    console.log(datosInscripcion);

    const errores = validarInformacion(datosInscripcion);

    console.log(errores);
})



/* -------------------------------------------------------------------------- */
/*                          FUNCION 03: Validar Datos                         */
/* -------------------------------------------------------------------------- */
// Desarrollar la funcion 3 de validar los datos.
// Esta funcion va a recibir un objeto con la misma estructura de obejeto Informacion
// Entonces dentro de esta función vamos a chequear ciertas validaciones.
// 1- La funcion devuelve un listado de errores según las comprobaciones que hace sobre el objeto.
// 2- Si el nombre no es un texto y tiene menos de 3 caracteres sumar el error: "El nombre debe tener al menos 3 caracteres."
// 3- Si la contraseña tiene menos de 6 caracteres, sin contar espacios al principio, en el medio o final, sumar el error: "La contraseña debe tener al menos 6 caracteres, entre letras y símbolos."
// 4- Si el telefono tiene menos de 10 números, sumar el error: "No es un teléfono válido."
// 5- Si la lista de hobbies tiene más de 4 items, sumar el error: "Sólo es posible seleccionar 4 hobbies."
// 6- Si no hay una nacionalidad definida, sumar el error: "Debe seleccionar una nacionalidad."
function validarInformacion(informacion) {
    let errores = [];
    // 👇 desarrollar aqui la funcion


    return errores;
}
