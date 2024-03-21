import TitleContent from "@/components/blog/TitleContent";
import CardTrending from "@/components/cards/CardTrending";
import FooterBlog from "@/components/layouts/blog/FooterBlog";
import HeaderBlog from "@/components/layouts/blog/HeaderBlog";
import React from "react";
import "swiper/css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeaderBlog />
      <div className="w-full pt-24 px-5 md:px-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-6">
          <div className="col-span-1 md:col-span-8">{children}</div>

          <div className="col-span-1 md:col-span-4">
            <TitleContent title="Berita Populer" />
            <div className="col-span-12 grid place-content-start grid-cols-1 gap-2 mb-9">
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
            <TitleContent title="Artikel Populer" />
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
      </div>
      <FooterBlog />
    </div>
  );
};

export default layout;
