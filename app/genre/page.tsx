import { Moviecard } from "@/components/home/movie-card";
import Link from "next/link";

import { Key } from "react";

type MovieType = {
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
};
type movieResponseType = {
  page: number;
  totalPages: number;
  results: MovieType[];
};

export default async function Upcoming() {
  const getUpcomingmovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };
  const upcomingMovies: movieResponseType = await getUpcomingmovies();
  console.log(upcomingMovies);

  return (
    <div>
      <div className="flex justify-between pl-30 pt-10">
        <div className="text-[24px] font-semibold">Upcoming</div>
        <Link href="/genre"> </Link>
      </div>
      <div className="ml-40 mt-10">
        <div className="flex flex-wrap gap-4 w-[1440px]">
          {upcomingMovies.results.map(
            (movie: {
              id: Key;
              title: string;
              vote_average: number;
              poster_path: string;
            }) => (
              <Moviecard
                key={movie.id}
                title={movie.title}
                Score={movie.vote_average}
                Image={movie.poster_path}
              />
            )
          )}
        </div>{" "}
      </div>
    </div>
  );
}
