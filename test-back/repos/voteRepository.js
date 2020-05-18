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
      if (data) {
        voteData = JSON.parse(data)
      }

      let vote = voteData.votes.find(v => v.id === voteId)

      if(!vote) {
        throw codes.VOTE_NOT_FOUND
      }

      vote.upvotes++

      const votesJson = JSON.stringify(voteData)
      fs.writeFileSync(this.FILE_PATH, votesJson)

      return vote

    } catch (error) {
      throw error
    }
  }

}

module.exports = VoteRepository