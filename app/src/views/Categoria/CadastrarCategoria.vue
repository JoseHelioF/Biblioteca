<template>
  <h1>Cadastro Categoria</h1>

  <form @submit="submit">
    <p>
      <label>Descrição</label>
      <input type="text" v-model="form.descricao">
    </p>
    
    <button>Gravar</button>
  </form>

</template>

<script>
import axios from "axios";

export default {
  name: 'CadastrarCategoria',
  data: () => ({
    form: {
      codigo: 0,
      descricao: ""
    }
  }),
  methods: {
    submit(event) {
      event.preventDefault();
      this.criar();
    },

    criar() {
      axios.post('http://localhost:4500/categorias', this.form, {})
        .then((response) => {
          /* Sucesso */
          this.listaCategoria = response.data;
        })
        .catch((error) => {
          /* Erro */
          console.log(error);
        })
    },
  },
}
</script>
