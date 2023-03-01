/* --------------------------- listado de almbumes --------------------------- */
const albumesFamosos = [{
    id: "x123",
    nombre: "Nevermind",
    imagen: "https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg",
    like: true
},
{
    id: "y456",
    nombre: "Thriller",
    imagen: "https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg",
    like: false
},
{
    id: "z789",
    nombre: "The wall",
    imagen: "https://img.discogs.com/EbLYco6R1A-5Z7QJ4t4O1JSzsM8=/fit-in/587x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4620059-1370165707-3841.jpeg.jpg",
    like: false
},
{
    id: "a987",
    nombre: "Abbey Road",
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
    like: false
},
{
    id: "b654",
    nombre: "Origin of Symmetry",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
    like: false
},
{
    id: "c321",
    nombre: "Back in Black",
    imagen: "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
    like: false
}
];

/* --------------- FUNCION 1 - Capturar el nombre del usuario --------------- */
function obtenerUsuario(){
    const nombreUsuario = document.querySelector('#nombreUsuario');
    let usuario;

    do {
        usuario = prompt('Hola! ¿Cómo te llamas?').trim();
    } while( usuario == null || usuario === '' || usuario.length < 3)

    nombreUsuario.innerText = usuario;
}


/* --------------------- FUNCION 2 - Renderizar las card -------------------- */
function renderizarAlbumes(lista){
    const covers = document.querySelector('.covers');
    // Asegurarnos que el contenedor este vacio
    covers.innerHTML = '';

    lista.forEach( album => {  // Recorro el array
        
        covers.innerHTML += // html
                        `<li data-id="${album.id}">
                            <p> ${album.nombre } </p>
                            <img src="${ album.imagen}"  alt="${album.imagen}"> 
                            <i  id="${album.id}" class="fa fa-heart  ${  album.like  ? 'favorito'  : '' }  "></i>
                        </li>`;
        
    });

}


obtenerUsuario();
renderizarAlbumes(albumesFamosos);

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                   [3] FUNCION: mostrar datos del usuario                   */
/* -------------------------------------------------------------------------- */
// Dentro del div '.perfil' tenemos un parrafo con 2 span en los que debemos colocar
// correctamente su contenido.
// Para eso debemos hacer ciertos calculos y colocar esa info en el HTML. Debemos:
// 1- contar la cantidad de albumes del array y pintarlo en el span correspondiente
// 2- contar la cantidad de favoritos y pintarlo en el span correspondiente
// 3- tener en cuenta: usar las palabra en plural o en singular, según cuando
// sea necesario ( es decir: 1 album, 1 favorito / 2 albumes, 3 favoritos )
function mostrarDatosEnPerfil() {
    // desarrollar la función 👇

}
mostrarDatosEnPerfil();
