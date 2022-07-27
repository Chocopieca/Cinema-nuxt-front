import MoviesService from './movies'
import BookService from './book'

export default (context) => {
  return {
    movies: new MoviesService(context),
    book: new BookService(context),
  }
}
