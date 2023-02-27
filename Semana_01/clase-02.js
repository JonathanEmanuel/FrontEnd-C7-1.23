
/* -------------------------------- FUNCION 2 ------------------------------- */
function pedirJugada(){

    let eleccion = 0;
    // Valido que el usuario ingreso un número
    // Valido que sea un número entre 1 y 3


    do {
        eleccion = parseInt( prompt('Ingrese: 1.Pidra, 2.Papel o 3.Tijera') );
    } while( isNaN( eleccion) || eleccion < 1 || eleccion > 3 )

    console.log( 'El usuario ingreso ' + eleccion);
    return eleccion;
}

/* -------------------------------- FUNCION 3 ------------------------------- */
// Generamos un numero random entre 1 y 3
function juagadaRandom(){
    let numero = parseInt( Math.random() * 3 + 1 );

    
    console.log('Numero Random ' + numero );
    return numero;
}

/* -------------------------------- FUNCION 4 ------------------------------- */
// Comparamos las jugadas para saber quien pierde o gana
function compararJugadas(){
    //                            0                  1                       2
    const resultados_posibles = ['¡Genial Ganaste!', 'Empate', 'Perdiste, segui participando'];
    const eleccionJugador = pedirJugada();
    const eleccionMaquina = juagadaRandom();
    // 1.Pidra, 2.Papel o 3.Tijera'
    let resultado;
    // Si es empate
    if(  eleccionJugador === eleccionMaquina ){
        resultado = resultados_posibles[1];
        // Si el usuario Pierde
    } else if (  
        ( eleccionJugador === 1 && eleccionMaquina === 2 ) || 
        ( eleccionJugador === 2 && eleccionMaquina === 3) ||
        ( eleccionJugador === 3 && eleccionMaquina === 1) ) 
        {
        resultado = resultados_posibles[2];
    } else {
        resultado = resultados_posibles[0];
    }

    return resultado;

}

/* let resultadoPartida = compararJugadas(); */

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Crear una función que reciba como parametro un texto (la frase de resultado de la partida).
// 2- La función debe mostrar por consola el resultado de la partida.
// 3- A su vez debe mostrar al usuario una alert con el resutado de la partida.
// 4- Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.

