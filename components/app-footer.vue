<template>
  <footer class="main-dark-gray">
    <BaseDivider />
    <v-container>
      <v-row no-gutters justify="space-between">
        <v-col lg="auto" class="pa-0 mb-5 mb-lg-0 flex-center">
          <Logo size="middle"/>
        </v-col>
        <v-col class="">
          <NavList class="justify-space-around my-5 my-lg-10" type="none" is-upper-case :nav-link="linkList"/>
        </v-col>
        <v-col cols="12" lg="auto" class="flex-center size14-weight400">
          © 2022, All Rights Reserved
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
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
