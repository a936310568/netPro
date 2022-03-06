import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/page/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "about" */ '../views/page/Products.vue')
  },
  {
    path: '/Global',
    name: 'Global',
    component: () => import('../views/page/Global.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/page/Contact.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
