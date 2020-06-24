import { Injectable } from '@angular/core';
import { Movie } from 'src/domain/movie';
import movies from 'src/assets/movies.json';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: Movie[];
  favouriteMovies: Set<Movie>;

  constructor() {
    this.movies = movies;
    this.favouriteMovies = new Set();
  }

  saveFavouriteMovie(movie: Movie): void {
    this.favouriteMovies.add(movie);
  }

  deleteFavouriteMovie(movie: Movie): void {
    this.favouriteMovies.delete(movie);
  }

  search(searchTerm?: string): Movie[] {
    if (!searchTerm) {
      return this.movies;
    }
    return this.movies.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
