import Vue from 'vue'
import App from './App'
// 引入vuex
import store from '@/store/index';

Vue.config.productionTip = false
App.mpType = 'app'

// 挂载Vuex
Vue.prototype.$store = store;
const app = new Vue(App)
app.$mount()
