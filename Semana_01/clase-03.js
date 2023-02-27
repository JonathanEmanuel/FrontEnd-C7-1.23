// FUNCION 1 inciarJuego()
// FUNCION 2 pedirJugada()
// FUNCION 3 juagadaRandom()
// FUNCION 4 compararJugadas()


let puntajes = {
    usuario: 0,
    compu: 0
}

const nombreJugador = inciarJuego();

/* -------------------------------------------------------------------------- */
/*           👇 Mientras que ningún jugador llegue a los tres puntos           */
/* -------------------------------------------------------------------------- */
//           1                       3
while ( puntajes.usuario < 3  &&  puntajes.compu < 3 ) {

    const resuladoPartida = compararJugadas();
    // Si gano el usuario incrementar puntos
    if( resuladoPartida == '¡Genial Ganaste!'){  // suma al usuario
        puntajes.usuario++
    } else if ( resuladoPartida == 'Perdiste, segui participando'){ // suma a la compu
        puntajes.compu ++
    }

    console.table(puntajes);
}

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar el objeto puntajes para poder contabilizar los empates tambien.
// 2- Modificar el bucle para poder sumar tambien la cantidad de empates.
// 3- Mostrar en cada partida el resultado al usuario.
// 4- Mostrar finalmente la cantidad de partidas jugadas y que sepa cuantas ganó, perdió o empató durante el juego.