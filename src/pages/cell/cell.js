// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import cell from './cell.vue'
import router from './router'
import store from '../../store/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#cell',
  router,
  store,
  render:h => h(cell)
})
