import React from "react";
import { Badge } from "../ui/badge";
import { Bookmark, MessageCircle } from "lucide-react";

const CardImageNews = ({
  title,
  date,
  category,
  imageUrl,
  className,
}: {
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  className?: string;
}) => {
  return (
    <div className="h-full w-full relative rounded-xl cursor-pointer">
      <picture className="rounded-xl block overflow-hidden h-full w-full">
        <img
          className="hover:scale-125 ease-in duration-150 w-full h-full"
          alt="news"
          src={imageUrl}
        />
      </picture>
      <div className={`absolute bottom-0 w-full ${className} p-3`}>
        <Badge
          className="uppercase rounded-xl bg-white text-black font-bold text-xs mb-1 border-none"
          variant={"outline"}
        >
          {category}
        </Badge>
        <h1 className={`text-white font-semibold leading-5`}>
          {title}
        </h1>
        <span className="text-xs font-medium text-white">2 Februari, 2024</span>
      </div>
    </div>
  );
};

export default CardImageNews;
