const fs = require('fs')
const codes = require('../routes/codes')

class VoteRepository {

  constructor() {
    this.FILE_PATH = './json/votes.json'
  }

  getVotes() {
    try {
      const data = fs.readFileSync(this.FILE_PATH)
      if (data) {
        return JSON.parse(data)
      }
    } catch (err) {
      console.error('Error reading data: ', err)
      return {}
    }
  }

  upvote(voteId) {
    try {
      const votes = fs.readFileSync(this.FILE_PATH);
      let voteData;
      if (votes) {
        voteData = JSON.parse(votes)
      }

      let vote = voteData.votes.find(v => v.id === voteId)
      console.log(vote)

      if(!vote) {
        throw codes.VOTE_NOT_FOUND
      }

      vote.upvotes++

      const votesJson = JSON.stringify(voteData)
      fs.writeFileSync(this.FILE_PATH, votesJson)

      return vote

    } catch (error) {
      console.log(error)
      throw error
    }
  }

  downvote(voteId) {
    try {
      const votes = fs.readFileSync(this.FILE_PATH);
      let voteData;
      if (votes) {
        voteData = JSON.parse(votes)
      }

      let vote = voteData.votes.find(v => v.id === voteId)
      console.log(vote)

      if(!vote) {
        throw codes.VOTE_NOT_FOUND
      }

      vote.downvotes++

      const votesJson = JSON.stringify(voteData)
      fs.writeFileSync(this.FILE_PATH, votesJson)

      return vote

    } catch (error) {
      console.log(error)
      throw error
    }
  }

}

module.exports = VoteRepository