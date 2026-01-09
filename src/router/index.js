import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HolaMundo from '../views/HolaMundo.vue'
import PokemonView from '../views/PokemonView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView //siempre se esta cargando este componente
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hola',
    name: 'hola',
    component: HolaMundo
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: PokemonView//()=> import ('@/views/PokemonView.vue')
  },
   {
     path: '/pregunta',
     name: 'pregunta',
     component: ()=> import ('@/views/PreguntaView.vue')
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
