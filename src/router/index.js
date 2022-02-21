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
import login from '../views/login.vue'


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
    component:my,
    meta:{
      auth:true,
      title:'我的'
    }
  },
  {
    path:'/login',
    component:login
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
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

// 路由前置守卫
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title

  // 身份验证
  let token = localStorage.getItem("token")
  let auth = to.meta.auth

  if(auth){
    if(token){
      next()
    }else{
      next({
        path:'/login',
        query:{
          redirectUrl:to.fullPath
        }
      })
    }
  }else{
    next()
  }
})

export default router
