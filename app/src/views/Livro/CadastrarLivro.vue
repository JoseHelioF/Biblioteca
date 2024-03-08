<template>
  <h1>Cadastro Produto</h1>

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
    <button>Gravar</button>
  </form>

</template>

<script>
import axios from "axios";

export default {
  name: 'CadastrarLivro',
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
      this.criar();
    },

    criar() {
      axios.post('http://localhost:4500/livros', this.form, {})
        .then((response) => {
          /* Sucesso */
          this.listaLivro = response.data;
        })
        .catch((error) => {
          /* Erro */
          console.log(error);
        })
    },
  },
}
</script>
