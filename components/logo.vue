<template>
  <v-img
    :src="src"
    contain
    :max-width="getSize.width"
    :max-height="getSize.height"
  />
</template>

<script>
export default {
  name: "AppLogo",
  props: {
    size: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: 'https://d3rg18dos0rgue.cloudfront.net/wp-content/uploads/sites/9/2022/05/RoxyCinema-logo%403x.png'
    }
  },
  computed: {
    getSize() {
      switch (this.size) {
        case 'small':
          return {
            width: '70',
            height: '50',
          }
        case 'middle':
          return {
            width: '127',
            height: '48',
          }
        case 'big':
          return {
            width: '213',
            height: '200',
          }
        default:
          return {
            width: '100%',
            height: '100%'
          }
      }
    },
  }
}
</script>
