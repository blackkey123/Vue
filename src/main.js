import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'components/common/toast'
import LazyLoad from 'vue-lazyload'
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
import Axios from "axios"
import Global from "./network/Global.vue"
Vue.prototype.$GLOBAL = Global//挂载到Vue实例上面
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(MintUI)
Vue.use(LazyLoad)
Vue.use(Toast)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
