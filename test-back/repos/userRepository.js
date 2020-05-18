const fs = require('fs')
const codes = require('../routes/codes')

class UserRepository {

  constructor() {
    this.FILE_PATH = './json/users.json'
  }

  loginUser(username, hash) {
    const data = fs.readFileSync(this.FILE_PATH)
    let users = null
    if (data) {
      users = JSON.parse(data)
    }
    let user = null
    if (users) {
      user = users.users.find(u => u.name === username)
    }
    if (!user) {
      throw codes.USER_NOT_FOUND
    }

    if (user.hash !== hash) {
      throw codes.INCORRECT_PASSWORD
    }

    return user
  }

  createUser(userData) {
    let users = JSON.parse(fs.readFileSync(this.FILE_PATH))
    const user = users.users.find(u => u.name === userData.name)

    if (user) {
      throw codes.USER_ALREADY_EXISTS
    }

    const index = users.users.slice(-1)[0].id
    userData.id = index + 1

    users.users.push(userData)
    const usersJson = JSON.stringify(users)
    fs.writeFileSync(this.FILE_PATH, usersJson)
  }

  updateUser(userData) {
    let users = JSON.parse(fs.readFileSync(this.FILE_PATH))
    const user = users.users.find(u => u.id === userData.id)

    if (user) {
      user.age = userData.age
      user.civilStatus = userData.civilStatus
      user.hash = userData.hash
    } else {
      throw codes.USER_NOT_FOUND
    }

    const usersJson = JSON.stringify(users)
    fs.writeFileSync(this.FILE_PATH, usersJson)
  }

  deleteUser(userId) {
    let users = JSON.parse(fs.readFileSync(this.FILE_PATH))
    const index = users.users.findIndex(u => u.id === userId)
    if(index === -1) {
      throw codes.USER_NOT_FOUND
    }
    users.users = users.users.splice(index, 1)

    const usersJson = JSON.stringify(users)
    fs.writeFileSync(this.FILE_PATH, usersJson)
  }

  getUserVotes(userId) {
    let users = JSON.parse(fs.readFileSync(this.FILE_PATH))
    const user = users.users.find(u => u.id === userId)
    if(!user) {
      throw codes.USER_NOT_FOUND
    }

    return {
      name: user.name,
      votes: user.votes
    }
  }

}

module.exports = UserRepository