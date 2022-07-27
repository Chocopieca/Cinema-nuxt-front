<template>
  <v-container fluid>
    <v-container class="movie-card">
      <v-row>
        <v-col cols="12" md="6">
          <v-img
            :lazy-src="$img(currentMovie.image, {
              quality: 20,
              format: 'webp'
            })"
            :src="$img(currentMovie.image, {
              quality: 100,
              format: 'webp'
            })"
            contain
            max-height="550"
            class="cursor-pointer"
          />
        </v-col>
        <v-col cols="12" md="6">
          <h1>{{ currentMovie.name }}</h1>
          <div>{{ currentMovie.genre }}</div>
          <div>{{ currentMovie.description }}</div>
          <div v-html="currentMovie.additional"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "MoviePage",
  data() {
    return {
      movieId: this.$route.params.id,
    }
  },
  computed: {
    ...mapGetters({
      movies: 'movies/getAllMovies',
    }),
    currentMovie() {
      return this.movies.find(item => item.id === +this.movieId);
    }
  },
}
</script>

<style scoped lang="scss">
::v-deep.movie-card {
  background: #373737;
  border: 2px solid white;
}
</style>
