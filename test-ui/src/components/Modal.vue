<template>
  <div class="modal" :class="{'modal--visible': visible}">
    <div class="modal__content">
      <slot />
    </div>
    <div class="modal__overlay" @click="closeModal()"></div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  computed: {
    visible () {
      return this.$store.state.modalVisible
    }
  },
  methods: {
    closeModal () {
      this.$store.commit('HIDE_MODAL')
      document.querySelector('.page').classList.remove('noscroll')
    }
  }
}
</script>
<style lang="scss">
.modal {
  &__content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--white);
    height: auto;
    padding: 5rem;
    visibility: hidden;
    z-index: 5;
  }

  &__overlay {
    background-color: rgba(0, 0, 0, 0.8);
    content: "";
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    visibility: hidden;
    z-index: 4;
  }

  &--visible {

    .modal__content,
    .modal__overlay {
      visibility: visible;
    }
  }
}
</style>
