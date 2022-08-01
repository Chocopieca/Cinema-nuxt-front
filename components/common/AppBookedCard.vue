<template>
  <div class="booked-movie">
    <v-row>
      <v-col md="2">
        <v-img
          :src="getMovie.image"
          contain
          class="cursor-pointer"
          @click="$router.push(`/movie/${getMovie.id}`)"
        />
      </v-col>
      <v-col class="d-flex justify-center flex-column">
        <div class="mb-2">
          <span class="text-uppercase main-brown-text d-block d-md-inline-block">Movie name:</span>
          {{ getMovie.name }}
        </div>
        <div>
          <BaseButton
            button-color="chips"
            button-size="chip"
            @click="$router.push(`/genre/${getMovie.genre}`)"
          >{{ getGenreNameById }}</BaseButton>
        </div>
      </v-col>
      <v-col class="d-flex justify-center flex-column">
        <div class="mb-3">
          <span class="text-uppercase main-brown-text d-block d-md-inline-block">BOOKING TIME:</span>
          {{ bookedMovie.showdate }} at {{ bookedMovie.daytime }}
        </div>
        <div class="text-uppercase mb-3"><span class="main-brown-text">Your row:</span> {{ bookedMovie.row }}</div>
        <div class="text-uppercase mb-3"><span class="main-brown-text">Your seat:</span> {{ bookedMovie.seat }}</div>
        <div class="mb-3">
          <span class="text-uppercase main-brown-text d-block d-md-inline-block">Your ticketkey:</span>
          {{ bookedMovie.ticketkey }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "AppBookedCard",
  components: {
    BaseButton: () => import('~~/components/ui/BaseButton')
  },
  props: {
    bookedMovie: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters({
      movieList: 'movies/getAllMovies',
      genreList: 'movies/getGenreList',
    }),
    getMovie() {
      return this.movieList?.find(item => +item.id === +this.bookedMovie.movie_id) ?? {};
    },
    getGenreNameById() {
      return this.genreList[this.getMovie.genre];
    },
  }
}
</script>

<style scoped lang="scss">
.booked-movie {
  background: #373737;
  box-shadow: inset #000000 0 0 20px 3px;
  border: 2px solid white;
  padding: 20px 60px;
}
</style>
