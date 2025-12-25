import { Skeleton } from "@/components/ui/skeleton";

export const GenreSkeleton = () => {
  return (
    <div className="px-6 md:px-12 mt-20">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <Skeleton className="h-10 w-60" />
        <Skeleton className="h-10 w-96" />
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* LEFT SIDEBAR */}
        <div className="w-full md:w-[300px] space-y-4">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-4 w-48" />
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full rounded-md" />
          ))}
        </div>

        {/* MOVIE GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} className="h-[260px] w-full rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
};
