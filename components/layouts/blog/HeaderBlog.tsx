"use client";

import * as React from "react";
import MenuBlog from "./MenuBlog";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SearchIcon } from "lucide-react";

export default function NavigationMenuDemo() {
  return (
    <div className="w-full z-10 fixed bg-background shadow py-4 flex justify-between items-center px-5 md:px-10 max-w-full">
      <h1 className="font-semibold text-base md:text-xl">Lentera Sahabat</h1>
      <Dialog>
        <DialogTrigger className="block: md:hidden" asChild>
          <Button size={'icon'} variant="outline">
            <SearchIcon className="h-[1.2rem] w-[1.2rem]"/>
          </Button>
        </DialogTrigger>
        <DialogTrigger className="hidden md:block" asChild>
          <Button variant="outline" className="w-1/3 text-start rounded-full">
            <span>Cari...</span>
            <SearchIcon className="h-4 w-4 float-right" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Cari Artikel Atau Berita</DialogTitle>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                placeholder="Cari..."
              />
            </div>
            <Button type="submit" size="lg" className="px-3">
              <span className="sr-only">Copy</span>
              <SearchIcon className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <MenuBlog />
    </div>
  );
}
