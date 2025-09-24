import { id } from "zod/v4/locales";
import { MovieType } from "../main/Movietype";
import { Moviecard } from "./movie-card";
import SeeMore from "../main/SeeMore";

type MoviesContainerProps = {
  movies: MovieType[];
  title: string;
};

export const SeeMoreCard = ({ movies, title }: MoviesContainerProps) => {
  return (
    <div className="w-[1440px] m-auto px-20">
      <div
        className="flex
      justify-between
      mt-[52px] mb-9"
      >
        <div className="text-[24px] font-bold ">{title}</div>
      </div>

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
