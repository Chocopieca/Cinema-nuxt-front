<template>
  <v-container fluid>
    <v-container class="movies px-0">
      <div class="movies-title mb-6 px-10">
        <h1 :class="getFontSize($breakpoints.width, 700, [48, 48, 48, 38, 38])" class="mb-10 text-uppercase main-brown-text">
          SEARCH FOR {{ genreName }} MOVIES
        </h1>
        <div :class="getFontSize($breakpoints.width, 400, [32, 32, 32, 24, 24])" class="mb-15">
          We've picked {{ searchResult?.length }} movies for you!
        </div>
      </div>
      <v-row>
        <v-col v-for="item of searchResult" :key="item.id" cols="12" md="4" lg="2">
          <AppCard :item="item"/>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "GenrePage",
  components: {
    AppCard: () => import('../../components/common/AppCard'),
  },
  data() {
    return {
      genreId: this.$route.params.tag,
    }
  },
  computed: {
    ...mapGetters({
      searchResult: 'movies/getSearchMovies',
      genreList: 'movies/getGenreList',
    }),
    genreName() {
      return this.genreList[this.genreId];
    }
  },
  async created() {
    const payload = {
      genres: Number.isInteger(+this.genreId) ? this.genreId : 6
    };

    await this.searchMovieByTeg(payload);
  },
  methods: {
    ...mapActions({
      searchMovieByTeg: 'movies/loadSearchingMovies',
    }),
  },
}
</script>

<style scoped lang="scss">
.movies-title {
  background: #373737;
  box-shadow: inset #000000 0 0 20px 3px;
  border: 2px solid white;
}
</style>
