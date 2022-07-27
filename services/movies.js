import ApiService from './api'

export default class MoviesService extends ApiService {
  list() {
    return this.axios.$get('/movies');
  }

  search(id, name, genres) {
    return this.axios.$get(`/movies?movie_id=${id}&name=${name}&genres=${genres}`);
  }

  showAllList() {
    return this.axios.$get('/movieShows');
  }

  showListById(id) {
    return this.axios.$get(`/movieShows?movie_id=${id}`);
  }
}
