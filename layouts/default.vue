<template>
  <v-app class="wrapper">
    <AppHeader />
    <Nuxt />
    <AppGenreBlock />
    <AppFooter />
    <client-only>
      <IndexModal />
    </client-only>
    <BaseButtonUp />
  </v-app>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader: () => import('../components/app-header'),
    AppFooter: () => import('../components/app-footer'),
    AppGenreBlock: () => import('../components/common/AppGenreBlock'),
    IndexModal: () => import('../components/modal/index-modal'),
    BaseButtonUp: () => import('../components/ui/BaseButtonUp'),
  },
  async created() {
    try {
      await this.getAllMovies();
    } catch (e) {
      console.log('Error ', e)
    }
  },
  methods: {
    ...mapActions({
      getAllMovies: 'movies/getAllMovies',
    }),
  },
}
</script>
<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: transparent;
}
</style>
