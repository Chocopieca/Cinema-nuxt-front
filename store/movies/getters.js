export default {
  getAllMovies: (state) => state.allMovieList,
  getGenreList: (state) => state.genres,
  getSearchMovies: (state) => state.searchMovieList,
  getInputSearchingList: (state) => state.inputSearchingList,
  getMovieShowDate: (state) => state.movieShowDate,
  getMovieShowList: (state) => state.movieShowList,
  getMoviePlaces: (state) => state.moviePlaces,
  getBookedMovies: (state) => state.bookedMovies,
};
