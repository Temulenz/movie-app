"use client";

import React, { useEffect, useState } from "react";
import { Moviecard } from "./movie-card";

type MovieType = {
  original_title: string;
  poster_path: string;
  vote_average: number;
};

function Movie() {
  const [movieList, setMovieList] = useState<MovieType[] | undefined>();
  const [count, setCount] = useState(0);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=55af3480ca26d83a32c17fa221b191fb"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movieList);

  return (
    <div className="flex flex-wrap gap-4">
      {movieList?.map((movie, index) => (
        <div key={index}>
          <Moviecard
            title={movie.original_title}
            Image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            Score={movie.vote_average}
          />
        </div>
      ))}
    </div>
  );
}

export default Movie;
