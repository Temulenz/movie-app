"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieType } from "./Movietype";
import { FaStar } from "react-icons/fa";
import { Button } from "../ui/button";

type MovieCarouselProps = {
  movies: MovieType[];
};

export function MovieCarousel({ movies }: MovieCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="w-360">
        <CarouselContent>
          {movies.slice(0, 5).map((movie, index) => (
            <CarouselItem
              key={index}
              className="w-360 relative h-160  bg-no-repeat bg-cover bg-center text-white "
            >
              <img
                className="w-full h-full"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              />
              <div className="p-1 absolute top-[108px] left-[140px]">
                <div className="">
                  <p>Now Playing :</p>
                  <p className="text-[36px] font-bold">{movie.title}</p>
                  <p className="flex gap-2 items-center text-[18px] pt-[10px]">
                    <FaStar className="h-[28px] w-[28px]" color="#FDE047" />
                    {movie.vote_average}
                    <span className="text-[16px] color-[#71717A]">/10</span>
                  </p>
                  <p className="w-[500px] text-[12px] font-normal pt-[26px]">
                    {movie.overview}
                  </p>
                  <Button className="bg-white text-black mt-4">
                    Watch Trailer
                  </Button>
                  <div className="flex gap-2 justify-center items-center mt-[250px] ml-130 ">
                    {Array.from({ length: count })
                      .slice(0, 5)
                      .map((_, index) => (
                        <div
                          onClick={() => {
                            api?.scrollTo(index);
                          }}
                          key={index}
                          className={`rounded-full size-4 ${
                            index + 1 === current ? "bg-white" : "bg-gray-600"
                          }`}
                        ></div>
                      ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="default"
          className="left-13  rounded-full bg-white"
        />
        <CarouselNext
          variant={"default"}
          className="right-13 bg-white rounded-full"
        />
      </Carousel>
    </>
  );
}
