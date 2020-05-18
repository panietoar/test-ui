export default {

  SET_VOTES (state, votes) {
    state.votes = votes
  },

  UPDATE_VOTE (state, updatedVote) {
    const vote = state.votes.find(vote => vote.id === updatedVote.id)
    vote.upvotes = updatedVote.upvotes
    vote.downvotes = updatedVote.downvotes
  },

  UPDATE_USER_VOTE (state, userVote) {
    const vote = state.user.votes.find(v => v.voteId === userVote.voteId)

    if (vote) {
      vote.votes = userVote.votes
    } else {
      state.user.votes.push(userVote)
    }
  },

  LOGIN (state, user) {
    state.user.name = user.name
    state.user.votes = user.votes
    state.user.id = user.id
    state.user.loggedIn = true
  },

  REGISTER (state, user) {
    state.user.name = user.name
    state.user.id = user.id
    state.user.loggedIn = true
  },

  LOGOUT (state) {
    state.user.name = 'Anonymous'
    state.user.loggedIn = false
    state.votes = []
  },

  SHOW_MODAL (state) {
    state.modalVisible = true
  },

  HIDE_MODAL (state) {
    state.modalVisible = false
  }

}
