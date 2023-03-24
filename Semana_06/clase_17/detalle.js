const btn = document.querySelector('button');
const main = document.querySelector('#app');

btn.addEventListener('click', function() {
    window.location.href = 'index.html';
})

const id = location.href.split('=')[1];

fetch(`https://reqres.in/api/users/${id}`)
.then( response => response.json())
.then( dataJson => {
    console.log(dataJson.data);
    let data =  dataJson.data;
    renderizarUsuario(data);
    
})


function renderizarUsuario(usuario){
    main.innerHTML = // html
    `<div class="card">
        <h4><strong>${usuario.last_name}</strong>  ${usuario.first_name}</h4>
        <p>${usuario.email}</p>
        <img src="${usuario.avatar}" alt="${usuario.first_name}">
        <a href="detalle.html?id=${usuario.id}">Ver detalles</a>
    </div>`;
}