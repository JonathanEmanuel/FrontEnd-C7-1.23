console.info('Clase 15');
// Chequear si hay algun dato en el Storge, sino redirige al index
function validarUsuario(){
    // Si no existe la clave en el stora, este retorna un null
    const usuario = JSON.parse( localStorage.getItem('usuario') );
    if( usuario != null){
        console.log('Usuario Registrado');
    } else {
        console.warn('No se encontraron los datos');
        location.replace('index.html');
    }
}