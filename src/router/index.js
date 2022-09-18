import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sportskedvorane from "../views/Sportskedvorane.vue"
import Zatrazidvoranu from "../views/Zatrazidvoranu.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Raspored',
    name: 'Raspored',
    component: () => import(/* webpackChunkName: "about" */ '../views/Raspored.vue')
  },
  {
    path:'/Sportskedvorane',
    name: Sportskedvorane,
    component: Sportskedvorane
  },
  {
    path: '/Zatrazidvoranu',
    name: Zatrazidvoranu,
    component: Zatrazidvoranu
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
