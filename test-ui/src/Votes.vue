<template>
  <div class="votes">
    <Vote v-for="vote in votes" :key="vote.name" :vote="vote" />
  </div>
</template>

<script>
import Vote from './components/Vote'

export default {
  name: 'Votes',
  components: {
    Vote
  },
  computed: {
    votes () {
      return this.$store.state.votes
    }
  },
  mounted () {
    this.$store.dispatch('loadVotes')
  }
}
</script>

<style lang="scss">
.votes {
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr 1fr;
}
</style>
