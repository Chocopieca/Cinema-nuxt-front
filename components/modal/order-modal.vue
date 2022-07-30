<template>
  <BaseModal>
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <div @click="goTo(`/movie/${movieItem.id}`)">
          <v-img
            :lazy-src="$img(movieItem.image, {
              quality: 20,
              format: 'webp'
            })"
            :src="$img(movieItem.image, {
              quality: 100,
              format: 'webp'
            })"
            contain
            max-height="550"
            class="movie-card-img mb-5 cursor-pointer"
          />
        </div>
        <BaseButton
          button-color="chips"
          button-size="chip"
          @click="goTo(`/genre/${movieItem.genre}`)"
        >{{ getGenreNameById }}</BaseButton>
      </v-col>
      <v-col cols="12" md="6" lg="8">
        <h1 :class="getFontSize($breakpoints.width, 700, [32, 32, 32, 32, 32])" class="main-brown-text">
          {{ movieItem.name }}
        </h1>
        <BaseSelect
          v-model="selectedDate"
          title="Choose a date"
          :items="movieShowDate"
          class="mb-5"
        />
        <BaseSelect
          v-model="selectedTime"
          title="Choose a time"
          :items="showTimeList"
          :disabled="!selectedDate"
          class="mb-5"
        />
        <BaseSelect
          v-model="selectedRow"
          title="Choose a row"
          :items="rowPlaces"
          :disabled="!selectedTime"
          class="mb-5"
        />
        <BaseSelect
          v-model="selectedSeat"
          title="Choose a place"
          :items="seatPlaces"
          :disabled="!selectedRow"
          class="mb-5"
        />

        <BaseButton
          button-color="border"
          button-size="large"
          :disabled="!selectedSeat"
          @click="selectSession"
        >SELECT SESSION</BaseButton>
      </v-col>
    </v-row>
  </BaseModal>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "OrderModal",
  components: {
    BaseModal: () => import('./BaseModal'),
    BaseButton: () => import('~~/components/ui/BaseButton'),
    BaseSelect: () => import('~~/components/ui/BaseSelect')
  },
  data() {
    return {
      selectedDate: null,
      selectedTime: null,
      selectedRow: null,
      selectedSeat: null,
    }
  },
  computed: {
    ...mapGetters({
      options: 'modal/getModalOption',
      checkModal: 'modal/checkModal',
      genreList: 'movies/getGenreList',
      movieShowDate: 'movies/getMovieShowDate',
      movieShowList: 'movies/getMovieShowList',
      moviePlaces: 'movies/getMoviePlaces',
      bookedMovies: 'movies/getBookedMovies',
    }),
    getGenreNameById() {
      return this.genreList[this.movieItem.genre];
    },
    movieItem() {
      return this.options?.movie ?? {
        id: 0,
        image: 'https://media.istockphoto.com/vectors/error-page-or-file-not-found-icon-vector-id924949200?k=20&m=924949200&s=170667a&w=0&h=-g01ME1udkojlHCZeoa1UnMkWZZppdIFHEKk6wMvxrs=',
        name: ''
      };
    },
    showTimeList() {
      try {
        return this.selectedDate ? this.movieShowList
          .filter(item => item.showdate === this.selectedDate)[0]
          .daytime
          .split(';') : [];
      } catch (e) {
        console.log('Error showTimeList', e);
        return [];
      }
    },
    rowPlaces() {
      return this.moviePlaces?.map((item, index) => ++index) ?? [];
    },
    seatPlaces() {
      try {
        return this.selectedRow ? this.moviePlaces
          ?.find(item => item[0].row === this.selectedRow)[1]
          .filter(item => item.is_free)
          .map(item => item.seat) : [];
      } catch (e) {
        console.log('Error showTimeList', e);
        return [];
      }
    },
  },
  watch: {
    checkModal: {
      async handler(val) {
        try {
          if(val) {
            await this.loadMovieShowList(this.options.movie.id)
          } else {
            this.resetModal();
          }
        } catch (e) {
          console.log('checkModal', e)
        }
      },
      immediate: true,
    },
    async selectedTime() {
      try {
        const data = {
          id: this.movieItem.id,
          daytime: this.selectedTime,
          showdate: this.selectedDate,
        }
        await this.loadMoviePlaces(data);
      } catch (e) {
        console.log('Error selectedTime', e)
      }
    }
  },
  methods: {
    ...mapActions({
      loadMovieShowList: 'movies/loadMovieShowList',
      loadMoviePlaces: 'movies/loadMoviePlaces',
      BookMovie: 'movies/BookMovie',
      hideModal: 'modal/hideModal',
    }),
    resetModal() {
      this.selectedDate = null;
      this.selectedTime = null;
    },
    goTo(link) {
      this.$router.push(link);
      this.hideModal();
    },
    async selectSession() {
      const payload = {
        movieId: this.movieItem.id,
        row: this.selectedRow,
        seat: this.selectedSeat,
        showdate: this.selectedDate,
        daytime: this.selectedTime
      }
      await this.BookMovie(payload);
      console.log('bookedMovies', this.bookedMovies)
    }
  },
}
</script>

<style scoped lang="scss">

</style>
