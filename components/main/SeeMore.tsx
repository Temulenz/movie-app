import { ChevronRight } from "lucide-react";
import Link from "next/link";

const SeeMore = ({ link }: { link: string }) => {
  return (
    <Link href={`/Seemore/${link}`}>
      {" "}
      <div>
        <div className="flex items-center">
          <div>See More</div>
          <ChevronRight> </ChevronRight>
        </div>
      </div>
    </Link>
  );
};

export default SeeMore;
