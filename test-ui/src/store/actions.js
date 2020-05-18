const API_URL = 'http://localhost:3000'

export default {
  async loadVotes ({ commit }) {
    const votesData = await (await fetch(`${API_URL}/votes`)).json()

    commit('SET_VOTES', votesData.votes)
  },

  upvote ({ commit }, voteId) {
    commit('UPVOTE', voteId)
  },

  downvote ({ commit }, voteId) {
    commit('DOWNVOTE', voteId)
  },

  login ({ commit }, userData) {
    commit('LOGIN', userData.username)
  },

  register ({ commit }, userData) {
    commit('REGISTER', userData)
  },

  logout ({ commit }) {
    commit('LOGOUT')
  }
}
