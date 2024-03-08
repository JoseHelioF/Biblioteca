<template>
    <h1>Categoria</h1>

    codigo: {{ categoria.codigo }}
    categoria: {{ categoria }}
    <router-link :to="{ name: 'Categoria' }"> <button>Voltar</button> </router-link>
</template>

<script>
import axios from "axios";

export default {
    name: 'ConsultaCategoriaView',
    data: () => ({
        categoria: {}
    }),
    methods: {
        consultarCategoria() {
            const { codigo } = this.$route.params;
            axios.get(`http://localhost:4500/categorias/${codigo}`)
                .then((response) => {
                    /* Sucesso */
                    this.categoria = response.data;
                })
                .catch((error) => {
                    /* Erro */
                    console.log(error);
                })
        }
    },
    beforeMount() { /*  */
        this.consultarCategoria();
    }
}
</script>