import axios from 'axios';

const obtenerPacientes = async (token) => {
    const res = await axios.get("http://localhost:8081/consultorio/api/v1.0/pacientes", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.data);
    console.log(res);
    return res;
}

export async function obtenerPacientesFachada(token) {
    return await obtenerPacientes(token);
}

const obtenerPacientePorId = async (token, id) => {
    const res = await axios.get(`http://localhost:8081/consultorio/api/v1.0/pacientes/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.data);
    console.log(res);
    return res;
}

export async function obtenerPacientePorIdFachada(token, id) {
    return await obtenerPacientePorId(token, id);
}