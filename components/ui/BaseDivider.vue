<template>
  <div class="header-divider" :style="{background: color}"/>
</template>

<script>
export default {
  name: "BaseDivider",
  props: {
    color: {
      type: String,
      default: '#FFF'
    }
  }
}
</script>

<style scoped>
.header-divider {
  width: 100%;
  height: 1px;
}
</style>
