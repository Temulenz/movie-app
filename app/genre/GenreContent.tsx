import { Moviecard } from "@/components/home/movie-card";
import { movieResponseType } from "@/components/main/Movietype";
import { getMoviesbygenreid, getGenremovies } from "@/utilis/get-data";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const GenreContent = async ({
  searchParams,
}: {
  searchParams: Promise<{ id: string; name: string; page?: string }>;
}) => {
  const params = await searchParams;

  const id = params.id;
  const name = params.name;
  const page = Number(params.page) || 1;

  const filteredMoviesResponse: movieResponseType = await getMoviesbygenreid(
    id,
    page
  );

  const Genremoviesresponse = await getGenremovies();

  return (
    <div className="px-6 md:px-12">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row gap-6 mt-20 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Search Filter</h1>
        <h2 className="text-3xl md:text-4xl pl-60 font-bold">
          {filteredMoviesResponse.total_results} titles in {name}
        </h2>
      </div>

      <div className="flex  flex-col md:flex-row gap-10">
        {/* GENRE SIDEBAR */}
        <div className="flex flex-wrap w-[313px] h-[200px] ml-30 gap-4 justify-start ">
          {" "}
          <div className="pl-2  mb-10">
            {" "}
            <div className="text-[24px] font-semibold">Genre</div>{" "}
            <div className="pb-5 pt-2 text-[16px]">
              {" "}
              See lists of movies by genre{" "}
            </div>{" "}
          </div>{" "}
          {Genremoviesresponse.genres.map(
            (genre: { id: string; name: string }) => (
              <Link
                key={genre.id}
                href={`/genre?id=${genre.id}&name=${genre.name}&page=${1}`}
              >
                {" "}
                <div className="border border-white rounded-md   ">
                  {" "}
                  <Button className="flex items-center gap-2 ">
                    {" "}
                    <span className="text-[12px] font-semibold ">
                      {" "}
                      {genre.name}{" "}
                    </span>{" "}
                    <FaChevronRight
                      color="#09090B"
                      className="w-[16px] h-[16px]"
                    />{" "}
                  </Button>{" "}
                </div>{" "}
              </Link>
            )
          )}{" "}
        </div>{" "}
        {/* MOVIES */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
          {filteredMoviesResponse.results.map((movie) => (
            <Moviecard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              Score={movie.vote_average}
              Image={movie.poster_path}
            />
          ))}
        </div>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-4 mt-16">
        {page > 1 && (
          <Link href={`/genre?id=${id}&name=${name}&page=${page - 1}`}>
            <Button variant="outline">Prev</Button>
          </Link>
        )}

        <span className="font-semibold">
          Page {page} / {filteredMoviesResponse.total_pages}
        </span>

        {page < filteredMoviesResponse.total_pages && (
          <Link href={`/genre?id=${id}&name=${name}&page=${page + 1}`}>
            <Button variant="outline">Next</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default GenreContent;
