// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入fastClick文件
import fastClick from 'fastclick'
// 引入初始化样式文件
// import './assets/styles/reset.css'
import 'styles/reset.css'
// 解决移动端border一像素的问题
import 'styles/border.css'
// 引入字体图标
import 'styles/iconfont.css'
// 引入 vue-awesome-swiper 插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
