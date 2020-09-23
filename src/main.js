// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import Basic from './components/Basic'
import {
  store
} from './store'
import Axios from 'axios'
import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Header from './components/fractions/Header'
// import footer from './components/fractions/Footer'
import router from './router'
// console.log($)

Vue.prototype.$http = Axios
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Basic)
  // components: {
  // footer,
  // Header
  //   App
  // }
  // template: '<App/>'
})
