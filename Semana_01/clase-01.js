/* -------------------------------- Clase 01 -------------------------------- */
function inciarJuego(){
    // Saludamos al  usuario
    alert('Bienvenido al Juego de Piedra Papel o Tijera');

    let nombre;

    do {
        // Solicitamos el nombre del usuario
        nombre = prompt('Ingrese su nombre');

        /* ---------------------- muestro por consola los datos --------------------- */
        console.log('-----------------------------');
        console.log('El nombre es ' + nombre);
        console.log('-----------------------------');

    } while( ! isNaN(nombre) || nombre.trim().length < 3  ) 
   
    return nombre;
}


/* --- Creamos la variable nombre Global para guardar el dato del jugador --- */
/* let nombre = inciarJuego(); */


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.