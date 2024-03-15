<template>
  <div class="container">
    <h1 class="mb-5">Categoria</h1>

    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Descrição</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="categoria in listaCategoria">
          <th scope="row">{{ categoria.codigo }}</th>
          <th scope="row">{{ categoria.descricao }}</th>

         <td>
            <button @click="deletar(categoria.codigo)">
              Deletar
            </button>
            <router-link :to="{ name: 'ConsultarCategoria', params: { codigo: categoria.codigo } }">
              <button>
                Consultar
              </button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
