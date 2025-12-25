"use client";

import { useState } from "react";
import { movieResponseType } from "./Movietype";
import { Getmoviebysearch } from "@/utilis/get-data";
import Link from "next/link";

export const SearchSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const handlechange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    if (!value) {
      setIsOpen(false);
      setFoundMovies(null);
      return;
    }

    const foundData = await Getmoviebysearch(value);
    setFoundMovies(foundData);
    setIsOpen(true);
  };

  return (
    <div className="relative mt-[5px] w-[300px]">
      {/* INPUT – ӨӨРЧЛӨӨГҮЙ */}
      <input
        value={searchValue}
        onChange={handlechange}
        placeholder="search"
        className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white"
      />

      {/* 🔥 DROPDOWN – INPUT-ИЙН ДООР */}
      {isOpen && foundMovies && (
        <div className="absolute left-0 top-full mt-2 w-[577px] bg-zinc-900 border border-zinc-700 rounded-md z-50">
          {foundMovies.results.slice(0, 5).map((movie) => (
            <Link
              key={movie.id}
              href={`/MovieDetails/${movie.id}`}
              onClick={() => setIsOpen(false)}
              className="flex gap-3 p-2 hover:bg-zinc-800"
            >
              <img
                className="w-[67px] h-[100px] object-cover rounded"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <div>
                <div className="font-semibold">{movie.title}</div>
                <div className="text-sm text-zinc-400">
                  ⭐ {movie.vote_average}
                </div>
                <div className="text-sm text-zinc-500">
                  {movie.release_date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
