import FooterBlog from "@/components/layouts/blog/FooterBlog";
import HeaderBlog from "@/components/layouts/blog/HeaderBlog";
import React from "react";
import 'swiper/css';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeaderBlog />
      <div className="w-full pt-24 px-5 md:px-11">
        {children}
      </div>
      <FooterBlog/>
    </div>
  );
};

export default layout;
