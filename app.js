import {login} from '/http-access.js'

const email = document.getElementById("emailLogin")
const password = document.getElementById("passwoordLogin")
const botonLogin = document.getElementById("botonLogin")
const mensaje = document.getElementById("mensaje")

onInit()

function onInit() {
    email.value = "prueba@gmail.com"
    password.value = "prueba"
}

botonLogin.addEventListener('click', async () => {
    console.log(email.value, password.value)
    let data = await login(email.value, password.value)
    if (data.status === 203) {
        data = await data.json()
        mensaje.textContent = data.msg
    }else if (data.status === 200) {
        data = await data.json()
        let dataSessionStorage = {
            token: data.token,
            usuario: data.usuario
        }
        guardarSessionStorage(data)
        window.location.href = "main.html"
    }
})
function guardarSessionStorage(data) {
    sessionStorage.setItem('usuario',JSON.stringify(data))
}


