import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from "components/common/toast/index";
import FastClick from "fastclick"
import LazeLoad from "vue-lazyload"
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
Vue.use(toast)
Vue.use(LazeLoad,{
  loading:require('./assets/img/common/lazeload.png')
})
FastClick.attach(document.body)
new Vue({
  render: h => h(App),
  router,store
}).$mount('#app')
