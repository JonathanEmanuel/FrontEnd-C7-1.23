/* const logo = document.querySelector('#logo');

console.log(logo);

logo.addEventListener('click', function(){
    console.log('se hizo click')
});

*/
window.addEventListener('keypress', function(e){
    console.log('Tecla: ', e.key);
}) 

function marcarLikes(){
    const botones = document.querySelectorAll('.fa-heart');

    botones.forEach(btn => {
        btn.addEventListener('click', function(){
            console.log('click', btn.id);
            const id = btn.id;

            // Si realizo esto, SOLO modifico la vista
            //btn.classList.toggle('favorito');

            // En su lugar tengo que modificar el dato y luego actualizo la vista
            albumesFamosos.forEach(album => {  // Recorro el array y verico si el id es igual 
                if( album.id === id){
                    album.like = !album.like;
                }
            });

            // Actualizo la vista
            renderizarAlbumes(albumesFamosos);
            // llamo a la funcion para agregar los listeners
            marcarLikes();
        })
    });


}

marcarLikes();

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */
// Debemos desarrollar la funcion de eliminar un album. Para esto le vamos a 
// preguntar al usuario cual quiere eliminar.
// Vamos a seguir las indicaciones que nos permiten lograrlo utilizando eventos.
// 1- Hay que escuchar el evento de 'keydown' para detectar cuando el usuario
// presiona la tecla f
// 2- Una vez que detectamos la tecla, debemos mostrarle un prompt al usuario
// para que ingrese el nombre del album que desea eliminar
// 3- Podemos buscar la posicion del almbum buscado en el array con la funcion .findIndex()
// 4- Si la busqueda nos da un resultado válido, procedemos a borrar el objeto del array
// 5- Acto seguido debemos llamar a las funciones de renderizar y marcar favorito para que sean nuevamente aplicadas.

function eliminarAlbum() {
    // desarrollar la función 👇


}
eliminarAlbum();