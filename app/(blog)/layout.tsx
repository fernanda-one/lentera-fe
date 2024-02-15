import HeaderBlog from "@/components/layouts/blog/HeaderBlog";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeaderBlog />
      <div className="w-full pt-24 px-5 md:px-16">
        {children}
      </div>
    </div>
  );
};

export default layout;
