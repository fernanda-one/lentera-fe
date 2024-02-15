import { ModeToggle } from "@/components/ui/mode-toggle";
import { cn } from "@/lib/utils";
import { MenuMobileDaashboard } from "./MenuMobileDashboard";
import { UserNav } from "../UserNav";
import Link from "next/link";

export default function HeaderDashboard() {
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden lg:block text-xl font-semibold">
          <Link
            href={"/berita"}
            target="_blank"
          >
            Lentera Sahabat
          </Link>
        </div>
        <div className={cn("block lg:!hidden")}>
          <MenuMobileDaashboard />
        </div>

        <div className="flex items-center gap-2">
          <UserNav />
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}