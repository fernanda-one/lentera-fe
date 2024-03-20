import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BlogMenuType } from "@/types";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MenuMobileBlog = ({
  children,
  blogMenuItem,
  className,
}: {
  children: React.ReactNode;
  blogMenuItem: BlogMenuType[];
  className?: string;
}) => {
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        className={cn("w-full min-h-screen overflow-y-auto", className)}
      >
        {blogMenuItem.map((item: BlogMenuType, idx: number) => (
          <React.Fragment key={idx}>
            {"children" in item ? (
              <Accordion type="single" collapsible className="w-full" key={idx}>
                <AccordionItem value={`item-${idx}`}>
                  <AccordionTrigger className="text-lg hover:text-primary ease-in duration-150">
                    {item.title}
                  </AccordionTrigger>
                  {item.children?.map((childItem, childIdx) => (
                    <SheetClose key={childIdx} asChild onClick={() => router.push(`${childItem.href}`)}>
                      <AccordionContent
                        className="text-base w-full hover:text-primary ease-in duration-150 py-2 px-2 cursor-pointer"
                      >
                        {childItem.title}
                      </AccordionContent>
                    </SheetClose>
                  ))}
                </AccordionItem>
              </Accordion>
            ) : (
              <SheetClose asChild>
                <div className="border-b-2 border-solid border-accent py-4 hover:text-primary ease-in duration-150">
                  <Link href={item.href ? item.href : "/"}>
                    <p className="text-lg font-semibold">{item.title}</p>
                  </Link>
                </div>
              </SheetClose>
            )}
          </React.Fragment>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default MenuMobileBlog;
