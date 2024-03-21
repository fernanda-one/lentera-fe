"use client";

import TitleContent from "@/components/blog/TitleContent";
import CardImageNews from "@/components/cards/CardImageNews";
import CardDetailNews from "@/components/cards/CardNewsDetail";
import SwiperCard from "@/components/ui/swiper-card";
import React from "react";
import { SwiperSlide } from "swiper/react";

const CategoryBlog = ({
  title,
  carouselData,
  dataSource,
  children,
}: {
  title: string;
  carouselData: any;
  dataSource: any;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <TitleContent title={title} />
      <div className="col-span-12 mt-4 grid place-content-start grid-cols-1 md:grid-cols-1 gap-4">
        <SwiperCard>
          {carouselData?.map((item: any, idx: number) => (
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
        {dataSource?.map((item: any, idx: number) => (
          <CardDetailNews
            key={idx}
            title={item?.title}
            imageUrl={item?.imageUrl}
            date={item?.date}
            createdBy={item?.createdBy}
            descripion={item?.description}
          />
        ))}
        {children}
      </div>
    </>
  );
};

export default CategoryBlog;
