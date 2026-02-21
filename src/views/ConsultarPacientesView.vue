<template>
  <TablaPaciente @self="handleSelfPaciente" />
  <div class="espacio"></div>
  <FormularioPaciente :self="selfPaciente" />
</template>

<script>
import TablaPaciente from "@/components/TablaPaciente.vue";
import FormularioPaciente from "@/components/FormularioPaciente.vue";

export default {
  components: {
    TablaPaciente,
    FormularioPaciente,
  },
  data() {
    return {
      selfPaciente: null,
    };
  },
  methods: {
    handleSelfPaciente(paciente) {
      this.selfPaciente = paciente;
    },
  },
};
</script>

<style scoped>
.espacio {
    margin: 20px;
}
</style>