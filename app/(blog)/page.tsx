import BlogCard from "@/components/molecules/blog/BlogCard";
import CarouselCard from "@/components/molecules/blog/CarouselCard";
import React from "react";

const page = () => {
  const blogData = [
    {
      title: "Lorem Ipsum dollor sit ammet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/03/03/20/31/boat-4899802_1280.jpg",
      createdAt: "2 Feb 2024",
      createdBy: "anang syah",
    },
    {
      title: "Lorem Ipsum",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/10/21/09/25/rocks-1757593_1280.jpg",
      createdAt: "2 Feb 2024",
      createdBy: "anang syah",
    },
    {
      title: "Lorem Ipsum",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/10/21/09/25/rocks-1757593_1280.jpg",
      createdAt: "2 Feb 2024",
      createdBy: "anang syah",
    },
  ];
  return (
    <div className="grid grid-cols-2">
      <CarouselCard />
      <div>
        <div className="flex justify-between bg-secondary uppercase p-2 rounded-sm">
          <p>all the news</p>
          <p className="text-primary">latest</p>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          {blogData?.map((item, index) => (
            <BlogCard
              key={index}
              title={item.title}
              imageUrl={item.imageUrl}
              createdAt={item.createdAt}
              createdBy={item.createdBy}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
