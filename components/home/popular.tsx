import { ChevronRight } from "lucide-react";

export function Popular() {
  return (
    <div className="flex justify-between mt-[52px] mb-[32px] w-[1277px]">
      <h4 className="text-[24px]">Popular</h4>
      <p className="flex">
        See more
        <ChevronRight />
      </p>
    </div>
  );
}
