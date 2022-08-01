<template>
  <div>
    <BaseModal bg-img="./img/modal-background-subscribe.png">
      <div class="flex-space-between-column">
        <h2
          :class="getFontSize($breakpoints.width, 700, [32, 32, 32, 32, 32])"
          class="text-uppercase main-brown-text mb-10"
        >Successful booking</h2>
        <v-row class="booked-movie">
          <v-col md="6">
            <v-img
              :src="bookedMovieItem.image"
              contain
              max-height="300"
              class="mb-5"
            />
          </v-col>
          <v-col md="6" class="d-flex flex-column justify-center">
            <div class="mb-3">
              <span class="text-uppercase main-brown-text">Movie name:</span>
              {{ bookedMovieItem.name }}
            </div>
            <div class="mb-3">
              <span class="text-uppercase main-brown-text">BOOKING TIME:</span>
              {{ bookedMovieInfo.showdate }} at {{ bookedMovieInfo.daytime }}
            </div>
            <div class="mb-3 text-uppercase"><span class="main-brown-text">Your row:</span> {{ bookedMovieInfo.row }}</div>
            <div class="mb-3 text-uppercase"><span class="main-brown-text">Your seat:</span> {{ bookedMovieInfo.seat }}</div>
            <div class="mb-10">
              <span class="text-uppercase main-brown-text">Your ticketkey:</span>
              {{ bookedMovieInfo.ticketkey }}
            </div>
            <BaseButton
              button-color="border"
              button-size="large"
              @click="goTo('/my_movies')"
            >SEE ALL BOOKING</BaseButton>
          </v-col>
        </v-row>
      </div>
    </BaseModal>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ThankYouModal",
  components: {
    BaseModal: () => import('./BaseModal'),
    BaseButton: () => import('~~/components/ui/BaseButton')
  },
  data() {
    return {
      bookedMovieId: 61,
    }
  },
  computed: {
    ...mapGetters({
      movieList: 'movies/getAllMovies',
      bookMovies: 'movies/getBookedMovies',
      options: 'modal/getModalOption'
    }),
    bookedMovieItem() {
      return this.movieList.find(item => item.id === this.options.id);
    },
    bookedMovieInfo() {
      return this.bookMovies.find(item => +item.movie_id === +this.options.id);
    }
  },
  methods: {
    ...mapActions({
      hideModal: 'modal/hideModal'
    }),
    goTo(link) {
      this.$router.push(link);
      this.hideModal();
    }
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
