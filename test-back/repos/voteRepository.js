const fs = require('fs')

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

}

module.exports = VoteRepository