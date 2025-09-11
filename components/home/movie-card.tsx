import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaStar } from "react-icons/fa";

type MovieCardProps = { title: string; Score: number; Image: string };

export const Moviecard = ({ title, Score, Image }: MovieCardProps) => {
  return (
    <div>
      <Card className="h-[440px] w-[230px] bg-secondary p-0 overflow-hidden gap-2 px-0">
        <CardContent className="w-[230px] h-[340px] px-0">
          <img
            src={`https://image.tmdb.org/t/p/w500/${Image}`}
            alt=""
            className="w-[230px] h-[340px] object-cover"
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start p-2">
          <CardDescription className="flex gap-2">
            <span className="flex gap-2 items-center">
              {" "}
              <FaStar color="#FDE047" />
              <span className="text-[14px]"> {Score}</span> /10
            </span>
          </CardDescription>
          <CardTitle className="pt-2">{title}</CardTitle>
        </CardFooter>
      </Card>
    </div>
  );
};
