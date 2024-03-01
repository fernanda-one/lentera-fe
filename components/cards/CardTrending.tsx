import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Bookmark } from "lucide-react";
import Image from "next/image";

const CardTrending = () => {
  return (
    <Card className="rounded-none border shadow-none">
      <CardContent className="grid grid-cols-12 gap-1 py-5">
        <div className="col-span-8">
          <h2 className="font-bold text-base uppercase">Politik</h2>
          <p className="text-sm max-w-xs my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pellentesque.
          </p>
          <div className="flex items-center gap-1">
            <p className="font-medium text-xs text-muted-foreground">2 Februari, 2024</p>
            <Bookmark className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
        <div className="col-span-4 bg-gray-300 rounded-lg">
          {/* <Image
            src={"/blog-image1.png"}
            width={1000}
            height={1000}
            // objectFit="cover"
            alt={"gambar"}
          /> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardTrending;
