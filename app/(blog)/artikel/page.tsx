import React from "react";
import CategoryBlog from "@/components/layouts/blog/CategoryBlog";

const Artikel = () => {
  const breadcrumbItems = [
    { title: "Home", link: "/" },
    { title: "Artikel", link: "/artikel" },
  ];

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

  const dataSource = [
    {
      title: "Lorem Ipsum is simply dummy text of the printing",
      imageUrl: "/blog-image1.png",
      date: "Jumat, 20 Februari 2024 03:01 WIB",
      createdBy: "Anang Syah",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing",
      imageUrl: "/blog-image1.png",
      date: "Jumat, 20 Februari 2024 03:01 WIB",
      createdBy: "Anang Syah",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing",
      imageUrl: "/blog-image1.png",
      date: "Jumat, 20 Februari 2024 03:01 WIB",
      createdBy: "Anang Syah",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing",
      imageUrl: "/blog-image1.png",
      date: "Jumat, 20 Februari 2024 03:01 WIB",
      createdBy: "Anang Syah",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
  ]

  return (
    <CategoryBlog
      title={"Artikel"}
      carouselData={carouselData}
      dataSource={dataSource}
    >
    </CategoryBlog>
  );
};

export default Artikel;