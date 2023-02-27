let encabezado = document.querySelector('header');
const areaNoticias = document.querySelector('.noticias');
/* let titulo2 = document.createElement('h2');
let texto = document.createTextNode('Soy un  simple texto'); */


//document.querySelectorAll('img')[0].setAttribute('src', 'http://127.0.0.1:5500/Semana_02/img/escuela.webp');

/* 
titulo2.appendChild(texto); */

console.log(areaNoticias);
// Simulamos que obtenemos los datos de un servidor
const listadoNoticias = [{
    titulo: "La emoción de Lisandro Martínez",
    epigrafe: "La increíble ovación de los hinchas de Manchester United al defensor argentino: 'Quise llorar'.",
    foto: "./img/futbol.webp"
},
{
    titulo: "La renuncia de Liz Truss",
    epigrafe: "Boris Johnson interrumpió sus vacaciones y vuelve a sonar fuerte entre los posibles sucesores.",
    foto: "./img/boris.webp"
},
{
    titulo: "Los motivos",
    epigrafe: "Una escuela argentina fue elegida entre las diez mejores del mundo.",
    foto: "./img/escuela.webp"
}
]

// Recorro el array

listadoNoticias.forEach(noticia => {
    // Creamos los elementos
    const articulo = document.createElement('article');
    const titulo = document.createElement('h2');
    const tituloTexto = document.createTextNode( noticia.titulo  );
    const imagen = document.createElement('img');
    const texto = document.createElement('p');

    // Agrego las propiedades
    titulo.appendChild(tituloTexto);
    texto.innerText = noticia.epigrafe;
    imagen.setAttribute('src', noticia.foto);
    imagen.setAttribute('alt', 'Foto noticia');

    //console.log(articulo, titulo, imagen, texto);

    articulo.appendChild(titulo);
    articulo.appendChild(imagen);
    articulo.appendChild(texto);

    console.log(articulo);

    // Por último agrego el articulo como hijo del area de Noticias
    areaNoticias.appendChild(articulo);

});


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Antes de comenzar vamos a comentar la parte de PRACTICANDO ATRIBUTOS y PRACTICANDO CREACION DE NODOS.
// Una vez que solo tenemos el código comentado podemos empezar la practica.
// 1- Debemos reutilizar el "listadoNoticias" para lograr el mismo resultado de crear los nodos dinamicamente.
// 2- La diferencia ahora radica en utilizar un bucle y dentro del mismo utilizar la notación de Plantillas Literales (con comillas invertidas -> ``)
// 3- El resultado debe ser el mismo que en el caso anterior pero vamos a implementar el método innerHTML para insertar la plantilla creada.
// Ejemplo: si quiero insertar un titulo en el body, haría los siguiente:
// document.querySelector('body').innerHTML += `<h1>Nuevo Título</h1>`;


function renderizarElementos(){

}


renderizarElementos();