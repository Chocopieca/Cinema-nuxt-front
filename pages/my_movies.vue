<template>
  <v-container fluid>
    <v-container class="pa-0">
      <div class="booking-title mb-6 px-10">
        <h1 :class="getFontSize($breakpoints.width, 700, [48, 48, 48, 38, 38])" class="main-brown-text mb-10">
          FILMS BOOKED
        </h1>
        <div :class="getFontSize($breakpoints.width, 400, [32, 32, 32, 24, 24])" class="mb-15">
          <div v-show="bookMovies?.length">
            The {{ bookMovies?.length }} {{ bookMovies.length === 1 ? "movie" : 'movies'}} you have booked in our theater.
          </div>
          <div v-show="!bookMovies?.length">You haven't booked any movies yet.</div>
        </div>
      </div>
      <v-row no-gutters>
        <v-col v-for="item of bookMovies" :key="item.movie_id" cols="12" class="mb-5">
          <AppBookedCard :booked-movie="item"/>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "MyMovies",
  components: {
    AppBookedCard: () => import('../components/common/AppBookedCard'),
  },
  computed: {
    ...mapGetters({
      bookMovies: 'movies/getBookedMovies',
    })
  },
}
</script>

<style scoped lang="scss">
.booking-title {
  background: #373737;
  border: 2px solid white;
  box-shadow: inset #000000 0 0 20px 3px;
}
</style>
