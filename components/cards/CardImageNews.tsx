import React from "react";
import { Badge } from "../ui/badge";
import { Bookmark, MessageCircle } from "lucide-react";

const CardImageNews = () => {
  return (
    <div className="relative min-h-[300px] bg-cover bg-center bg-purple-500 rounded-lg bg-[url('https://media.istockphoto.com/id/1494104649/photo/ai-chatbot-artificial-intelligence-digital-concept.webp?b=1&s=170667a&w=0&k=20&c=SVG3LQPHz2JJbsfUil8N9BRxzI9-5S7AR0A1Kha7nng=')]">
      <div className="absolute bottom-0 bg-transparent w-full py-3 px-4">
        <div className="flex justify-between items-center">
          <Badge
            className="uppercase rounded-xl bg-primary-foreground text-primary font-bold text-xs"
            variant={"outline"}
          >
            Teknologi
          </Badge>
          <div className="flex items-center gap-1">
            <MessageCircle className="text-white w-5 h-5" />
            <span className="font-bold text-xs text-white">200</span>
          </div>
        </div>
        <p className="text-white font-bold text-base my-3">
          Berikut Merupakan Bahasa Pemrograman Paling Banyak Diminati Oleh Para
          Programer di Tahun 2023
        </p>
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium text-white">
            2 Februari, 2024
          </span>
          <Bookmark className="text-white h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default CardImageNews;
