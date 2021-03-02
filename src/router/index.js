import Vue from 'vue'
import VueRouter from 'vue-router'
import Ticker from '../views/Ticker.vue'
import err from '../views/404.vue'
import Crypto from '../views/Crypto.vue'
import Url from '../views/Url.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Crypto
  },
  {
    path: "/crypto/assets/:id",
    name: 'Ticker',
    component: Ticker
  },
  {
    path: '/url',
    name: 'Url Shortener',
    component: Url
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
  }
]

const router = new VueRouter({
  routes
})

export default router
