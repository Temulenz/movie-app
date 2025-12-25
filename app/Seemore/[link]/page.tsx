import { Moviecard } from "@/components/home/movie-card";
import { getMoviesList } from "@/utilis/get-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MovieType } from "@/components/main/Movietype";

type SeeMoreProps = {
  params: Promise<{ link: string }>;
  searchParams?: Promise<{ page?: string }>;
};

const ITEMS_PER_PAGE = 10;

const SeeMorePage = async ({ params, searchParams }: SeeMoreProps) => {
  const { link } = await params;
  const sp = await searchParams;

  const page = Number(sp?.page) || 1;

  // 🔥 TMDB API page (20 кино)
  const apiPage = Math.ceil(page / 2);
  const movie = await getMoviesList(link, apiPage);

  // 🔥 UI дээр 10-аар хуваах
  const isFirstHalf = page % 2 === 1;
  const startIndex = isFirstHalf ? 0 : ITEMS_PER_PAGE;
  const currentMovies: MovieType[] = movie.results.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const totalPages = movie.total_pages * 2;

  let title = "";
  if (link === "top_rated") title = "Top rated";
  else if (link === "popular") title = "Popular";
  else if (link === "upcoming") title = "Upcoming";

  return (
    <div className="w-[1400px] px-15 mx-auto">
      {/* TITLE */}
      <h2 className="text-[24px] font-bold mt-12 mb-8">
        {movie.total_results} movies in {title}
      </h2>

      {/* MOVIES */}
      <div className="flex flex-wrap gap-8">
        {currentMovies.map((movie) => (
          <Moviecard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            Score={movie.vote_average}
            Image={movie.poster_path}
          />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-end items-center gap-2 mt-16">
        {/* PREVIOUS */}
        <Link
          href={`/Seemore/${link}?page=${Math.max(1, page - 1)}`}
          className={`flex items-center gap-1 px-3 py-2 rounded-md border ${
            page === 1 ? "pointer-events-none opacity-40" : ""
          }`}
        >
          ‹ <span>Previous</span>
        </Link>

        {/* PAGE NUMBERS */}
        {(() => {
          const pages: (number | string)[] = [];
          const total = totalPages;
          const current = page;

          if (total <= 5) {
            for (let i = 1; i <= total; i++) pages.push(i);
          } else {
            pages.push(1);

            if (current > 3) pages.push("...");

            const start = Math.max(2, current - 1);
            const end = Math.min(total - 1, current + 1);

            for (let i = start; i <= end; i++) {
              pages.push(i);
            }

            if (current < total - 2) pages.push("...");

            pages.push(total);
          }

          return pages.map((p, i) =>
            p === "..." ? (
              <span key={`ellipsis-${i}`} className="px-2 text-gray-400">
                …
              </span>
            ) : (
              <Link
                key={`page-${p}-${i}`}
                href={`/Seemore/${link}?page=${p}`}
                className={`px-3 py-2 rounded-md border ${
                  p === page
                    ? "bg-black text-white font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                {p}
              </Link>
            )
          );
        })()}

        {/* NEXT */}
        <Link
          href={`/Seemore/${link}?page=${Math.min(totalPages, page + 1)}`}
          className={`flex items-center gap-1 px-3 py-2 rounded-md border ${
            page === totalPages ? "pointer-events-none opacity-40" : ""
          }`}
        >
          <span>Next</span> ›
        </Link>
      </div>
    </div>
  );
};

export default SeeMorePage;
