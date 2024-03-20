import React from "react";
import { Bookmark, Clock } from "lucide-react";
import Link from "next/link";

const CardTrending = ({
  title,
  date,
  imageUrl,
  number,
}: {
  title: string;
  date: string;
  imageUrl: string;
  number?: number;
}) => {
  return (
    <Link className="relative p-1" href={"/"}>
      <div className="relative grid grid-cols-3 gap-x-4">
        <picture className="rounded-xl block overflow-hidden">
          <img
            className="hover:scale-125 ease-in duration-150 w-full h-full"
            alt="news"
            src={imageUrl}
          />
        </picture>
        <div className="col-span-2">
          <p className="text-sm text-balance line-clamp-2 truncate overflow-hidden font-semibold hover:text-primary ease-in duration-150">
            {title}
          </p>
          <div className="flex items-center gap-1 mt-1 text-muted-foreground">
            <Clock width={15} height={15} />
            <p className="text-xs font-semibold">{date}</p>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 rounded-full bg-primary w-6 h-6 text-center text-white">
        {number}
      </div>
    </Link>
  );
};

export default CardTrending;
