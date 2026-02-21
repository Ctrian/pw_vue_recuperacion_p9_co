<template>
  <h1>hola desde el componenete login</h1>
  <form @submit.prevent="obtenerToken">
    <label for="">Usuario: </label>
    <input type="text" placeholder="Ingrese su nombre de usuaurio" v-model="usuario"/>

    <label for="">Contraseña: </label>
    <input type="password" placeholder="Ingrese su contraseña" v-model="contra"/>

    <button type="submit">Ingresar</button>
  </form>
</template>

<script>
import { obtenerTokenFachada } from "../clients/oauthClient.js";

export default {
  data() {
    return {
      usuario: "",
      contra: "",
      token: "",
    };
  },
  methods: {
    async obtenerToken() {
      try {
        const res = await obtenerTokenFachada(this.usuario, this.contra);
        console.log(res);
        localStorage.setItem("tokenObtenido", this.token);
      } catch (error) {
        console.error("Error: ", this.token);
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 350px;
  margin: 0 auto;
}

label {
  margin-top: 5px;
  text-align: left;
}

button {
  margin-top: 10px;
  padding: 5px;
}
</style>