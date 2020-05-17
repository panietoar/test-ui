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
  }

}
