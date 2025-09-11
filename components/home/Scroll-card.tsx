import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Scroll() {
  return (
    <div className="w-360">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img className="w-360" src="po1.jpg" />
          </CarouselItem>
          <CarouselItem>
            <img className="w-360" src="po1.jpg" />
          </CarouselItem>
          <CarouselItem>
            <img className="w-360" src="po1.jpg" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-10" />
        <CarouselNext className="right-10" />
      </Carousel>
    </div>
  );
}

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";

export function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-20" />
      <CarouselNext className="right-10" />
    </Carousel>
  );
}
