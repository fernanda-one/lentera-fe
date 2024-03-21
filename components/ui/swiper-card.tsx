import React from "react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { cn } from "@/lib/utils";

const SwiperCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
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
      className={cn("w-full h-full md:h-80", className)}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {children}
      {/* {carouselData?.map((item, idx) => (
        <SwiperSlide key={idx}>
          <CardImageNews
            title={item.title}
            category={item.category}
            imageUrl={item.imageUrl}
            date={item.date}
            className="text-xl py-2 md:py-7"
          />
        </SwiperSlide>
      ))} */}
    </Swiper>
  );
};

export default SwiperCard;
