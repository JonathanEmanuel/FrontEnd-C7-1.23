// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.

// 🖍 Si existe un token guardado
const jwt = JSON.parse( localStorage.getItem('jwt') );
//console.log(jwt);

if( ! jwt){ // Si no éxiste el jwt vamos al login
  location.replace('index.html');
}

/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  /* ---------------- variables globales y llamado a funciones ---------------- */
  const btnCerrarSesion = document.querySelector('#closeApp');
  const userName = document.querySelector('.user-info p')
  const formCrearTarea = document.querySelector('.nueva-tarea');
  obtenerNombreUsuario();
  consultarTareas();

  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function () {
   if( confirm('¿Desar salir de la App?')  ){
    // Elimino los datos del storage
    localStorage.removeItem('jwt');
    location.replace('index.html');
   }



  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */
  function obtenerNombreUsuario() {
    const endPoint = 'https://todo-api.ctd.academy/v1/users/getMe';
    const config = {
        method: 'GET',
        headers: {
          authorization: jwt
        }
    }


    fetch(endPoint, config)
    .then( resp => resp.json())
    .then( data => {
      //console.log(data);

      const nombre = `${data.firstName} ${data.lastName}`;
      userName.textContent = nombre;
    })



  };


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    const endPoint = 'https://todo-api.ctd.academy/v1/tasks';
    
    const config = {
        method: 'GET',
        headers: {
          authorization: jwt ,
          'Content-type': 'application/json'
        }
    }
    fetch(endPoint, config)
    .then( resp => resp.json())
    .then( data => {
      console.log(data);
      renderizarTareas(data);
    });
    
  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener('submit', function (event) {
    const inputTarea = document.querySelector('#nuevaTarea');
    event.preventDefault();

    const endPoint = 'https://todo-api.ctd.academy/v1/tasks';
    const settings = {
      description: inputTarea.value,
      completed: false
    }
    
    const config = {
        method: 'POST',
        body: JSON.stringify(settings),
        headers: {
          authorization: jwt ,
          'Content-type': 'application/json'
        }
    }
    fetch(endPoint, config)
    .then( resp => resp.json())
    .then( data => {
      console.log(data);
      consultarTareas();
    });


  });

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {
    const seccionTareasPendientes = document.querySelector('.tareas-pendientes');
    const seccionTareasTerminadas = document.querySelector('.tareas-terminadas');

    seccionTareasPendientes.innerHTML = '';
    seccionTareasTerminadas.innerHTML = '';

    listado.forEach(tarea => {
      let fecha = new Date(tarea.createdAt)

      if( !tarea.completed ){

        seccionTareasPendientes.innerHTML += // html
          `<li class="tarea">
            <button class="change" id="${tarea.id}"><i class="fa-regular fa-circle"></i></button>
            <div class="descripcion">
              <p class="nombre"> ${tarea.description} </p>
              <p class="timestamp">${fecha.toLocaleDateString()} : ${fecha.toLocaleTimeString()}</p> 
            </div>
          </li>`;
      } else {
        seccionTareasTerminadas.innerHTML += // html
          `<li class="tarea">
            <div class="hecha">
              <i class="fa-regular fa-circle-check"></i>
            </div>
            <div class="descripcion">
              <p class="nombre"> ${tarea.description} </p>
              <p class="timestamp">${fecha.toLocaleDateString()} : ${fecha.toLocaleTimeString()}</p> 
              <div class="cambios-estados">
                <button class="change incompleta" id="${tarea.id}" ><i class="fa-solid fa-rotate-left"></i></button>
                <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
              </div>
            </div>
          </li>`;
      }

    });

    botonesCambioEstado();
    botonBorrarTarea();

  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
        // Agrego el eventListner 
        const btnsChange = document.querySelectorAll('.change'); //NodeList


        btnsChange.forEach( btn => {
    
            btn.addEventListener('click', function(evento){
              console.log(evento.target);
              const id = evento.target.id;
              const endPoint = 'https://todo-api.ctd.academy/v1/tasks/' +id;
    
              // VERIFICO SI TIENE LA CLASE incompleta
    
              /*          
              var estado;
    
              if( evento.target.classList.contains('incompleta') ){
                console.log('incompleta');
                estado = false;
              } else {
                console.log('Completa')
                estado = true
              } */
    
            
              const datos = {
                //completed: estado,
                completed: !evento.target.classList.contains('incompleta')
              }
             
              const config = {
                method: 'PUT',
                headers: {
                  authorization: jwt ,
                  'Content-type': 'application/json'
                },
                body: JSON.stringify( datos )
              }
              fetch(endPoint, config)
              .then( resp => resp.json())
              .then( data => {
                consultarTareas();
              });
    
            })
        });
    



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
   
    

    

  };

});