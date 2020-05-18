import MD5 from 'crypto-js/md5'

const API_URL = 'http://localhost:3000'

export default {
  async loadVotes ({ commit }) {
    const votesData = await (await fetch(`${API_URL}/votes`)).json()

    commit('SET_VOTES', votesData.votes)
  },

  upvote ({ dispatch }, voteId) {
    const url = `${API_URL}/votes/${voteId}/upvote`
    dispatch('sendVote', url)
  },

  downvote ({ dispatch }, voteId) {
    const url = `${API_URL}/votes/${voteId}/downvote`
    dispatch('sendVote', url)
  },

  sendVote ({ commit }, url) {
    fetch(url, {
      method: 'POST'
    }).catch(error => console.error(error))
      .then(response => response.json())
      .then(response => {
        const vote = response.vote
        commit('UPDATE_VOTE', vote)
      })
  },

  castUserVote ({ commit, state }, voteId) {
    const userId = state.user.id
    fetch(`${API_URL}/users/${userId}/vote/${voteId}`, {
      method: 'POST'
    }).catch(error => console.error(error))
      .then(response => response.json())
      .then(response => {
        const userVote = response.userVote
        commit('UPDATE_USER_VOTE', userVote)
      })
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
        commit('REGISTER', response.newUser)
      }
    })
  },

  logout ({ commit }) {
    commit('LOGOUT')
  }
}
