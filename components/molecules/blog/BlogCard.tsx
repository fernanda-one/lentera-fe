import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const BlogCard = ({
  imageUrl,
  title,
  createdBy,
  createdAt,
}: {
  imageUrl: string;
  title: string;
  createdBy: string;
  createdAt: string;
}) => {
  return (
    <Card className="border-none shadow-none transition-all duration-300 hover:shadow hover:border hover:bg-card cursor-pointer">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="h-52 w-full relative">
          <Image src={imageUrl} fill alt="blog-image" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="opacity-80 text-sm font-medium">{createdAt}</p>
        <p className="text-xl font-semibold my-3">{title}</p>
        <p className="opacity-80 text-sm font-medium">{createdBy}</p>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
