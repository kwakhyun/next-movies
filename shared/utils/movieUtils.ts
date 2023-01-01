import { MediaType } from '../types/commonEnums';
import { Movie } from '../types/moviesTypes';

import { isOfType } from './commonUtils';

export function getMovieReleaseYear(movie: Movie) {
  const date = movie?.release_date;

  if (!date) {
    return null;
  }

  const year = new Date(movie.release_date).getFullYear();
  return year;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isMovie(value: any): value is Movie {
  return (
    value.media_type === MediaType.MOVIE ||
    isOfType<Movie>(value, ['title', 'overview', 'release_date'])
  );
}
