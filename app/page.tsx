import Movie from "@/components/home/API";
import { Moviecard } from "@/components/home/movie-card";
import { NavigationMenuDemo } from "@/components/home/Navigation";
import { Popular } from "@/components/home/popular";
import { Scroll } from "@/components/home/Scroll-card";
import Upcoming from "./genre/page";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Scroll></Scroll>

      <Upcoming></Upcoming>
    </div>
  );
}
