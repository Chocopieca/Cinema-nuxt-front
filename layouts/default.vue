<template>
  <v-app class="wrapper">
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
    AppHeader: () => import('../components/app-header'),
    AppFooter: () => import('../components/app-footer'),
  },
  async serverPrefetch({ $store }) {
    try {
      await $store.dispatch('movies/getAllMovies');
    } catch (e) {
      console.log('Error ', e)
    }
  }
}
</script>
<style module>
.test {
  background: black;
}
</style>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: transparent;
}
</style>
