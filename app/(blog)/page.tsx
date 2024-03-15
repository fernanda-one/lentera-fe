"use client";

import TitleContent from "@/components/blog/TitleContent";
import CardImageNews from "@/components/cards/CardImageNews";
import React from "react";
import CardTrending from "@/components/cards/CardTrending";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardNews from "@/components/cards/CardNews";

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
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-6">
      <div className="col-span-8">
        <div className="grid grid-rows-2 md:grid-cols-3 md:grid-flow-col gap-2">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            navigation
            scrollbar={{ draggable: true }}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              stopOnLastSlide: false,
            }}
            spaceBetween={50}
            slidesPerView={1}
            className="row-span-2 col-span-4 md:col-span-2 w-full h-40 md:h-full"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
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
          </Swiper>
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

        <div className="col-span-12 h-12 mt-5 mb-3">
          <TitleContent title="Berita Terbaru" />
        </div>
        <div className="col-span-12 my-9 grid place-content-start grid-cols-1 md:grid-cols-2 gap-4">
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
      </div>

      <div className="col-span-8 md:col-span-4">
        <div className="col-span-12 h-12 mb-3">
          <TitleContent title="Berita Populer" />
        </div>
        <div className="col-span-12 grid place-content-start grid-cols-1 gap-2">
          {[1, 2, 3, 4, 5]?.map((item, idx) => (
            <CardTrending
              key={idx}
              number={idx + 1}
              title="Lorem ipsum dolor, sit amet consectetur adipisicing"
              date="Jumat, 16 Feb 2024 20:01 WIB"
              imageUrl={"/blog-image1.png"}
            />
          ))}
        </div>
      </div>

      <div className="col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="grid place-content-start gap-4">
          <div className="h-12">
            <TitleContent title="Tokoh" />
          </div>
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
          <div className="h-12">
            <TitleContent title="Opini" />
          </div>
          {[1, 2, 3, 4]?.map((item, idx) => (
            <CardNews
              key={idx}
              title={"Lorem ipsum dolor sit, amet consectetur adipisicing."}
              imageUrl={"/blog-image1.png"}
              category={"Teknologi"}
              date={"10 Maret 2023"}
            />
          ))}
        </div>
      </div>

      <div className="col-span-8 md:col-span-4">
        <div className="col-span-12 h-12 mb-3">
          <TitleContent title="Artikel Populer" />
        </div>
        <div className="col-span-12 grid place-content-start grid-cols-1 gap-2">
          {[1, 2, 3, 4, 5]?.map((item, idx) => (
            <CardTrending
              key={idx}
              number={idx + 1}
              title="Lorem ipsum dolor, sit amet consectetur adipisicing"
              date="Jumat, 16 Feb 2024 20:01 WIB"
              imageUrl={"/blog-image1.png"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
