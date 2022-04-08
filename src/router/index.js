import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/page/Home.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Down',
    name: 'Down',
    component: () => import(/* webpackChunkName: "about" */ '../views/page/Down.vue')
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
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/page/About.vue')
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: () => import('../views/page/ProductDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
