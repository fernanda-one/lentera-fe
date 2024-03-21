import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";

const DetailCategoryBlog = ({
  title,
  imageUrl,
  creator,
  date,
  description,
}: {
  title: string;
  imageUrl: string;
  creator: string;
  date: string;
  description: string;
}) => {
  return (
    <div className="w-full">
      <div className="space-y-5">
        <h1 className="text-3xl font-extrabold leading-10">
          {title}
        </h1>
        <div className="flex items-center text-xs gap-3">
          <div className="flex gap-1 items-center">
            <CircleUserRound width={15} height={15} />
            <p className="font-semibold">{creator}</p>
          </div>
          <div className="flex gap-1 items-center">
            <p className="font-medium text-muted-foreground">
              {date}
            </p>
          </div>
        </div>
        <div className="max-w-full ">
          <Image
            alt="news-detail"
            width={720}
            height={300}
            src={imageUrl}
          />
        </div>
        <div>{parse(description)}</div>
      </div>
    </div>
  );
};

export default DetailCategoryBlog;
