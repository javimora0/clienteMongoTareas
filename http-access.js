const URL = 'http://localhost:9090/api/'
export async function login(email, password) {
    const usuario = {
        email:email,
        password: password
    }
    const headers = {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(usuario)
    }

    try {
        const response = await fetch(URL + 'login', headers);
        if (!response.ok) {
            throw new Error(response);
        }
        return await response;
    } catch (error) {
        console.log(error);
    }
}
