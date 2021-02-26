import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ticker from '../views/Ticker.vue'
import err from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/assets/:id",
    name: 'Ticker',
    component: Ticker
  },
  {
    path: '*',
    name: '404',
    component: err
  },
  {
    path: '/err',
    name: '404',
    component: err
  },
]

const router = new VueRouter({
  routes
})

export default router
