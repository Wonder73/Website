import Vue from 'vue';
import login from './login.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "../../../static/css/reset.css"
import "font-awesome/css/font-awesome.css"

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  el:'#login',
  render:h=>h(login)
})
