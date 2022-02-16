import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$axios = axios;

//引入reset.css
import '@/assets/css/reset.css'
import "@/assets/js/flexible.js"

//引入图标字体
// import '@/assets/css/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
