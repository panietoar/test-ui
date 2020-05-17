<template>
  <div class="vote" :style="voteStyle">
    <div
      class="vote__standing vote-button vote-button--up"
      v-if="rating === 'positive'">
      <svg width="24" height="24">
        <use xlink:href="#thumbs_up" />
      </svg>
    </div>
    <div class="vote__standing vote-button vote-button--down" v-else>
      <svg width="24" height="24">
        <use xlink:href="#thumbs_down" />
      </svg>
    </div>
    <div class="vote__content">
      <h1 class="vote__name">{{ vote.name }}</h1>
      <p class="vote__date">
        <span class="vote__date--bold">
          {{ elapsedTime }}
        </span> in {{ vote.category }}</p>
      <p class="vote__description">{{ vote.description }}</p>
      <div class="vote__vote-buttons">
        <div
          class="vote-button vote-button--up"
          :class="{'vote-button--selected': upvoted}"
          @click="upvote()">
          <svg width="45" height="45">
            <use xlink:href="#thumbs_up" />
          </svg>
        </div>
        <div
          class="vote-button vote-button--down"
          :class="{'vote-button--selected': downvoted}"
          @click="downvote()">
          <svg width="24" height="24">
            <use xlink:href="#thumbs_down" />
          </svg>
        </div>
        <button class="vote-cta">Vote now</button>
      </div>
    </div>
    <div class="vote__vote-bar">
      <div
        class="vote-bar vote-bar--up"
        :style="`flexBasis: ${positivePercent}%;`">
        <svg width="45" height="45">
          <use xlink:href="#thumbs_up" />
        </svg>
        <p class="vote-bar__percentage">
          {{ positivePercent }}%
        </p>
      </div>
      <div
        class="vote-bar vote-bar--down"
        :style="`flexBasis: ${negativePercent}%;`">
        <p class="vote-bar__percentage">
          {{ negativePercent }}%
        </p>
        <svg width="45" height="45">
          <use xlink:href="#thumbs_down" />
        </svg>
      </div>
    </div>
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
  data () {
    return {
      upvoted: false,
      downvoted: false
    }
  },
  computed: {
    voteStyle () {
      return {
        background: `linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.60) 30%, rgba(0,0,0,0) 70%), center / cover no-repeat url(${this.vote.image})`
      }
    },
    totalVotes () {
      return this.vote.upvotes + this.vote.downvotes
    },
    rating () {
      return this.vote.upvotes >= this.vote.downvotes ? 'positive' : 'negative'
    },
    positivePercent () {
      return this.getPercentage(this.vote.upvotes)
    },
    negativePercent () {
      return this.getPercentage(this.vote.downvotes)
    },
    elapsedTime () {
      if (this.vote.days >= 30) {
        const months = Math.floor(this.vote.days / 30)
        return months === 1 ? `${months} month ago ` : `${months} months ago `
      } else {
        return `${this.vote.days} days ago `
      }
    }
  },
  methods: {
    getPercentage (fraction) {
      let percent = fraction / this.totalVotes
      percent = (percent * 100).toFixed(0)
      return percent
    },
    upvote () {
      this.upvoted = true
      this.downvoted = false
    },
    downvote () {
      this.upvoted = false
      this.downvoted = true
    }
  }
}
</script>
<style lang="scss">
.vote {
  color: var(--white);
  display: flex;
  flex-direction: column;
  height: 60rem;
  justify-content: flex-end;
  position: relative;

  &__standing {
    position: absolute;
    top: 52%;

    &.vote-button {
      cursor: default;
      padding: 0.5rem;
    }
  }

  &__content {
    margin-left: 4rem;
    width: 80%;
  }

  &__name {
    font-size: 5rem;
    font-weight: 400;
    margin-top: 0;
  }

  &__date {
    font-size: 1.4rem;
    margin-bottom: 1.6rem;

    &--bold {
      font-weight: 400;
    }
  }

  &__description {
    font-size: 1.8rem;
    margin-bottom: 1.6rem;
  }

  &__vote-buttons {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    width: 50%;

    .vote-button {
      height: 2.2rem;
      width: 2.2rem;
    }
  }

  &__vote-bar {
    display: flex;
    font-size: 3.5rem;
    width: 100%;

    .vote-bar {
      align-items: center;
      display: flex;
      opacity: .8;
      padding: 1rem;

      .material-icons {
        font-size: 3.5rem;
      }

      &--up {
        background-color: var(--vote-up);
        justify-content: flex-start;
      }

      &--down {
        background-color: var(--vote-down);
        justify-content: flex-end;
      }

      &__percentage {
        margin: 0 1rem;
      }
    }

  }
}
</style>
