import { MoviesContainer } from "@/components/home/mvoies-container";
import { SeeMoreCard } from "@/components/home/SeeMoreCard";
import SeeMore from "@/components/main/SeeMore";
import { getMoviesList } from "@/utilis/get-data";

type SeeMoreProps = {
  params: Promise<{ link: string }>;
};

const SeeMorePage = async ({ params }: SeeMoreProps) => {
  const dynamicParams = await params;
  const link = dynamicParams.link;

  const movie = await getMoviesList(link);
  let title = "";

  if (link === "top_rated") {
    title = "Top rated";
  } else if (link === "Popular") {
    title = "Popular";
  } else {
    title === "Upcoming";
  }

  console.log(movie);
  return <SeeMoreCard movies={movie.results} title={title} />;
};

export default SeeMorePage;
