export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: string;
  runtime: number;
  genres: Genre[];
  key: string;
  type: string;
  trailerKey?: string;
};
export type Genre = {
  name: string;
};

export type movieResponseType = {
  page: number;
  totalPages: number;
  results: MovieType[];
};
export type Directorname = {
  cast: Casttype[];
  crew: Casttype[];
};
export type Casttype = {
  job: string;
  name: string;
};
