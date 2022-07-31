<template>
  <div class="overlay" @click="close">
    <div class="modal-form" @click.stop="">
      <v-img
        :src="require('../../assets/icons/cross-inline-icon.svg')"
        contain
        width="27"
        height="27"
        class="modal-form-close"
        @click="close"
      />
      <div class="main-white-text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  data() {
    return {
      dialog: false,
      bgStyle: {
        'background-image': `url(${this.bgImg})`,
        'background-size': 'cover'
      }
    }
  },
  methods: {
    close() {
      this.$store.dispatch('modal/hideModal');
    }
  }
}
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  background: #00000040;
  padding-top: 25px;
  overflow: scroll;
}

.modal-form {
  position: relative;
  background: #4d4d4d;
  border: 1px solid white;
  box-shadow: inset #000000 0 0 20px 3px;
  border-radius: 0 !important;
  min-height: 500px;
  max-width: 1028px;
  padding: 20px;
  margin: 0 auto;

  &-close {
    position: absolute;
    right: 25px;
    top: 25px;
    z-index: 1;
    cursor: pointer;
  }
}
</style>
