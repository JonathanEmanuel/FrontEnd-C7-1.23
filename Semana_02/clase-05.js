const sitio = document.querySelector('body');
const btn = document.querySelector('.tema button');
const menusItems = document.querySelectorAll('nav li');
const infoClima = document.querySelector('.clima');

console.log(sitio, btn, menusItems, infoClima);


menusItems.forEach(item => {
    item.style.textTransform = 'uppercase';
    item.style.color = 'antiquewhite';
});

sitio.classList.add('dark');

//sitio.classList.remove('dark');

function actualizarClima(){

    let clima = {
        temperatura: 31,
        zona: 'Capital Federal',
        icon: '🌤'
    }

    infoClima.innerText = ` ${clima.icon}  ${clima.temperatura} ${clima.zona} `;

    //infoClima.innerText = clima.icon + ' ' + clima.temperatura + ' ' + clima.zona;

    // Otra forma de realizarlo

/*

    let temperatura = 28;
    let zona = 'Capital Federal';
    let nuevoClima = '🌤' + temperatura + ' ' + zona;
    infoClima.innerText =  nuevoClima; */
}



//actualizarClima();

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Primero debemos comentar o eliminar las líneas que modifican las clases de "sitio"
// 1- Desarrollar la función a continuacion para que el usuario elija el tema del sitio.
// 2- Debemos preguntarle al usuario mediante un confirm si desea usar el modo oscuro.
// 3- Si el usuario confirma debemos aplicar la clase "dark" al "sitio", si cancela debe quedar en modo claro.
// 4- A su vez, si está en modo onsecuritypolicyviolation, el texto del boton debe decir "Cambiar a modo claro 🌞". De lo contrario, si está en modo claro debeb decir "Cambiar a modo oscuro 🌛"