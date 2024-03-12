import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Facebook, Instagram, Phone, Twitter, Youtube } from "lucide-react";
import React from "react";

const FooterBlog = () => {
  const tokohItems = [
    {name: "M Reza"},
    {name: "Apriyono"},
    {name: "Fernanda"},
    {name: "Anang"},
  ];

  const informationItems = [
    {
      title: "Struktur Kepengurusan",
      description: "Yes. It's animated by default, but you can disable it if you prefer.",
    },
    {
      title: "Struktur Ketua Umum",
      description: "Yes. It's animated by default, but you can disable it if you prefer.",
    },
    {
      title: "About PMII KEBAL",
      description: "Yes. It's animated by default, but you can disable it if you prefer.",
    },
  ];

  const contactUsItems = [
    {
      icon: <Phone />,
      contact: '08123456789'
    },
    {
      icon: <Youtube />,
      contact: 'Lentera Sahabat'
    },
    {
      icon: <Twitter />,
      contact: 'lentera_sahabat'
    },
    {
      icon: <Instagram />,
      contact: 'lenterasahabat_'
    },
    {
      icon: <Facebook />,
      contact: 'lenterasahabat_'
    },
  ];

  return (
    <footer className="bg-[#0F172A] text-white w-full grid grid-cols-12 gap-2 px-5 md:px-11 pt-16 pb-[51px]">
      <div className="col-span-6 md:col-span-3 text-center">
        <h5 className="mb-4">Lentera Sahabat</h5>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eu aliquam mauris. Aenean bibendum, nisl vitae fermentum dictum, felis
          massa vulputate urna, a egestas turpis lectus nec metus. Sed eget
          libero neque. Praesent scelerisque dictum eleifend. Praesent
          scelerisque dictum eleifend. Pellentesque fermentum efficitur nisl vel
          elementum.
        </p>
      </div>

      <div className="col-span-6 md:col-span-2 text-center">
        <h5 className="mb-4">Tokoh</h5>
        <ul>
          {tokohItems?.map((item, idx) => (
            <li className="my-2" key={idx}>{item.name}</li>
          ))}
        </ul>
      </div>

      <div className="col-span-6 md:col-span-4 mt-10 md:mt-0">
        <h5 className="text-center mb-1">Information</h5>
        {informationItems?.map((item, idx) => (
          <Accordion key={idx} type="single" collapsible className="w-full">
            <AccordionItem className="border-none" value="item-1">
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>
                {item.description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      
      <div className="col-span-6 md:col-span-3 text-center mt-10 md:mt-0">
        <h5 className="mb-4">Contact Us</h5>
        <div className="grid grid-cols-3 place-items-center gap-3">
          {contactUsItems?.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="justify-self-end">{item.icon}</div>
              <span className="col-span-2 justify-self-start">{item.contact}</span>
            </React.Fragment>
          ))}
        </div>
        {/* {contactUsItems?.map((item, idx) => (
          <div className="flex justify-center gap-2 mb-1 w-full" key={idx}>
            {item.icon}
            <span>{item.contact}</span>
          </div>
        ))} */}
      </div>
    </footer>
  );
};

export default FooterBlog;
