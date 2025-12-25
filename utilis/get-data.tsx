export const getMoviesList = async (listName: string, page: number = 1) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${listName}?language=en-US&page=${page}`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  return res.json();
};

export const getGenremovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};
export const getMoviesbygenreid = async (
  genreIds: string,
  page: number = 1
) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds}&page=${page}`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  return res.json();
};

export const Getmoviebysearch = async (
  searchValue: string,
  page: number = 1
) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  return res.json();
};
export const Getmoviesdescribtion = async (movieId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};
export const GetmoviesDirectorsname = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const GetmoviesMorelikethis = async (id: string, page: number = 1) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=${page}`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  return res.json();
};

export const GetmoviesTrailer = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};
