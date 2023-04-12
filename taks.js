// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.

//Verificar si existe un token guardado
const jwt = JSON.parse(localStorage.getItem("jwt"));

if (!jwt) {
  location.replace("index.html");
}

/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener("load", function () {
  /* ---------------- variables globales y llamado a funciones ---------------- */
  const btnCerrarSesion = document.querySelector("#closeApp");
  const formCrearTarea = document.querySelector(".nueva-tarea");
  const userName = document.querySelector(".user-info p");
  const inputNuevaTarea = document.querySelector("#nuevaTarea");

  obtenerNombreUsuario();
  consultarTareas();

  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener("click", function () {
    if (confirm("Desea salir de la App?")) {
      localStorage.removeItem("jwt");
      location.replace("index.html");
    }
  });
  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    const endPoint = "https://todo-api.ctd.academy/v1/users/getMe";
    const config = {
      method: "GET",
      headers: {
        authorization: jwt,
      },
    };

    fetch(endPoint, config)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);
        const nombre = `${data.firstName} ${data.lastName}`;
        userName.textContent = nombre;
      });
  }

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    const endPoint = "https://todo-api.ctd.academy/v1/tasks";
    const config = {
      method: "GET",
      headers: {
        authorization: jwt,
        "Content-type": "application/json",
      },
    };

    fetch(endPoint, config)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        renderizarTareas(data);
      })

      .catch((error) => {
        // Si no se cumple
        console.log("ocurrio error", error);
      });
  }

  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener("submit", function (event) {
    event.preventDefault();

    const tarea = {
      description: inputNuevaTarea.value,
      completed: false,
    };

    console.log(inputNuevaTarea.value);

    const endPoint = "https://todo-api.ctd.academy/v1/tasks";
    const config = {
      method: "POST",
      body: JSON.stringify(tarea),
      headers: {
        authorization: jwt,
        "Content-type": "application/json",
      },
    };

    fetch(endPoint, config)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);
        consultarTareas();
      })

      .catch((error) => {
        // Si no se cumple
        console.log("ocurrio error", error);
      });
  });

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {
    const seccionTareasPendientes =
      document.querySelector(".tareas-pendientes");
    const seccionTareasTerminadas =
      document.querySelector(".tareas-terminadas");
    seccionTareasPendientes.innerHTML = "";
    seccionTareasTerminadas.innerHTML = "";

    const seccionContadorTareas = document.querySelector("#cantidad-finalizadas" );
    let contador = 0;

    listado.forEach((tarea) => {
      let fecha = new Date(tarea.createdAt);
      if (!tarea.completed) {
        seccionTareasPendientes.innerHTML += `<li class="tarea">
      <button class="change" id="${tarea.id}" value="${tarea.description}">
      <i class="fa-regular fa-circle"></i>
      </button>
      <div class="descripcion">
      <p class="nombre"> ${tarea.description}</p>
      <p class="timestamp"> ${fecha.toLocaleDateString()} : ${fecha.toLocaleTimeString()}</p>
      </div>
      </li>`;
      } else {
        
        seccionTareasTerminadas.innerHTML += `<li class="tarea">
        <div class="hecha">
          <i class="fa-regular fa-circle-check"></i>
        </div>
        <div class="descripcion">  
          <p class="nombre">${tarea.description}</p>
          <p class="timestamp">${fecha.toLocaleDateString()} : ${fecha.toLocaleTimeString()}</p>
          <div class="cambios-estados">
            <button class="change incompleta" id="${tarea.id}"value="${
          tarea.description
        }" ><i class="fa-solid fa-rotate-left"></i></button>
            <button class="borrar" id="${
              tarea.id
            }"><i class="fa-regular fa-trash-can"></i></button>
          </div>
        </div>
      </li>`;
      contador += 1;
    }
          seccionContadorTareas.innerText = contador;
    });

    //Agregar el eventListener
    const btnChange = document.querySelectorAll(".change");

    btnChange.forEach((btn) => {
      btn.addEventListener("click", function (evento) {
        botonesCambioEstado(evento.target);
      });
    });
    const btnBorrar = document.querySelectorAll(".borrar");

    btnBorrar.forEach((btn) => {
      btn.addEventListener("click", function (evento) {
        if (confirm("Quieres Eliminar la tarea?")) {
          botonBorrarTarea(evento.target);
        }
      });
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado(info) {
    const endPoint = "https://todo-api.ctd.academy/v1/tasks/" + info.id;

    if (info.getAttribute("class") == "change incompleta") {
      const tarea = {
        description: info.value,
        completed: false,
      };
      const config = {
        method: "PUT",
        body: JSON.stringify(tarea),
        headers: {
          authorization: jwt,
          "Content-type": "application/json",
        },
      };
      fetch(endPoint, config)
        .then((respuesta) => respuesta.json())
        .then((data) => {
          consultarTareas();
        })

        .catch((error) => {
          // Si no se cumple
          console.log("ocurrio error", error);
        });
    } else {
      const tarea = {
        description: info.value,
        completed: true,
      };
      const config = {
        method: "PUT",
        body: JSON.stringify(tarea),
        headers: {
          authorization: jwt,
          "Content-type": "application/json",
        },
      };
      fetch(endPoint, config)
        .then((respuesta) => respuesta.json())
        .then((data) => {
          consultarTareas();
        })

        .catch((error) => {
          // Si no se cumple
          console.log("ocurrio error", error);
        });
    }
  }
  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea(info) {
    const endPoint = "https://todo-api.ctd.academy/v1/tasks/" + info.id;

    const config = {
      method: "DELETE",
      headers: {
        authorization: jwt
      },
    };
    fetch(endPoint, config)
      .then((respuesta) => respuesta.json())
      .then(() => {
        consultarTareas();
      })

      .catch((error) => {
        // Si no se cumple
        console.log("ocurrio error", error);
      });
        }
  
});
