"use client";

import { useState } from "react";
import { MovieType } from "../main/Movietype";
import { Moviecard } from "./movie-card";

type MoviesContainerProps = {
  movies: MovieType[];
  title: string;
};

export const SeeMoreCard = ({ movies, title }: MoviesContainerProps) => {
  const ITEMS_PER_PAGE = 10;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(movies.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentMovies = movies.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="w-[1440px] mx-auto ">
      {/* TITLE */}
      <div className="flex justify-between mt-[52px] mb-9">
        <h2 className="text-[24px] font-bold">{title}</h2>
      </div>

      {/* MOVIES */}
      <div className="flex gap-8 flex-wrap">
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
      <div className="flex justify-center items-center gap-3 mt-12">
        {/* PREV */}
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 1}
          className={`px-3 py-2 rounded-md border ${
            page === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-zinc-800"
          }`}
        >
          Prev
        </button>

        {/* PAGE NUMBERS */}
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              className={`px-4 py-2 rounded-md border text-sm ${
                page === pageNumber
                  ? "bg-white text-black font-bold"
                  : "hover:bg-zinc-800"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        {/* NEXT */}
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={page === totalPages}
          className={`px-3 py-2 rounded-md border ${
            page === totalPages
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-zinc-800"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
