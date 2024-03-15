<template>
  <h1>Cadastro Livro</h1>

  <form @submit="submit">
    <p>
      <label>Titulo</label>
      <input type="text" v-model="form.titulo">
    </p>

    <p>
      <label>Autor</label>
      <input type="text" v-model="form.autor">
    </p>

    <p>
      <label>Descrição</label>
      <input type="text" v-model="form.descricao">
    </p>

    <p>
      <label>Categoria</label>
      <input type="number" v-model="form.codigo_categoria">
    </p>

    <p>
      <label>Ano de publicação</label>
      <input type="number" v-model="form.ano_publicacao">
    </p>

    <p>
      <label>Copias</label>
      <input type="number" v-model="form.copia">
    </p>

    <p>
      <label>Copias Disponiveis</label>
      <input type="number" v-model="form.copia_disponivel">
    </p>

    <button>Editar</button>
  </form>

</template>

<script>
import axios from "axios";

export default {
  name: 'EditarLivro',
  data: () => ({
    form: {
      codigo: 0,
      codigo_categoria: 1,
      titulo: "",
      autor: "",
      descricao: "",
      ano_publicacao: 0,
      copia: 0,
      copia_disponivel: 0
    }
  }),
  methods: {
    submit(event) {
      event.preventDefault();

      const { codigo } = this.$route.params;
      this.editar(codigo);
    },

    editar(codigo) {
      axios.patch(`http://localhost:4500/livros/${codigo}`, this.form, {})
        .then(({ data }) => {
          /* Sucesso */
        })
        .catch((error) => {
          /* Erro */
          console.log(error);
        })
    },
    consultar(codigo) {
      axios.get(`http://localhost:4500/livros/${codigo}`, this.form, {})
        .then(({ data }) => {
          /* Sucesso */
          this.form = data;
          console.log("Consulta");
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
