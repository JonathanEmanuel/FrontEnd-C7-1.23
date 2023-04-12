/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
    
}

function normalizarTexto(texto) {
    return texto.trim();
}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {
    
}

function normalizarEmail(email) {
    return email.trim();
    
}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
    
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    if( contrasenia_1 === contrasenia_2){
        return true;
    } else {
        return false;
    }

}

function msgBox(mensaje, tipo){

    Swal.fire({
        title: 'To Do App',
        text: mensaje,
        icon: tipo,
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#ff7059ff',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      })
}
