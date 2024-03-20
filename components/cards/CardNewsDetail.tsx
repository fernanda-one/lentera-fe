import { CircleUserRound, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

const CardDetailNews = ({
  date,
  title,
  descripion,
  imageUrl,
  createdBy,
}: {
  date: string;
  title: string;
  descripion: string;
  imageUrl: string;
  createdBy: string;
}) => {
  return (
    <Link href={"/"}>
      <div className="grid grid-cols-3 gap-x-4">
        <picture className="col-span-3 md:col-span-1 rounded-xl block overflow-hidden">
          <img
            className="hover:scale-125 ease-in duration-150 w-full h-full"
            alt="news"
            src={imageUrl}
          />
        </picture>
        <div className="col-span-3 md:col-span-2">
          <div className="flex items-center gap-2 mt-1 text-xs font-semibold text-muted-foreground">
            <div className="flex gap-1">
              <CircleUserRound width={15} height={15} />
              <p>{createdBy}</p>
            </div>
            <div className="flex gap-1">
              <Clock width={15} height={15} />
              <p>{date}</p>
            </div>
          </div>
          <p className="text-xl text-balance line-clamp-1 truncate overflow-hidden font-bold hover:text-primary ease-in duration-150 mb-1 md:mb-2 mt-1">
            {title}
          </p>
          <p className="text-sm text-balance line-clamp-4 truncate overflow-hidden text-muted-foreground font-medium">{descripion}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardDetailNews;
