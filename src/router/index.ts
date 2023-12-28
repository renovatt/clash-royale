import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const lazyLoad = (view: string) => import(`../views/${view}.vue`)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cards',
    name: 'cards',
    component: lazyLoad('Cards')
  },
  {
    path: '/challenges',
    name: 'challenges',
    component: lazyLoad('Challenges')
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component:  lazyLoad('NotFound')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
