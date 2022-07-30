<template>
  <button
    :class="getClasses"
    class="button main-white-text flex-center text-uppercase"
    :type="type"
    @click="buttonClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    buttonColor: {
      type: String,
      default: 'default',
    },
    buttonSize: {
      type: String,
      default: 'default',
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    getButtonColor() {
      switch (this.buttonColor) {
        case 'transparent':
          return 'button-transparent';
        case 'border':
          return 'button-border';
        case 'chips':
          return 'button-chips';
        default:
          return 'button-default';
      }
    },
    getButtonSize() {
      switch (this.buttonSize) {
        case 'small':
          return 'button-small size14-weight700';
        case 'large':
          return 'button-large size14-weight700';
        case 'chip':
          return 'button-chip size14-weight700';
        default:
          return 'button-big size16-weight700';
      }
    },
    getClasses() {
      let classString = '';
      classString += !this.disabled ? this.getButtonColor : 'button-disabled';
      classString += ' ' + this.getButtonSize;
      return classString;
    }
  },
  methods: {
    buttonClick() {
      if(!this.disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  cursor: pointer;
  border-radius: 5px;
  white-space: nowrap;

  &-large {
    width: 100%;
    height: 50px;
  }

  &-big {
    width: 436px;
    height: 50px;
  }

  &-small {
    width: 172px;
    height: 40px;
  }

  &-chip {
    height: 40px;
  }

  &-default {
    background: linear-gradient(90deg, #895EF2 7%, #19FB9B 89%);
    box-shadow: 0px 7px 20px rgba(129, 100, 234, 0.3), 0px 6px 20px rgba(117, 247, 164, 0.3), inset 0px -3px 0px #74F6A3;

    &:hover {
      box-shadow: 0px 7px 30px rgba(129, 100, 234, 0.5), 0px 6px 30px rgba(117, 247, 164, 0.5), inset 0px -3px 0px #74F6A3;
    }
  }

  &-transparent {
    background: transparent;

    div {
      color: #FFFFFF;
    }
  }

  &-border {
    background: linear-gradient(135deg, #c18a2c30 7%, #c18a2c90 89%);
    box-shadow:  #000000 0 0 20px 3px;
    border: 1px solid #ffa300;
  }

  &-chips {
    display: inline-block;
    border: 1px solid #c18a2c;
    border-radius: 20px;
    padding: 5px 10px;
    background: black;
    cursor: pointer;
    margin-bottom: 20px;
  }

  &-disabled {
    background: #373737;
    color: #9B9B9B;
    cursor: default;
  }
}
</style>
