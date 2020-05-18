const UserRepository = require('../repos/userRepository')
const codes = require('./codes')
const express = require('express')
const router = express.Router()

const userRepository = new UserRepository()

router.post('/login', (req, res) => {
  const {username, hash} = req.body
  let authenticated = false
  let error = ''
  let userData = {}
  try {
    const user = userRepository.loginUser(username, hash)
    if (user) {
      authenticated = true
      userData = {
        name: user.name,
        id: user.id,
        votes: user.votes
      }
    }
  } catch (errorMessage) {
    if (errorMessage === codes.INCORRECT_PASSWORD) {
      res.status(401)
    }
    else if (errorMessage === codes.USER_NOT_FOUND) {
      res.status(404)
    } else {
      res.status(500)
    }
    error = errorMessage
  }

  res.json({
    error,
    authenticated,
    user: userData
  })
})

router.get('/:userId', (req, res) => {
  let error = ''
  const userId = parseInt(req.params.userId)
  let userData = null
  try {
    userData = userRepository.getUserVotes(userId)
  } catch (errorMessage) {
    if (errorMessage === codes.USER_NOT_FOUND) {
      res.status(404)
    } else {
      res.status(500)
    }
    error = errorMessage
  }

  if (error) {
    res.json({
      error
    })
  } else {
    res.json(userData)
  }
})

router.post('/', (req, res) => {
  let created = false
  let error = ''
  let newUser;
  try {
    newUser = userRepository.createUser(req.body)
    created = true
  } catch (errorMessage) {
    if (errorMessage === codes.USER_ALREADY_EXISTS) {
      res.status(400)
    } else {
      res.status(500)
    }
    error = errorMessage
  }

  res.json({
    error,
    created,
    newUser
  })
})

router.patch('/', (req, res) => {
  let updated = false
  let error = ''
  try {
    userRepository.updateUser(req.body)
    updated = true
  } catch (errorMessage) {
    if (errorMessage === codes.USER_NOT_FOUND) {
      res.status(404)
    } else {
      res.status(500)
    }
    error = errorMessage
  }

  res.json({
    error,
    updated
  })
})

router.delete('/:userId', (req, res) => {
  let deleted = false
  let error = ''
  try {
    const userId = parseInt(req.params.userId)
    userRepository.deleteUser(userId)
    deleted = true
  } catch (errorMessage) {
    if (errorMessage === codes.USER_NOT_FOUND) {
      res.status(404)
    } else {
      res.status(500)
    }
    error = errorMessage
  }

  res.json({
    error,
    deleted
  })
})

router.post('/:userId/vote/:voteId/', (req, res) => {
  let userVote;
  let error = ''
  try {
    const userId = parseInt(req.params.userId)
    const voteId = parseInt(req.params.voteId)
    userVote = userRepository.castVote(userId, voteId)
  } catch (errorMessage) {
    if (errorMessage === codes.USER_NOT_FOUND) {
      res.status(404)
    } else {
      res.status(500)
    }
    console.log(errorMessage)
    error = errorMessage
  }
  
  res.json({
    error,
    userVote
  })
})

module.exports = router