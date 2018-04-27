// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import demo from './demo.vue'
import store from '../../store/index.js'
import '../../../static/ueditor/ueditor.config.js';
import '../../../static/ueditor/ueditor.all.min.js';
import '../../../static/ueditor/lang/zh-cn/zh-cn.js';
import '../../../static/ueditor/ueditor.parse.min.js';
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#demo',
  store,
  render:h=>h(demo)
})
