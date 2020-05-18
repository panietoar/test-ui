export default {
  loggedIn (state) {
    return state.user.loggedIn
  },

  userVotesById: (state) => (voteId) => {
    const vote = state.user.votes.find(vote => vote.voteId === voteId)
    return vote ? vote.votes : 0
  }
}
