<template>
  <v-container fluid>
    <v-container class="movies px-0">
      <div class="movies-title mb-6 px-10">
        <h1 :class="getFontSize($breakpoints.width, 700, [48, 48, 48, 38, 38])" class="main-brown-text mb-10">
          ALL MOVIES
        </h1>
        <div :class="getFontSize($breakpoints.width, 400, [32, 32, 32, 24, 24])" class="mb-15">
          {{ movies?.length }} movies you can watch in our cinema.
        </div>
      </div>
      <v-row>
        <v-col
          v-for="item of movies"
          :key="item.id"
          cols="12"
          md="4"
          lg="2"
          class="mb-4"
        >
          <AppCard :item="item"/>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HomePage',
  components: {
    AppCard: () => import('../components/common/AppCard')
  },
  computed: {
    ...mapGetters({
      movies: 'movies/getAllMovies',
    })
  },
}
</script>

<style scoped lang="scss">
.movies-title {
  background: #373737;
  border: 2px solid white;
  box-shadow: inset #000000 0 0 20px 3px;
}
</style>
