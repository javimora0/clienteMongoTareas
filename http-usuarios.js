const URL = 'http://localhost:9090/api/'

export async function todosUsuarios(token) {
    const headers = {
        method: "GET",
        headers:{
            "Content-Type":"application/json",
            "x-token":token
        }
    }

    try {
        const response = await fetch(URL + 'admin/usuarios', headers);
        if (!response.ok) {
            throw new Error(response);
        }
        return await response;
    } catch (error) {
        console.log(error);
    }
}

export async function unUsuario(token, id) {
    const headers = {
        method: "GET",
        headers:{
            "Content-Type":"application/json",
            "x-token":token
        }
    }
    try {
        const response = await fetch(URL + `admin/usuarios/${id}`, headers);
        return await response;
    } catch (error) {
        console.log(error);
    }
}

export async function crearUsuario(token, nombre, email, password, rol) {
    let usuario = {
        nombre: nombre,
        email: email,
        password: password,
        rol: rol
    }
    const headers = {
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            "x-token":token
        },
        body: JSON.stringify(usuario)
    }
    try {
        const response = await fetch(URL + `admin/usuarios`, headers);
        return await response;
    } catch (error) {
        console.log(error);
    }
}

export async function obtenerTareasDisponibles(token) {
    const headers = {
        method: "GET",
        headers:{
            "Content-Type":"application/json",
            "x-token":token
        }
    }
    try {
        const response = await fetch(URL + `programador/tareas/disponibles`, headers);
        return await response;
    } catch (error) {
        console.log(error);
    }
}
