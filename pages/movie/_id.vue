<template>
  <v-container fluid>
    <v-container class="movie-card pa-5 pa-md-10">
      <v-row>
        <v-col cols="12" md="6" lg="4">
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
            class="movie-card-img mb-5"
          />
          <BaseButton button-color="border" @click="setOrder">WATCH</BaseButton>
        </v-col>
        <v-col cols="12" md="6" lg="8">
          <h1 :class="getFontSize($breakpoints.width, 700, [32, 32, 32, 32, 32])" class="main-brown-text">
            {{ currentMovie.name }}
          </h1>
          <BaseButton
            button-color="chips"
            button-size="chip"
            @click="searchMovieByGenre(currentMovie.genre)"
          >{{ getGenreNameById }}</BaseButton>
          <div class="movie-card-description">{{ currentMovie.description }}</div>
          <div class="movie-card-feature" v-html="currentMovie.additional"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "MoviePage",
  components: {
    BaseButton: () => import('~~/components/ui/BaseButton')
  },
  data() {
    return {
      movieId: this.$route.params.id,
    }
  },
  computed: {
    ...mapGetters({
      movieList: 'movies/getAllMovies',
      genreList: 'movies/getGenreList',
    }),
    currentMovie() {
      return this.movieList.find(item => item.id === +this.movieId);
    },
    getGenreNameById() {
      return this.genreList[this.currentMovie.genre];
    },
  },
  methods: {
    ...mapActions({
      openDialog: 'modal/showModal',
    }),
    async searchMovieByGenre(id) {
      await this.$router.push(`/genre/${id}`)
    },
    setOrder() {
      const payload = {
        type: 'OrderModal',
        options: {
          movie: this.currentMovie,
        }
      }
      this.openDialog(payload)
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep.movie-card {
  background: #373737;
  box-shadow: inset #000000 0 0 20px 3px;
  border: 2px solid white;

  button {
    max-width: 100%;
  }

  &-description {
    margin-bottom: 20px;
  }

  &-feature ul {
    list-style: none;
    padding: 0;

    li {
      background: linear-gradient(280deg,  #c18a2c30, transparent );
      border: 1px solid black;
      padding: 8px;

      @media (min-width: 960px) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          margin: 0;
        }
      }
    }
  }
}
</style>
