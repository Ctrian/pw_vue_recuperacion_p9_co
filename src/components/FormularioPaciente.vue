<template>
  <form @submit.prevent="">
    <label for="">ID</label>
    <input type="text" v-model="id">

    <label for="">Nombre</label>
    <input type="text" v-model="nombre">

    <label for="">Apellido</label>
    <input type="text" v-model="apellido">

    <label for="">Direccion</label>
    <input type="text" v-model="direccion">

    <label for="">Fecha de Nacimiento</label>
    <input type="Date" v-model="fechaNacimiento">
  </form>
</template>

<script>
export default {
  props: {
    self: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      id: "",
      nombre: "",
      apellido: "",
      direccion: "",
      fechaNacimiento: "",
    };
  },
  watch: {
    self: {
      handler(newVal) {
        if (newVal) {
          this.id = newVal.id || "";
          this.nombre = newVal.nombre || "";
          this.apellido = newVal.apellido || "";
          this.direccion = newVal.direccion || "";
          this.fechaNacimiento = newVal.fechaNacimiento || "";
        }
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 5px;
    max-width: 350px;
}

label {
    text-align: left;
}
</style>