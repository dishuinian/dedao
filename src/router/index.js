import Vue from 'vue'
import VueRouter from 'vue-router'

//引入一级路由组件
import index from '../views/index.vue'
import classify from '../views/classify.vue'
import cart from '../views/cart.vue'
import my from '../views/my.vue'
import wonderfulGoods from '../views/wonderfulGoods.vue'
import paperBook from '../views/paperBook.vue'
import reader from '../views/reader.vue'
import hotRecommend from '../views/hotRecommend.vue'
import allGoods from '../views/allGoods.vue'


//引入首页中的二级路由组件

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/index'
  },
  {
    path:'/index',
    component:index
  },
  {
    path:'/classify',
    component:classify
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/my',
    component:my
  },
  {
    path:'/wonderfulGoods',
    component:wonderfulGoods
  },
  {
    path:'/paperBook',
    component:paperBook
  },
  {
    path:'/reader',
    component:reader
  },
  {
    path:'/hotRecommend',
    component:hotRecommend
  },
  {
    path:'/allGoods',
    component:allGoods
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
