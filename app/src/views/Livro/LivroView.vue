<template>
  <div class="container">
    <h1 class="mb-5">Livros</h1>

    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Titulo</th>
          <th scope="col">Autor</th>
          <th scope="col">Descrição</th>
          <th scope="col">Categoria</th>
          <th scope="col">Ano</th>
          <th scope="col">Copias</th>
          <th scope="col">Copias Disponiveis</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="livro in listaLivro">
          <th scope="row">{{ livro.codigo }}</th>
          <td>{{ livro.titulo }}</td>
          <td>{{ livro.autor }}</td>
          <td>{{ livro.descricao }}</td>
          <td>{{ livro.codigo_categoria }}</td>
          <td>{{ livro.ano }}</td>
          <td>{{ livro.copias }}</td>
          <td>{{ livro.copias_disponiveis }}</td>
          <td>
            <button @click="deletar(livro.codigo)">
              Deletar
            </button>
            <router-link :to="{ name: 'ConsultarLivro', params: { codigo: livro.codigo } }">
              <button>
                Consultar
              </button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
  
  <router-link :to="{ name: 'CadastrarLivro' }"><button>Criar livro</button></router-link>

</template>

<script>
import axios from "axios";

export default {
  name: 'LivroView',
  data: () => ({
    listaLivro: []
  }),
  methods: {
    consultarLivros() {
      axios.get('http://localhost:4500/livros')
        .then((response) => {
          /* Sucesso */
          this.listaLivro = response.data;
        })
        .catch((error) => {
          /* Erro */
          console.log(error);
        })
    },
    deletar(codigo) {
      axios.delete(`http://localhost:4500/livros/${codigo}`)
        .then(() => {
          /* Sucesso */
          alert(`Livro de código ${codigo} deletado!`)
          this.consultarLivros();
        })
        .catch((error) => {
          /* Erro */
          console.log(error);
        })
    }
  },
  beforeMount() { /*  */
    this.consultarLivros();
  }
}
</script>
