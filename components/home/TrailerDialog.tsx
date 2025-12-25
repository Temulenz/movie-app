import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React from "react";

type TrailerDialogProps = {
  youtubeKey?: string;
  children?: React.ReactNode;
};

export const TrailerDialog = ({ youtubeKey, children }: TrailerDialogProps) => {
  if (!youtubeKey) {
    // 🔒 Trailer байхгүй бол button ч харуулахгүй
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children ? children : <Button>Watch Trailer</Button>}
      </DialogTrigger>

      <DialogContent className="p-0 sm:max-w-4xl bg-black">
        <DialogHeader>
          <DialogTitle className="hidden" />
        </DialogHeader>

        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${youtubeKey}?autoplay=1`}
          title="Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  );
};
