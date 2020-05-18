<template>
  <li class="navigation__link login">
    <a href="#" @click="showModal()" v-if="!loggedIn">Sign In/Sing Up</a>
    <a href="#" @click="logout()" v-else>Log Out</a>
    <Modal>
      <div class="login__signin form" v-if="viewSignin">
        <div class="form-field">
          <label class="form-field__label" for="username">Username: </label>
          <input
            class="form-field__input"
            type="text"
            name="username"
            id="username"
            ref="signInUsername"
            required
            v-model="username">
        </div>
        <div class="form-field">
          <label class="form-field__label" for="password">Password: </label>
          <input
            class="form-field__input"
            type="password"
            name="password"
            id="password"
            ref="signInPassword"
            required
            v-model="password">
        </div>
        <div class="form__ctas">
          <button class="form__button" type="submit" @click="login()">
            Log In
          </button>
          <button class="form__button" type="submit" @click="signUp()">
            Sign Up
          </button>
        </div>
      </div>
      <div class="login__signup form" v-else>
        <div class="form-field">
          <label class="form-field__label" for="username">Username: </label>
          <input
            class="form-field__input"
            type="text"
            name="username"
            id="username"
            ref="signUpUsername"
            required
            v-model="username">
        </div>
        <div class="form-field">
          <label class="form-field__label" for="password">Password: </label>
          <input
            class="form-field__input"
            type="password"
            name="password"
            id="password"
            ref="signUpPassword"
            required
            v-model="password">
        </div>
        <div class="form-field">
          <label class="form-field__label" for="age">Age: </label>
          <input
            class="form-field__input"
            type="number"
            name="age"
            id="age"
            ref="age"
            min="18"
            max="120"
            step="1"
            v-model="age">
        </div>
        <div class="form-field">
          <label class="form-field__label" for="civilStatus">Civil Status: </label>
          <select
            class="form-field__input"
            type="civilStatus"
            name="civilStatus"
            id="civilStatus"
            v-model="civilStatus">
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="separated">Separated</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        <div class="form__ctas">
          <button class="form__button" type="submit" @click="signIn()">
            Sign In
          </button>
          <button class="form__button" type="submit" @click="register()">
            Register
          </button>
        </div>
      </div>
    </Modal>
  </li>
</template>
<script>
import Modal from './components/Modal'

export default {
  name: 'Login',
  components: {
    Modal
  },
  data () {
    return {
      viewSignin: true,
      username: '',
      password: '',
      age: 0,
      civilStatus: 'single'
    }
  },
  computed: {
    loggedIn () {
      return this.$store.getters.loggedIn
    }
  },
  methods: {
    showModal () {
      this.$store.commit('SHOW_MODAL')
      document.querySelector('.page').classList.add('noscroll')
    },
    closeModal () {
      this.$store.commit('HIDE_MODAL')
      document.querySelector('.page').classList.remove('noscroll')
    },
    signIn () {
      this.viewSignin = true
    },
    signUp () {
      this.viewSignin = false
    },
    login () {
      const valid = !(this.$refs.signInUsername.validity.valueMissing || this.$refs.signInPassword.validity.valueMissing)
      if (!valid) {
        return
      }
      const userData = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('login', userData)
      this.clearForm()
      this.closeModal()
    },
    register () {
      const valid = !(
        this.$refs.signUpUsername.validity.valueMissing ||
        this.$refs.signUpPassword.validity.valueMissing ||
        this.$refs.age.validity.rangeUnderflow
      )
      if (!valid) {
        return
      }
      const userData = {
        username: this.username,
        password: this.password,
        age: this.age,
        civilStatus: this.civilStatus
      }
      this.$store.dispatch('register', userData)
      this.clearForm()
      this.closeModal()
    },
    logout () {
      this.$store.dispatch('logout')
    },
    clearForm () {
      this.username = ''
      this.password = ''
      this.age = 0
      this.civilStatus = 'single'
    }
  }
}
</script>
