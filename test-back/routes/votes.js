const VoteRepository = require('../repos/voteRepository')
const codes = require('../routes/codes')
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
  let vote = null
  try {
    vote = voteRepository.upvote(voteId)
  } catch (errorMessage) {
    if (errorMessage === codes.VOTE_NOT_FOUND) {
      res.status(404)
    } else {
      res.status(500)
    }

    error = errorMessage
  }

  res.json({
    error,
    vote
  })
})

router.post('/:voteId/downvote', (req, res) => {
  let error = ''
  const voteId = parseInt(req.params.voteId)
  let vote = null
  try {
    vote = voteRepository.downvote(voteId)
  } catch (errorMessage) {
    if (errorMessage === codes.VOTE_NOT_FOUND) {
      res.status(404)
    } else {
      res.status(500)
    }

    error = errorMessage
  }

  res.json({
    error,
    vote
  })
})

module.exports = router