<template>
    <h1>Livros</h1>

    codigo: {{ livro.codigo }}
    livro: {{ livro }}
    <router-link :to="{ name: 'Livro' }"> <button>Voltar</button> </router-link>
</template>

<script>
import axios from "axios";

export default {
    name: 'ConsultaLivroView',
    data: () => ({
        livro: {}
    }),
    methods: {
        consultarLivro() {
            const { codigo } = this.$route.params;
            axios.get(`http://localhost:4500/livros/${codigo}`)
                .then((response) => {
                    /* Sucesso */
                    this.livro = response.data;
                })
                .catch((error) => {
                    /* Erro */
                    console.log(error);
                })
        }
    },
    beforeMount() { /*  */
        this.consultarLivro();
    }
}
</script>