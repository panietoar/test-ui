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
  data () {
    return {
      votes: [
        {
          name: 'Kanye West',
          image: 'https://i.pinimg.com/originals/8c/e8/3f/8ce83fcd3a07b0de0eb5deea70ccb084.jpg'
        },
        {
          name: 'Mark Zuckerberg',
          image: 'https://i.pinimg.com/originals/8c/e8/3f/8ce83fcd3a07b0de0eb5deea70ccb084.jpg'
        },
        {
          name: 'Cristina Fernández de Kirchner',
          image: 'https://i.pinimg.com/originals/8c/e8/3f/8ce83fcd3a07b0de0eb5deea70ccb084.jpg'
        },
        {
          name: 'Malala Yousafzai',
          image: 'https://i.pinimg.com/originals/8c/e8/3f/8ce83fcd3a07b0de0eb5deea70ccb084.jpg'
        }
      ]
    }
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
