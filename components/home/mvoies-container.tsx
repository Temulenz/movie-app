import { id } from "zod/v4/locales";
import { MovieType } from "../main/Movietype";
import { Moviecard } from "./movie-card";

type MoviesContainerProps = {
  movies: MovieType[];
  title: string;
};

export const MoviesContainer = ({ movies, title }: MoviesContainerProps) => {
  return (
    <div className="w-[1440px] m-auto px-20">
      <h2 className="text-[24px] font-bold mt-[52px] mb-9">{title}</h2>
      <div className="flex gap-8 flex-wrap">
        {movies.slice(0, 10).map((movie) => (
          <Moviecard
            id={movie.id}
            key={movie.id}
            title={movie.title}
            Score={movie.vote_average}
            Image={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};
