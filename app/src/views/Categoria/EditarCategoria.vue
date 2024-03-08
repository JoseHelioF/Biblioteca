<template>
  <h1>Cadastro Categoria</h1>

  <form @submit="submit">
    
    <p><label>Descriçao</label>
      <input type="text" v-model="form.descricao">
    </p>
    <button>Editar</button>
  </form>

</template>

<script>
import axios from "axios";

export default {
  name: 'EditarCategoria',
  data: () => ({
    form: {
      codigo: 0,
      descricao: ""
      }
  }),
  methods: {
    submit(event) {
      event.preventDefault();
    
      const { codigo } = this.$route.params;  
      this.editar(codigo);
    },

    editar(codigo) {
      axios.patch(`http://localhost:4500/categorias/${codigo}`, this.form, {})
        .then(({ data }) => {
          /* Sucesso */
        })
        .catch((error) => {
          /* Erro */
          console.log(error);
        })
    },
    consultar(codigo) {
      axios.get(`http://localhost:4500/categorias/${codigo}`, this.form, {})
        .then(({ data }) => {
          /* Sucesso */
          this.form = data;
        })
        .catch((error) => {
          /* Erro */
          console.log(error);
        })
    },
  },
  beforeMount() { /*  */
    const { codigo } = this.$route.params;
    this.consultar(codigo);
  }
}
</script>
