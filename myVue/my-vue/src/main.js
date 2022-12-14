import './mock'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { showMessage } from '@/utils'
import './eventBus'
import './api/banner'

Vue.prototype.$showMessage = showMessage

// 注册全局指令
import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')


