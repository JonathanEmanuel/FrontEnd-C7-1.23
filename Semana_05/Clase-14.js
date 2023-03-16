window.addEventListener('load', function(){
    console.log('Cargo la Pagina');

    validarUsuario(); // Script de clase 15
    let usuario = localStorage.getItem('usuario');

    usuario = JSON.parse(usuario);
    //console.log(usuario);

    renderizarDatosUsuario(usuario);
    cerrarSesion();
});



// FUNCION PARA
// 1. Con los dato obtenidos del localSorage mostrar los datos en DOM
// 2. Crea un boton cerrar sesion el cual elimina los datos de localStorage
function renderizarDatosUsuario(usuario){
    const emailLabel = document.querySelector('#email');
    const perfilLabel = document.querySelector('#perfil');

    emailLabel.innerText = usuario.email;
    perfilLabel.innerText = usuario.rol;
}

/* function botonCerrarSesion(){
    let div = document.querySelector(".user")
    div.innerHTML+=
    `
    <button id="cerrar">Cerrar Sesión</button>
    `;
    let cerrar = document.querySelector("#cerrar");


    cerrar.addEventListener('click', function(){
        console.log('Se cerro la sesión');
        //localStorage.removeItem("usuario");
        //location.href = 'index.html';
    });
    

} */

function cerrarSesion(){

    let user = document.querySelector('.user');
        
    const boton = //html
    
                `<button class="buttonCerrarSesion" style.color="green">Cerrar sesión</button>`;
    
        user.innerHTML += boton;
        
        const capturaBoton = document.querySelector('.buttonCerrarSesion');
        capturaBoton.style= "background:rgba(255,0,0,0.2);padding:5px 20px;color: red;margin: 20px;border-style:none;cursor: pointer;";
        capturaBoton.addEventListener("click", function (){
            const confirmacion =confirm("¿Seguro desea cerrar sesión?");
            if(confirmacion){
            
                localStorage.clear();
                //location.href = 'index.html';
                location.replace('index.html');
            }
            
        })
    }