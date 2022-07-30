export default {
  async getAllMovies({ commit }) {
    try {
      const movies = await this.$services.movies
        .list()
        .then(res => res.data);
      commit('setAllMovies', movies);
    } catch (e) {
      console.log('Error getAllMovies', e);
    }
  },
  async loadSearchingMovies({ commit }, filters) {
    try {
      const { id = '', name = '', genres = '' } = filters
      const movies = await this.$services.movies
        .search(id, name, genres)
        .then(res => res.data);
      commit('setSearchMovies', movies);
    } catch (e) {
      console.log('Error loadSearchingMovies', e)
    }
  },
  async loadInputSearchingMovies({ commit }, filters) {
    try {
      const { id = '', name = '', genres = '' } = filters
      const movies = await this.$services.movies
        .search(id, name, genres)
        .then(res => res.data);
      commit('setInputSearchMovies', movies);
    } catch (e) {
      console.log('Error loadSearchingMovies', e)
    }
  },
  async loadMovieShowList({ commit }, id) {
    try {
      const moviesShowList = await this.$services.movies
        .showListById(id)
        .then(res => Object.entries(res.data)[0][1]);
      const showDate = moviesShowList?.map(item => item.showdate);
      commit('setMovieShowList', moviesShowList);
      commit('setMovieShowDate', showDate);
    } catch (e) {
      console.log('Error loadSearchingMovies', e)
    }
  },
  async loadMoviePlaces({ commit }, data) {
    try {
      const {id, daytime, showdate} = data;
      const moviePlaces = await this.$services.book
        .getPlaces(id, daytime, showdate)
        .then(res => res.data);
      commit('setMoviePlaces', moviePlaces);
    } catch (e) {
      console.log('Error loadSearchingMovies', e)
    }
  },
  async BookMovie({ commit }, payload) {
    try {
      // eslint-disable-next-line camelcase
      const { movie_id, row, seat, showdate, daytime } = payload;
      const moviePlaces = await this.$services.book
        .bookPlace(movie_id, row, seat, showdate, daytime)
        .then(res => res.data); // don't work !!!!!!
      console.log('moviePlaces', moviePlaces)

      commit('setBookedMovie', moviePlaces);
    } catch (e) {
      const moviePlacesMock = {
        ...payload,
        ticketkey: "2a8cfbd5a4945f52e92c6b969f440192"
      }
      console.log('moviePlacesMock', moviePlacesMock)
      commit('setBookedMovie', moviePlacesMock);
      console.log('Error loadSearchingMovies', e)
    }
  },
};
