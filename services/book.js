import ApiService from './api'

export default class BookService extends ApiService {
  checkPlace(id, daytime, showdate) {
    return this.axios.$get(`/showPlaces?movie_id=${id}&daytime=${daytime}&showdate=${showdate}`)
  }

  bookPlace(payload) {
    // {
    //   "movie_id": 61,
    //   "row": 9,
    //   "seat": 8,
    //   "showdate": "2021-06-27",
    //   "daytime": "10:50"
    // }
    return this.axios.$post(`/bookPlace`, payload)
  }
}
