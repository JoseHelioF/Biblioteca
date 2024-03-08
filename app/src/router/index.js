import { createRouter, createWebHistory } from 'vue-router'

import LivroView from "@/views/Livro/LivroView.vue"
import ConsultaLivroView from "@/views/Livro/ConsultaLivroView.vue"
import CadastrarLivro from "@/views/Livro/CadastrarLivro.vue"
import EditarLivro from "@/views/Livro/EditarLivro.vue"

import CategoriaView from "@/views/Categoria/CategoriaView.vue"
import ConsultaCategoriaView from "@/views/Categoria/ConsultaCategoriaView.vue"
import CadastrarCategoria from "@/views/Categoria/CadastrarCategoria.vue"
import EditarCategoria from "@/views/Categoria/EditarCategoria.vue"

// import CadastrarLivro from '@/views/CadastrarLivro.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/livro',
    children:[
      {
        path: 'livro',
        name: 'livro',
        component: LivroView,
      },
      {
        path: 'livro/:codigo',
        name: 'ConsultarLivro',
        component: ConsultaLivroView
      },
      {
        path: 'livro/cadastrar',
        name: 'CadastrarLivro',
        component: CadastrarLivro,
      },
      {
        path: 'livro/editar/:codigo',
        name: 'EditarLivro',
        component: EditarLivro
      },
      {
        path: 'categoria',
        name: 'Categoria',
        component: CategoriaView
      }, 
      {
        path: 'categoria/:codigo',
        name: 'ConsultarCategoria',
        component: ConsultaCategoriaView
      },     
      {
        path: 'categoria/cadastrar',
        name: 'CadastrarCategoria',
        component: CadastrarCategoria,
      }, 
      {
        path: 'categoria/editar/:codigo',
        name: 'EditarCategoria',
        component: EditarCategoria
      }, 
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
