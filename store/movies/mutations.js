export default {
  setAllMovies(state, value) {
    state.allMovieList = value;
  },
  setSearchMovies(state, value) {
    state.searchMovieList = value;
  },
  setInputSearchMovies(state, value) {
    state.inputSearchingList = value;
  },
  setMovieShowDate(state, value) {
    state.movieShowDate = value;
  },
  setMovieShowList(state, value) {
    state.movieShowList = value;
  },
  setMoviePlaces(state, value) {
    state.moviePlaces = value;
  },
  setBookedMovie(state, value) {
    state.bookedMovies.push(value);
  },
};
