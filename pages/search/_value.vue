<template>
  <v-container fluid>
    <v-container class="search">
      <div class="search-title mb-6 px-10">
        <h1 :class="getFontSize($breakpoints.width, 700, [48, 48, 48, 48, 48])" class="mb-10 text-uppercase main-brown-text">
          SEARCHING MOVIES WITH {{ searchValue.toUpperCase() }}
        </h1>
        <div :class="getFontSize($breakpoints.width, 400, [32, 32, 32, 32, 32])" class="mb-15">
          <div v-show="searchResult?.length">
            We fined {{ searchResult?.length }} movies for you !
          </div>
          <div v-show="!searchResult?.length">
            Movies don't find
          </div>
        </div>
      </div>
      <v-row v-show="searchResult?.length">
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
  name: "SearchPage",
  components: {
    AppCard: () => import('../../components/common/AppCard'),
  },
  data() {
    return {
      searchValue: this.$route.params.value,
    }
  },
  computed: {
    ...mapGetters({
      searchResult: 'movies/getSearchMovies',
      genreList: 'movies/getGenreList',
    }),
  },
  async created() {
    const val = this.searchValue;
    const payload = {};

    if (val) {
      const isGenre = this.genreList.includes(val.toUpperCase());

      if (isGenre) payload.genres = val;
      else payload.name = val;
    }
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
.search-title {
  background: #373737;
  box-shadow: inset #000000 0 0 20px 3px;
  border: 2px solid white;
}
</style>
