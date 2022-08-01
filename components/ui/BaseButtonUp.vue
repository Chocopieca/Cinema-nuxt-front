<template>
  <v-fab-transition transition="scale-transition">
    <v-btn
      key="mdi-chevron-up"
      color="#c18a2c"
      fab
      dark
      bottom
      right
      class="button-up"
      @click="$vuetify.goTo(0, {
        duration: 500,
        easing: 'easeInOutCubic',
      })"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: "BaseButtonUp",
}
</script>

<style scoped lang="scss">
.button-up {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 25px 25px 0;
}
</style>
