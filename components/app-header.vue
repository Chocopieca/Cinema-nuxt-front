<template>
  <v-container fluid class="header main-dark-gray">
    <v-container class="position-relative h-100 pa-0">
      <header class="d-flex justify-space-between align-center pa-2">
        <nuxt-link to="/">
          <Logo size="middle"/>
        </nuxt-link>
        <div class="flex-center">
          <NavList type="row" is-upper-case :nav-link="linkList" class="mr-12"/>
        </div>
        <AppSearch />
      </header>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "AppHeader",
  components: {
    Logo: () => import('./logo'),
    NavList: () => import('./nav-list'),
    AppSearch: () => import('./common/AppSearch'),
  },
  data() {
    return {
      linkList: [
        {
          title: 'All movies',
          to: '/'
        },
        {
          title: 'My booking',
          to: '/my_movies'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid white;
  box-shadow: inset #000000 0 0 20px 3px;
}
</style>
