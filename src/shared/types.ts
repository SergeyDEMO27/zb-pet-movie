export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type?: string;
}

export interface Tv {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
  media_type?: string;
}

export interface Person {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: (Movie | Tv)[];
  media_type?: string;
}

export type ContentType = Movie | Tv | Person;

export interface FilteredResultData {
  movie?: Movie[];
  tv?: Tv[];
  person?: Person[];
}

export interface FilteredData {
  results: FilteredResultData;
  page: number;
  total_pages: number;
  total_results: number;
}

export interface Paginated<T> {
  results: T[];
  page: number;
  total_pages: number;
  total_results: number;
}
