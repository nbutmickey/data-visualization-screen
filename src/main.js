// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Viser from 'viser-vue'
import store from './store'
import scroll from 'vue-seamless-scroll'

import jQuery from 'jquery'
import lodash from 'lodash';
window.jQuery = jQuery
window.$ = jQuery
window._=lodash
Vue.use(scroll)

Vue.use(Viser)
Vue.config.productionTip = false
import './assets/iconfont/iconfont.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
