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
  }
}
