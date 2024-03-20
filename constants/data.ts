import { BlogMenuType, DashboardMenuType, UserType } from "@/types";

export const blogMenuItem: BlogMenuType[] = [
  {
    title: "Berita",
    isDescription: false,
    children: [
      {
        title: "Bisnis Ekonomi",
        href: "/berita/ekonomi",
      },
      {
        title: "Kesehatan",
        href: "/berita/kesehatan",
      },
      {
        title: "Nasional",
        href: "/berita/nasional",
      },
      {
        title: "Teknologi",
        href: "/berita/teknologi",
      },
    ],
  },
  {
    title: "Artikel",
    href: "/artikel", 
  },
  {
    title: "Umum",
    href: "/umum", 
  },
  {
    title: "Opini",
    href: "/opini", 
  },
  {
    title: "Tentang Kami",
    isDescription: true,
    children: [
      {
        title: "Tokoh",
        href: "/tokoh",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "Gallery",
        href: "/gallery",
        description:
          "For sighted users to preview content available behind a link.",
      },
      {
        title: "Struktur Kepengurusan",
        href: "struktur-kepengurusan",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
      {
        title: "Struktur Ketua Umum",
        href: "struktur-ketua-umum",
        description: "Visually or semantically separates content.",
      },
      {
        title: "About PMII KEBAL",
        href: "/about-us",
        description:
          "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      },
      {
        title: "Contact",
        href: "/contact",
        description:
          "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
      },
    ],
  },
];

export const dashboardMenuItem: DashboardMenuType[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
      label: "Dashboard",
    },
    {
      title: "Users",
      href: "/dashboard/users",
      icon: "user",
      label: "users",
    },
    {
      title: "Employee",
      href: "/dashboard/employee",
      icon: "employee",
      label: "employee",
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: "profile",
      label: "profile",
    },
    {
      title: "Kanban",
      href: "/dashboard/kanban",
      icon: "kanban",
      label: "kanban",
    },
    {
      title: "Login",
      href: "/",
      icon: "login",
      label: "login",
    },
];

export const users: UserType[] = [
  {
    id: 1,
    name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    company: "TechGuru",
    role: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    company: "CodeGenius",
    role: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    company: "SoftWorks",
    role: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    company: "DevCraft",
    role: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    company: "WebSolutions",
    role: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
];