import Vue from 'vue'
import manage from './manage.vue'
import router from './router'
import store from '../../store/index.js';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../../../static/ueditor/ueditor.config.js';
import '../../../static/ueditor/ueditor.all.min.js';
import '../../../static/ueditor/lang/zh-cn/zh-cn.js';
import '../../../static/ueditor/ueditor.parse.min.js';
import "../../../static/css/reset.css"

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  el:"#manage",
  router,
  store,
  render:h=>h(manage)
})
