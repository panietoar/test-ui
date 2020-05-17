<template>
  <div class="vote" :style="voteStyle">
    <h1 class="vote__name">{{vote.name}}</h1>
 </div>
</template>

<script>
export default {
  name: 'Vote',
  props: {
    vote: {
      type: Object,
      required: true
    }
  },
  computed: {
    voteStyle () {
      return {
        background: `linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.60) 30%, rgba(0,0,0,0) 70%), url(${this.vote.image})`
      }
    }
  }
}
</script>
<style lang="scss">
.vote {
  height: 55rem;
}
</style>
