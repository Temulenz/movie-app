import { movieResponseType, MovieType } from "@/components/main/Movietype";
import { Getmoviesdescribtion, GetmoviesMorelikethis } from "@/utilis/get-data";

type MovieDetailsProps = {
  params: Promise<{ id: string }>;
};
const MovieDetails = async ({ params }: MovieDetailsProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;

  const moviedetails: MovieType = await Getmoviesdescribtion(id);
  const similarMovie = await GetmoviesMorelikethis(id);

  console.log("asdasdasd", moviedetails);

  return (
    <div className="w-[1080px]">
      <div className="flex justify-between ">
        <div>
          <div className="font-bold text-[32px]">{moviedetails.title}</div>
          <div>{moviedetails.release_date}</div>
        </div>
        <div>
          <div className="text-[12px]">Rating</div>

          <div className="flex">
            <img className="w-[23px]" src="star.png" />
            <div className="flex">
              <div className="font-bold">{moviedetails.vote_average}</div>
              <span className="text-[16px] color-[#71717A]">/10</span>
              <div>{moviedetails.vote_count}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <img
          className="w-[290px] h-[498px]"
          alt=""
          src={`https://image.tmdb.org/t/p/orignal${moviedetails.poster_path}`}
        ></img>
        <div>{`https://image.tmdb.org/t/p/orignal${moviedetails.backdrop_path}`}</div>
      </div>
    </div>
  );
};

export default MovieDetails;
