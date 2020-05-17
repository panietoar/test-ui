const VoteRepository = require('../repos/voteRepository')
const express = require('express')
const router = express.Router()

const voteRepository = new VoteRepository()

router.get('/', function (req, res) {
  const voteData = voteRepository.getVotes()
  res.json(voteData)
})

router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router