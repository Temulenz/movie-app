import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GiPlayButton } from "react-icons/gi";
type Youtubeprops = {
  Movietrailer: any;

  image: string;
};

export function Youtubedialog({ Movietrailer, image }: Youtubeprops) {
  return (
    <div className="h-[430px] w-[760px] bg-gray-400 flex items-end pb-10 pl-10  relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${image}`}
        height={428}
        width={760}
        className="absolute inset-0 h-[430px] w-[760px] object-cover"
      ></img>{" "}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="absolute rounded-full">
            <GiPlayButton /> Play trailer
          </Button>
        </DialogTrigger>
        <DialogTitle className="w-[1200px]"></DialogTitle>

        <DialogContent className="mt-[-241px] ml-[-222px] w-[997px] h-[561px] ">
          <iframe
            width={1000}
            height={561}
            src={`https://www.youtube.com/embed/${Movietrailer}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 block "
          ></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
}
