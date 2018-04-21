// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './index.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "../../../static/css/reset.css"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "swiper/dist/css/swiper.css";
// import store from '../../store'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  components: { App },
  template: '<App/>'
})
