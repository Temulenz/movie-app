"use client";

import { useState } from "react";
import { movieResponseType } from "./Movietype";
import { Getmoviebysearch } from "@/utilis/get-data";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export const SearchSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const handlechange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    const foundData = await Getmoviebysearch(value);
    if (value.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    setFoundMovies(foundData);
  };
  return (
    <div className="mt-[5px]">
      <input
        value={searchValue}
        onChange={handlechange}
        placeholder="search"
      ></input>

      <div>
        <Popover
          open={isOpen}
          onOpenChange={() => {
            setIsOpen(false);
          }}
        >
          <PopoverTrigger></PopoverTrigger>
          <PopoverContent
            onOpenAutoFocus={(e) => e.preventDefault()}
            onCloseAutoFocus={(e) => e.preventDefault()}
            className="ml-[486px] mt-[13px] w-[577px]"
          >
            {foundMovies?.results.slice(0, 5).map((movie) => {
              return (
                <div key={movie.id} className="flex gap-2">
                  <div>
                    <img
                      className="w-[67px] h-[100px] mr-[32px]"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    />
                  </div>
                  <div>
                    <div key={movie.id}>{movie.title}</div>
                    <div>{movie.vote_average}</div>
                    <div>{movie.release_date}</div>
                  </div>
                </div>
              );
            })}

            <Link href={`/search?value=$()`}></Link>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
