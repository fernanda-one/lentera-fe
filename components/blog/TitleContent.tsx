import React from "react";

const TitleContent = ({title} : {title: string}) => {
  return (
    <div className="border-b-2 border-solid border-primary w-full">
      <h2 className="inline-block font-medium text-base uppercase bg-primary text-white p-[0.6rem]">
        {title}
      </h2>
    </div>
  );
};

export default TitleContent;
