import {
  Directorname,
  movieResponseType,
  MovieType,
  Casttype,
} from "@/components/main/Movietype";
import {
  Getmoviesdescribtion,
  GetmoviesDirectorsname,
  GetmoviesMorelikethis,
  GetmoviesTrailer,
} from "@/utilis/get-data";
import Image from "next/image";
import { Youtubedialog } from "@/components/main/MovieTrailer";
import SeeMore from "@/components/main/SeeMore";
import { MoviesContainer } from "@/components/home/mvoies-container";
import { SeeMoreCard } from "@/components/home/SeeMoreCard";
import { title } from "process";

type MovieDetailsProps = {
  params: Promise<{ id: string }>;
};
const MovieDetails = async ({ params }: MovieDetailsProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;

  const moviedetails: MovieType = await Getmoviesdescribtion(id);
  const Directorname: Directorname = await GetmoviesDirectorsname(id);
  const similarMovie = await GetmoviesMorelikethis(id);
  const Movietrailer: movieResponseType = await GetmoviesTrailer(id);
  const Trailer = Movietrailer.results.find((item) => item.type === "Trailer");

  console.log("asdasdasd", moviedetails);
  console.log("asdasdadvkbndgfbjkfgndbjkndfgsd", Trailer);

  return (
    <div className="w-[1080px]">
      <div className="flex justify-between ">
        <div>
          <div className="font-bold text-[32px]">{moviedetails.title}</div>
          <div>
            {moviedetails.release_date} * PG *{" "}
            {Math.floor(moviedetails.runtime / 60)} h{" "}
            {moviedetails.runtime % 60} min
          </div>
        </div>
        <div>
          <div className="text-[12px]">Rating</div>

          <div className="flex">
            <img className="w-[23px]" src="/star.png" />
            <div className="flex">
              <div className="font-bold">{moviedetails.vote_average}</div>
              <span className="text-[16px] color-[#71717A]">/10</span>
            </div>
          </div>
          <div>{moviedetails.vote_count}</div>
        </div>
      </div>
      <div className="flex justify-between mt-[24px]">
        <div className="flex justify-between w-[1080px]">
          <img
            className="w-[290px] h-[428px] mr-[32px]"
            src={`https://image.tmdb.org/t/p/original/${moviedetails.poster_path}`}
          />

          <Youtubedialog
            image={moviedetails.backdrop_path}
            Movietrailer={Trailer?.key}
          ></Youtubedialog>
        </div>
      </div>
      <div>
        <div className="flex gap-4 mt-[32px] mb-[20px]   ">
          {moviedetails.genres.map((Genre: any) => (
            <div
              className="border p-0.5 border-[#E4E4E7] rounded-md"
              key={Genre.id}
            >
              {Genre.name}
            </div>
          ))}
        </div>
        <div>{moviedetails.overview}</div>
        <div className=" font-bold flex flex-col gap-4 mt-10">
          <div className="flex  items-center ">
            <div> Director</div>
            <div className="text-[16px] font-normal ml-[53px]">
              {Directorname.crew.map((crew, index) => {
                if (crew.job === "Director") {
                  return <div key={index}>{crew.name}</div>;
                }
              })}
            </div>
          </div>
          <div className="flex  items-center ">
            <div> Writers</div>
            <div className="text-[16px]  font-normal flex gap-4 ml-[58px]">
              {Directorname.crew
                .slice(0, 3)
                .map((crew: { job: string; name: string }, index) => {
                  if (
                    crew.job === "Story" ||
                    crew.job === "Novel" ||
                    crew.job === "Original Story" ||
                    crew.job === "Producer"
                  ) {
                    return <div key={index}>{crew.name}</div>;
                  }
                })}
            </div>
          </div>
          <div className="flex  items-center ">
            <div> Stars</div>
            <div className="text-[16px] font-normal flex  gap-4 ml-[72px]">
              {Directorname.cast.slice(0, 3).map((cast, index) => {
                return <div key={index}>{cast.name}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[36px]  ">
        <div className="text-[24px] font-bold">More like this</div>
        <SeeMore link="see more"></SeeMore>
      </div>
      <SeeMoreCard movies={similarMovie.results} title={title} />;
    </div>
  );
};

export default MovieDetails;
