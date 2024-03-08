<template>
  <h1>Livros</h1>

  <div class="alert alert-success" role="alert">
    A simple success alert—check it out!
  </div>

  <ul>
    <li v-for="livro in listaLivro">
      Código {{ livro.codigo }}
      <button @click="deletar(livro.codigo)">
        Deletar
      </button>
      <router-link :to="{ name: 'ConsultarLivro', params: { codigo: livro.codigo } }">
        <button>
          Consultar
        </button>
      </router-link>
    </li>
  </ul>
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
