<template>
  <h1>Categoria</h1>

  <ul>
    <li v-for="categoria in listaCategoria">
      Nome {{ categoria.descricao }}
      <button @click="deletar(categoria.codigo)">
        Deletar
      </button>
      <router-link :to="{ name: 'ConsultarCategoria', params: { codigo: categoria.codigo } }">
        <button>
          Consultar
        </button>
      </router-link>
    </li>
  </ul>
  <router-link :to="{ name: 'CadastrarCategoria' }"><button>Criar categoria</button></router-link>

</template>

<script>
import axios from "axios";

export default {
  name: 'CategoriaView',
  data: () => ({
    listaCategoria: []
  }),
  methods: {
    ConsultarCategoria() {
      axios.get('http://localhost:4500/categorias')
        .then((response) => {
          /* Sucesso */
          this.listaCategoria = response.data;
        })
        .catch((error) => {
          /* Erro */
          console.log(error);
        })
    },
    deletar(codigo){
      axios.delete(`http://localhost:4500/categorias/${codigo}`)
        .then(() => {
          /* Sucesso */
          alert(`Categoria de código ${codigo} deletado!`)
          this.ConsultarCategoria();
        })
        .catch((error) => {
          /* Erro */
          console.log(error);
        })
    }
  },
  beforeMount() { /*  */
    this.ConsultarCategoria();
  }
}
</script>
