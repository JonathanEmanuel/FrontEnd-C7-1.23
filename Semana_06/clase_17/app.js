/* -------------------------------------------------------------------------- */
/*                     FUNCION 01 - Consume dato de la API                    */
/* -------------------------------------------------------------------------- */
// API: https://reqres.in/
const btn = document.querySelector('button');
const main = document.querySelector('#app');
const endPoint = 'https://reqres.in/api/users?page=1';
//console.log(btn, main);
btn.addEventListener('click', function(){
    console.info('Consulta a la API');

    fetch(endPoint)
    .then( response => response.json())
    .then( dataJson => {
        console.log(dataJson);
        let data =  dataJson.data;
        renderizarUsuarios( data );
    })

})


/* -------------------------------------------------------------------------- */
/*                       FUNCION 02 - Renderiza usuarion                      */
/* -------------------------------------------------------------------------- */
function renderizarUsuarios(listado){
    main.innerHTML = '';
    listado.forEach(usuario => {
        main.innerHTML += // html
        `<div class="card">
            <h4><strong>${usuario.last_name}</strong>  ${usuario.first_name}</h4>
            <p>${usuario.email}</p>
            <img src="${usuario.avatar}" alt="${usuario.first_name}">
            <a href="detalle.html?id=${usuario.id} ">Ver detalles</a>
        </div>`
    });
}