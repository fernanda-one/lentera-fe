import { Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

const CardNews = ({
  date,
  title,
  category,
  imageUrl,
}: {
  date: string;
  title: string;
  category: string;
  imageUrl: string;
}) => {
  return (
    <Link href={"/"}>
      <div className="grid grid-cols-3 gap-x-4">
        <picture className="rounded-xl block overflow-hidden">
          <img
            className="hover:scale-125 ease-in duration-150 w-full h-full"
            alt="news"
            src={imageUrl}
          />
        </picture>
        <div className="col-span-2">
          <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-muted-foreground">
            <p>{category}</p>|
            <Clock width={15} height={15} />
            <p>{date}</p>
          </div>
          <p className="text-base font-semibold hover:text-primary ease-in duration-150">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardNews;
