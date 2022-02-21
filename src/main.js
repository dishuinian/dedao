import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//import VueAwesomeSwiper from 'vue-awesome-swiper'

import './vantui'

Vue.prototype.$axios = axios;
Vue.use(VueAwesomeSwiper);
Vue.prototype.$axios = axios;
//导入js和css
import '@/assets/css/reset.css'
import '@/assets/js/flexible.js'

//隐藏开发模式的提示
Vue.config.productionTip = false

// h是一个渲染dom的回调,将App组件渲染到id=app的dom结构中
// $mount('#app'):   #app即为public文件夹中index.html中的<div id="app"></div>
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
