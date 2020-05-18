import MD5 from 'crypto-js/md5'

const API_URL = 'http://localhost:3000'

export default {
  async loadVotes ({ commit }) {
    const votesData = await (await fetch(`${API_URL}/votes`)).json()

    commit('SET_VOTES', votesData.votes)
  },

  upvote ({ commit }, voteId) {
    commit('UPVOTE', voteId)
  },

  downvote ({ commit }, voteId) {
    commit('DOWNVOTE', voteId)
  },

  login ({ commit }, userData) {
    const userHash = MD5(`${userData.username}:${userData.password}`).toString()
    const postData = {
      username: userData.username,
      hash: userHash
    }
    fetch(`${API_URL}/users/login`, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(error => {
      console.error(error)
    }).then(response => response.json()).then(response => {
      if (response.authenticated) {
        commit('LOGIN', response.user)
      }
    })
  },

  register ({ commit }, userData) {
    const userHash = MD5(`${userData.username}:${userData.password}`).toString()
    const postData = {
      name: userData.username,
      hash: userHash,
      age: userData.age,
      civilStatus: userData.civilStatus
    }
    fetch(`${API_URL}/users/`, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(error => {
      alert(error.error)
    }).then(response => response.json()).then(response => {
      if (response.created) {
        commit('REGISTER', userData)
      }
    })
  },

  logout ({ commit }) {
    commit('LOGOUT')
  }
}
