const VoteRepository = require('../repos/voteRepository')
const express = require('express')
const router = express.Router()

const voteRepository = new VoteRepository()

router.get('/', (req, res) => {
  const voteData = voteRepository.getVotes()
  res.json(voteData)
})

router.post('/:voteId/upvote', (req, res) => {
  let error = ''
  const voteId = parseInt(req.params.voteId)

  try {
    
  } catch (errorMessage) {

  }
})

module.exports = router