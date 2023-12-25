import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const lazyLoad = (view: string) => import(`../views/${view}.vue`)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/challenges',
      name: 'challenges',
      component: lazyLoad('Challenges')
    },
  ]
})

export default router
