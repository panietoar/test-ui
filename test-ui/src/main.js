import Vue from 'vue'
import App from './Votes.vue'
import Login from './Login.vue'
import store from './store'
import './dom'

import './scss/main.scss'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#votes')

new Vue({
  store,
  render: h => h(Login)
}).$mount('#login')
