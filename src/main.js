// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入fastClick文件
import fastClick from 'fastclick'
// 引入初始化样式文件
import './assets/styles/reset.css'
// 解决移动端border一像素的问题
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
