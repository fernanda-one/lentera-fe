import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Bookmark } from "lucide-react";

const CardNews = () => {
  return (
    <Card className="rounded-none bg-secondary border-none shadow-none pt-4">
      <CardContent>
        <Badge
          variant={"outline"}
          className="uppercase rounded-xs bg-[#94A3B8] font-bold px-2 py-1 mb-4"
        >
          Teknologi
        </Badge>
        <h2 className="text-base mb-2 leading-5 line-clamp-3 truncate overflow-hidden whitespace-normal">Lorem ipsum dolor sit amet elit,lacus consectetur adipiscing .</h2>
        <div className="flex justify-between items-center gap-1">
          <div className="flex flex-col gap-3 basis-2/3">
            <p className="text-xs text-muted-foreground w-full line-clamp-4 truncate overflow-hidden whitespace-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pellentesque libero ut velit ullamcorper feugiat.Nam ut diam
              dapibus, fermentum lacus eu, pretium enim.Fusce posuere est nibh,
              pharetra ornare diam aliquam a. Integer congue ipsum sed faucibus
              euismod. Sed dignissim a diam ut molestie.{" "}
            </p>
            <div className="flex items-center gap-1">
              <span className="text-xs font-medium">2 Februari, 2024</span>
              <Bookmark className="h-5 w-5" />
            </div>
          </div>
          <div className="basis-2/5 w-[100px] h-[100px] bg-slate-400 rounded-lg">
            
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardNews;
