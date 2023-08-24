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

export interface MovieDetailed extends Movie {
  belongs_to_collection: string;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  imdb_id: string;
  production_companies: { name: string; origin_country: string }[];
  production_countries: { name: string }[];
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
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

export interface TvDetailed extends Tv {
  created_by: { id: number; name: string }[];
  episode_run_time: number[];
  genres: { id: number; name: string }[];
  homepage: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  networks: { id: number; name: string }[];
  number_of_episodes: number;
  number_of_seasons: number;
  production_companies: { id: number; name: string }[];
  production_countries: { name: string }[];
  status: string;
  tagline: string;
  type: string;
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
  character?: string;
  job?: string;
}

export interface PersonDetailed extends Person {
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  homepage: string;
  imdb_id: string;
  place_of_birth: string;
}

export type ContentType = Movie | Tv | Person;

export interface FilteredResultData {
  movie: Movie[];
  tv: Tv[];
  person: Person[];
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

export interface Credits {
  id: number;
  cast: Person[];
  crew: Person[];
  director?: Person;
}

export interface MovieImages {
  backdrops: { file_path: 'string' }[];
}

export interface MovieReview {
  author: string;
  author_details: { username: 'ChrisSawin'; avatar_path: string };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
}
