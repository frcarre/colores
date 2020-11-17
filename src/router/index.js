import Vue from 'vue'
import VueRouter from 'vue-router'
import Colors from '../views/Colors.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Colors',
    component: Colors
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
