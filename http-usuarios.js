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

export async function obtenerRanking(token) {
    const headers = {
        method: "GET",
        headers:{
            "Content-Type":"application/json",
            "x-token":token
        }
    }
    try {
        const response = await fetch(URL + `programador/ranking`, headers);
        return await response;
    } catch (error) {
        console.log(error);
    }
}

export async function tareasUnUsuario(token, id) {
    const headers = {
        method: "GET",
        headers:{
            "Content-Type":"application/json",
            "x-token":token
        }
    }
    try {
        const response = await fetch(URL + `programador/tareas/` + id, headers);
        return await response;
    } catch (error) {
        console.log(error);
    }
}

export async function cambiarPassword(token, antigua_password, nueva_password, id) {
    const body = {
        "old_password":antigua_password,
        "new_password":nueva_password
    }
    const headers = {
        method: "PUT",
        headers:{
            "Content-Type":"application/json",
            "x-token":token
        },
        body: JSON.stringify(body)
    }

    try {
        const response = await fetch(URL + `programador/change_password/` + id, headers);
        return await response;
    } catch (error) {
        console.log(error);
    }
}


export async function crearTarea(token, descripcion, dificultad, hp, hr, porcentaje, completada) {
    const body = {
        descripcion: descripcion,
        dificultad: dificultad,
        horas_previstas: hp,
        horas_realizadas: hr,
        porcentaje: porcentaje,
        completada:completada
    }
    const headers = {
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            "x-token":token
        },
        body: JSON.stringify(body)
    }

    try {
        const response = await fetch(URL + `admin/tareas/`, headers);
        return await response;
    } catch (error) {
        console.log(error);
    }
}

export async function asignarTareaUsuario(token, id_tarea, id_usuario) {
    const headers = {
        method: "PUT",
        headers:{
            "Content-Type":"application/json",
            "x-token":token
        },
    }
    try {
        const response = await fetch(URL + `admin/tarea/usuario/${id_usuario}/${id_tarea}`, headers);
        return await response;
    } catch (error) {
        console.log(error);
    }
}