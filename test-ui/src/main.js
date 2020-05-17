import Vue from 'vue'
import App from './Votes.vue'
import store from './store'

import './scss/main.scss'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#votes')
