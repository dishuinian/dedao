import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入一级路由组件
import index from '../views/index.vue'
import classify from '../views/classify.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/classify',
    component: classify
  }
]


const router = new VueRouter({
  routes,
})


export default router
