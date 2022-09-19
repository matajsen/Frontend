import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sportskedvorane from "../views/Sportskedvorane.vue"
import Zatrazidvoranu from "../views/Zatrazidvoranu.vue"
import Login from "../views/Login.vue"

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
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
    name: 'Zatrazidvoranu',
    component: Zatrazidvoranu
  },
  {
    path: '/HomeView',
    name: 'HomeView',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
