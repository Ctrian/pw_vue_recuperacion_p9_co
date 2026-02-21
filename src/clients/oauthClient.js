import axios from 'axios';

const obtenerToken = async (usuario, contrasenia) => {
    const res = await axios.get("http://localhost:8082/auth/token", {
        params: {
            user: usuario,
            password: contrasenia
        }
    }).then(res => res.data);
    console.log(res);
    return res;
}

export async function obtenerTokenFachada(usuario, contrasenia) {
    return await obtenerToken(usuario, contrasenia);
}