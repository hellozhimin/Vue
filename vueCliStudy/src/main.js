// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Apple from './components/apple'
import Banana from './components/banana'

Vue.config.productionTip = false

Vue.use(VRouter)

let router = new VRouter({
    mode: 'history',
    routes: [
      {
        path:'/apple',
        component:Apple
      },
      {
        path:'/banana',
        component:Banana
      }
    ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
