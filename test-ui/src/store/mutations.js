export default {

  SET_VOTES (state, votes) {
    state.votes = votes
  },

  UPVOTE (state, voteId) {
    const vote = state.votes.find(vote => vote.id === voteId)
    vote.upvotes++
  },

  DOWNVOTE (state, voteId) {
    const vote = state.votes.find(vote => vote.id === voteId)
    vote.downvotes++
  },

  LOGIN (state, user) {
    state.user.name = user.name
    state.user.votes = user.votes
    state.user.loggedIn = true
  },

  REGISTER (state, user) {
    state.user.name = user.name
    state.user.loggedIn = true
  },

  LOGOUT (state) {
    state.user.name = 'Anonymous'
    state.user.loggedIn = false
  },

  SHOW_MODAL (state) {
    state.modalVisible = true
  },

  HIDE_MODAL (state) {
    state.modalVisible = false
  }

}
