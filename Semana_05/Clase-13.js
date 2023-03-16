
/* -------------------------------------------------------------------------- */
/*                          Capturamos los elementos                          */
/* -------------------------------------------------------------------------- */
const formulario = document.querySelector('form');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const selectRol = document.querySelector('#rol');
const inputTerminos = document.querySelector('#terminos');

const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const rolError = document.querySelector('#rolError');
const terminosError = document.querySelector('#terminosError');


const usuario = {
    email: '',
    password: '',
    rol: '',
    terminos: false
}


const usuarioEstadosError = {
    email: false,
    password: false,
    rol: false,
    terminos: false
}


// FUNCION 01 - Verifica los estado de error y muestra al usuario
function mostrarErrores(){

    if( usuarioEstadosError.email == true){
        emailError.classList.add('visible');
    } else {
        emailError.classList.remove('visible');
    }

    usuarioEstadosError.password == true ? passwordError.classList.add('visible') : passwordError.classList.remove('visible');
    usuarioEstadosError.rol ? rolError.classList.add('visible') : rolError.classList.remove('visible');
    usuarioEstadosError.terminos ? terminosError.classList.add('visible') : terminosError.classList.remove('visible');

}

/* -------------------------------------------------------------------------- */
/*                 FUNCION 02 - Actualizaciones de los estados                */
/* -------------------------------------------------------------------------- */
formulario.addEventListener('change', function(){
    console.log('Cambio los estados');
    // Actualizo los dato del usuario
    validarTodosLosCampos();

})


formulario.addEventListener('submit', function(e){
    e.preventDefault();
    validarTodosLosCampos();
    if( usuarioEstadosError.email || usuarioEstadosError.password || usuarioEstadosError.rol || usuarioEstadosError.terminos  ){
        alert('Hay campos incorrectos');
    } else {
        console.log('✉');
        guardarRegistro();
        location.href = 'usuario.html';
    }
})


function validarTodosLosCampos(){
    usuario.email = inputEmail.value;
    usuario.password = inputPassword.value;
    usuario.rol = selectRol.value;
    usuario.terminos = inputTerminos.checked;

    // Actualizar los estados de error
    //usuarioEstadosError.email = validarEmail( usuario.email );

    usuarioEstadosError.email = validarEmail( usuario.email);
    usuarioEstadosError.terminos = validarTerminos( usuario.terminos );

    usuarioEstadosError.password = validarPassword( usuario.password);
    usuarioEstadosError.rol = validarRol( usuario.rol);
    mostrarErrores();
}

function validarEmail(email){
    
    let expReg = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');
    
   if(  expReg.test(email) ) {
        return false;
   } else {
        return true;
   }
    
    //            @           &&       . 
    /* if( email.includes('@') && email.includes('.')){
        return false;
        } else {
            return true;
        }
     */

}

// El password debe ser dentre 4 y 8 caracteres
function validarPassword(password){

    if( password.length >= 6 && !password.includes(' ')){
        return false;
    } else {
        return true;
    }

}


function validarRol(rol){
    if( rol != ''){
        return false;
    } else {
        return true;
    }
}

function validarTerminos(termino){
    if( termino ) {
        return false;
    } else {
        return true;
    }
}


function guardarRegistro(){
    localStorage.setItem('usuario', JSON.stringify( usuario));
}