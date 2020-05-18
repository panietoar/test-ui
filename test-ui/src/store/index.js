import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    votes: {},
    user: {
      name: 'Anonymous',
      loggedIn: false,
      votes: []
    },
    modalVisible: false
  },
  getters,
  mutations,
  actions
})
