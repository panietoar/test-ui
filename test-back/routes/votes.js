const VoteRepository = require('../repos/voteRepository')
const express = require('express')
const router = express.Router()

const voteRepository = new VoteRepository()

router.get('/', (req, res) => {
  const voteData = voteRepository.getVotes()
  res.json(voteData)
})

module.exports = router