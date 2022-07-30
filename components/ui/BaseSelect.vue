<template>
  <div class="base-select">
    <div
      :class="getFontSize($breakpoints.width, 700, [22, 22, 22, 22, 22])"
      class="base-select-title mb-2"
    >
      {{ title}}
    </div>
    <v-select
      v-model="selectedVal"
      class="base-select-input"
      :class="getClasses"
      :items="items"
      :disabled="disabled"
      solo
      hide-details
    />
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    selectedVal: {
      get() {
        return this.value;
      },

      set(val) {
        this.$emit('input', val)
      }
    },
    getClasses() {
      let classString = '';
      classString += this.disabled ? 'base-select-input-disabled' : 'base-select-input-border';
      classString += ' ' + this.getFontSize(this.$breakpoints.width, 700, [22, 22, 22, 22, 22]);
      return classString;
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .base-select {
  &-title {

  }

  &-input {
    &-border {
      box-shadow: inset #000000 0 0 20px 3px;
      border: 1px solid #ffa300;
    }

    &-disabled .v-input__slot {
      background: #373737 !important;
    }
  }
}
</style>
