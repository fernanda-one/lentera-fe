import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { blogMenuItem } from "@/constants/data";
import { useRouter } from "next/navigation";
import { BlogMenuType } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import MenuMobileBlog from "./MenuMobileBlog";
import { UserNav } from "../UserNav";

const MenuBlog = () => {
  const router = useRouter();
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-3">
        {blogMenuItem.map((item: BlogMenuType, idx: number) => (
          <NavigationMenuItem key={idx} className="hidden md:block">
            {item.href ? (
              <Link href={item.href ? item.href : ""} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item?.title}
                </NavigationMenuLink>
              </Link>
            ) : (
              <>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {item?.children?.map((items: BlogMenuType, index: number) => (
                      <ListItem
                        key={index}
                        title={items.title}
                        onClick={() => items?.href && router.push(items?.href)}
                        className="cursor-pointer"
                      >
                        {items.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
                <NavigationMenuTrigger>{item?.title}</NavigationMenuTrigger>
              </>
            )}
          </NavigationMenuItem>
        ))}

        <ModeToggle />
        
        <UserNav />
        
        <MenuMobileBlog
          blogMenuItem={blogMenuItem}
        >
          <Button className="md:hidden" size={'icon'}>
            <MenuIcon/>
          </Button>
        </MenuMobileBlog>

      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MenuBlog;
