"use client";

import TitleContent from "@/components/blog/TitleContent";
import CardImageNews from "@/components/cards/CardImageNews";
import React from "react";
import { SwiperSlide } from "swiper/react";
import CardNews from "@/components/cards/CardNews";
import SwiperCard from "@/components/ui/swiper-card";

const Blog = () => {
  const carouselData = [
    {
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      imageUrl: "/blog-image1.png",
      category: "tokoh",
      date: "2 Feb 2024",
      createdBy: "anang syah",
    },
    {
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      imageUrl: "/blog-image1.png",
      category: "teknologi",
      date: "2 Feb 2024",
      createdBy: "anang syah",
    },
    {
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      imageUrl: "/blog-image1.png",
      category: "kesehatan",
      date: "2 Feb 2024",
      createdBy: "anang syah",
    },
  ];
  return (
    <div>
      <div className="grid grid-rows-2 md:grid-cols-3 md:grid-flow-col mb-9 gap-2">
        <SwiperCard
          className="row-span-2 col-span-4 md:col-span-2 w-full h-40 md:h-full"
        >
          {carouselData?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <CardImageNews
                title={item.title}
                category={item.category}
                imageUrl={item.imageUrl}
                date={item.date}
                className="text-xl py-2 md:py-7"
              />
            </SwiperSlide>
          ))}
        </SwiperCard>
        <div className="row-span-1 col-span-4 md:col-span-1 h-40 w-full">
          <CardImageNews
            title={"Lorem ipsum dolor sit, amet consectetur adipisicing."}
            category={"Teknologi"}
            imageUrl={"/blog-image1.png"}
            date={"10 Maret 2023"}
          />
        </div>
        <div className="row-span-1 col-span-4 md:col-span-1 h-40 w-full">
          <CardImageNews
            title={"Lorem ipsum dolor sit, amet consectetur adipisicing."}
            category={"Teknologi"}
            imageUrl={"/blog-image1.png"}
            date={"10 Maret 2023"}
          />
        </div>
      </div>

      <TitleContent title="Berita Terbaru" />
      <div className="col-span-12 mb-9 grid place-content-start grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item, idx) => (
          <CardNews
            key={idx}
            title={"Lorem ipsum dolor sit, amet consectetur adipisicing."}
            imageUrl={"/blog-image1.png"}
            category={"Teknologi"}
            date={"10 Maret 2023"}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid place-content-start gap-4">
          <TitleContent title="Tokoh" />
          {[1, 2, 3, 4]?.map((item, idx) => (
            <CardNews
              key={idx}
              title={"Lorem ipsum dolor sit, amet consectetur adipisicing."}
              imageUrl={"/blog-image1.png"}
              category={"tokoh"}
              date={"10 Maret 2023"}
            />
          ))}
        </div>
        <div className="grid place-content-start gap-4">
          <TitleContent title="Opini" />
          {[1, 2, 3, 4]?.map((item, idx) => (
            <CardNews
              key={idx}
              title={"Lorem ipsum dolor sit, amet consectetur adipisicing."}
              imageUrl={"/blog-image1.png"}
              category={"tokoh"}
              date={"10 Maret 2023"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
