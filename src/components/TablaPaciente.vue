<template>
  <table>
    <thead>
      <tr>
        <td>ID</td>
        <td>Nombre</td>
        <td>Apellido</td>
        <td>Fecha de Nacimiento</td>
        <td>Acción</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="paciente in pacientes" :key="paciente.id">
        <td>{{ paciente.id }}</td>
        <td>{{ paciente.nombre }}</td>
        <td>{{ paciente.apellido }}</td>
        <td>{{ paciente.fechaNacimiento }}</td>
        <td><button v-on:click="ver(paciente)">Ver</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { obtenerPacientesFachada, obtenerPacientePorIdFachada } from "@/clients/pacienteClient";
export default {
  data() {
    return {
      pacientes: [],
      token: "",
    };
  },
  methods: {
    async obtenerTodos() {
      const tokenLogin = localStorage.getItem("tokenObtenido");
      this.token = tokenLogin;
      const res = await obtenerPacientesFachada(this.token);
      this.pacientes = res;
    },
    ver(paciente) {
      this.$emit("self", paciente);
    },
  },
  mounted() {
    this.obtenerTodos();
  },
};
</script>

<style scoped>
table {
  margin: 0 auto;
  border: solid 2px greenyellow;
}

tr,
td {
  border: solid 1px black;
}
</style>