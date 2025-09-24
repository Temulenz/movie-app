import { MovieCarousel } from "@/components/main/MovieCarousel";
import { MoviesContainer } from "@/components/home/mvoies-container";
import { movieResponseType } from "@/components/main/Movietype";
import { getMoviesList } from "@/utilis/get-data";
import SeeMore from "@/components/main/SeeMore";

export default async function Home() {
  const upcomingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing"
  );

  return (
    <div className="w-full flex flex-col items-center">
      <div>
        <MovieCarousel movies={nowPlayingMovies.results} />

        <MoviesContainer
          movies={upcomingMovies.results}
          title="Upcoming"
          link="upcoming"
        />

        <MoviesContainer
          movies={popularMovies.results}
          title="Popular"
          link="popular"
        />
        <MoviesContainer
          movies={topRatedMovies.results}
          title="Top Rated"
          link="top_rated"
        />
      </div>
    </div>
  );
}
