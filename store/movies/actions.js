export default {
  async getAllMovies({ commit }) {
    try {
      const movies = await this.$services.movies.list().then(res => res.data);
      commit('setAllMovies', movies);
    } catch (e) {
      console.log('Error getAllMovies', e);
    }
  },
};
