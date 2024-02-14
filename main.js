import {crearUsuario, todosUsuarios, unUsuario} from "./http-usuarios.js";

const usuario = JSON.parse(sessionStorage.getItem('usuario'))
const divProgramador = document.getElementById("programador")
const divAdmin = document.getElementById("admin")
const todosUsuariosBoton = document.getElementById('rellenarUsuarios')
const cerrarTodosUsuarios = document.getElementById("borrarTabla")
const botonBuscarUnUsuario = document.getElementById("botonBuscarUnUsuario")
const inputIdUnUsuario = document.getElementById("inputIdUnUsuario")
const mensajeUnUsuario = document.getElementById("mensajeUnUsuario")
const borrarUnUsuario = document.getElementById("borrarUnUsuario")
const botonCrearUsuario = document.getElementById("botonCrearUsuario")
onInit()

function onInit() {
    divAdmin.style.display = 'none'
    divProgramador.style.display = 'none'
    if (usuario.usuario.rol === 'admin') {
        divAdmin.style.display = 'block'
    }else if (usuario.usuario.rol === 'programador') {
        divProgramador.style.display = 'block'
    }
}

function rellenarTablaTodosUsuarios(usuarios) {

    const tablaBody = document.getElementById('tablaUsuarios').getElementsByTagName('tbody')[0];
    tablaBody.innerHTML = ''; // Limpiar la tabla antes de rellenarla

    usuarios.forEach(usuario => {
        const fila = tablaBody.insertRow();

        Object.values(usuario).forEach(texto => {
            const celda = fila.insertCell();
            celda.textContent = texto;
        });
    });

    // Asegurarse de que el contenedor de la tabla sea visible
    document.getElementById('contenedorTabla').style.display = '';
}

cerrarTodosUsuarios.addEventListener("click", () => {
    document.getElementById('tablaUsuarios').getElementsByTagName('tbody')[0].innerHTML = '';
    document.getElementById('contenedorTabla').style.display = 'none';

})


todosUsuariosBoton.addEventListener("click", async () => {
    let data = await todosUsuarios(usuario.token)
    if (data.status === 200) {
        data = await data.json()
        rellenarTablaTodosUsuarios(data.usuarios)
    }
})

botonBuscarUnUsuario.addEventListener("click", async () => {
    let data = await unUsuario(usuario.token, inputIdUnUsuario.value)
    console.log(data)
    if (data.status === 200) {
        data = await data.json()
        mensajeUnUsuario.innerHTML = "<br> Nombre: " + data.usuario.nombre + "<br> Email " +
            data.usuario.email + "<br>  Id: " + data.usuario._id + "<br>  Rol: " + data.usuario.rol +  "<br>  Tareas completadas: " + data.usuario.tareas_completadas
    }else if (data.status === 203) {
        alert("Usuario no encontrado")
    }
})

borrarUnUsuario.addEventListener("click", () => {
    mensajeUnUsuario.textContent = ""
    inputIdUnUsuario.value = ""
})

botonCrearUsuario.addEventListener("click", async () => {
    let nombre = document.getElementById("nombreCrearUsuario").value
    let email = document.getElementById("emailCrearUsuario").value
    let rol = document.getElementById("rolCrearUsuario").value
    let pswd = document.getElementById("passwordCrearUsuario").value
    let data = await crearUsuario(usuario.token, nombre, email, pswd, rol)
    if (data.status === 201) {
        data = await data.json()
        alert("Usuario creado correctamente")
        document.getElementById("nombreCrearUsuario").value = ""
        document.getElementById("emailCrearUsuario").value = ""
        document.getElementById("rolCrearUsuario").value = ""
        document.getElementById("passwordCrearUsuario").value = ""
    }else {
        alert("Error al crear el usuario")
    }
})