import { MovieCarousel } from "@/components/main/MovieCarousel";
import { MoviesContainer } from "@/components/home/mvoies-container";
import { movieResponseType } from "@/components/main/Movietype";
import { getMoviesList } from "@/utilis/get-data";

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
        <MoviesContainer movies={upcomingMovies.results} title="Upcoming" />
        <MoviesContainer movies={popularMovies.results} title="Popular" />
        <MoviesContainer movies={topRatedMovies.results} title="Top Rated" />
      </div>
    </div>
  );
}
