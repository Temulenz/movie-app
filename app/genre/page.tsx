import { GenreSkeleton } from "@/components/skeltons/GenreSkelton";
import { Suspense } from "react";
import GenreContent from "./GenreContent";

const GenrePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ id: string; name: string; page?: string }>;
}) => {
  return (
    <Suspense fallback={<GenreSkeleton />}>
      <GenreContent searchParams={searchParams} />
    </Suspense>
  );
};

export default GenrePage;
