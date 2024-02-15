import HeaderDashboard from "@/components/layouts/dashboard/HeaderDashboard";
import MenuDashboard from "@/components/layouts/dashboard/MenuDashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderDashboard />
      <div className="flex h-screen overflow-hidden">
        <MenuDashboard />
        <main className="w-full pt-16">{children}</main>
      </div>
    </>
  );
}