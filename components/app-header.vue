<template>
  <v-container fluid class="main-dark-gray pa-0 pt-2">
    <v-container class="position-relative h-100 pa-0">
      <header class="d-flex justify-space-between align-center pa-2">
        <Logo size="middle"/>
        <div class="flex-center">
          <NavList type="row" is-upper-case :nav-link="linkList" class="mr-12"/>
        </div>
      </header>
    </v-container>
    <BaseDivider />
  </v-container>
</template>

<script>
export default {
  name: "AppHeader",
  components: {
    Logo: () => import('./logo'),
    NavList: () => import('./nav-list'),
    BaseDivider: () => import('./ui/BaseDivider'),
  },
  data() {
    return {
      linkList: [
        {
          title: 'Home page',
          to: '/'
        },
        {
          title: 'My movies',
          to: '/my_movies'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
