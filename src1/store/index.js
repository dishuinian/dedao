import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import theme from './modules/theme'

Vue.use(Vuex)

/**
 * 需求分析：
 * 1. 主模块  city
 * 1. 主题模块  color
 * 2. 用户管理模块   adminName   score
 */

export default new Vuex.Store({
  state: {
    city:'郑州'
  },
  mutations: {
    CHANGE_CITY:(state,newcity)=>{
      state.city=newcity
    },
    fun1(){
      console.log("main-fun1");
    }
  },
  actions: {
    mainAction(){
      console.log('mainAction');
    }
  },
  getters: {
    mainGetter(){
      console.log('mainGatters');
    }
  },
  modules: {
   user,
   theme
  }
})
