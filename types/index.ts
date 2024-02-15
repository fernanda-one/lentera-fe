import { Icons } from "@/components/icons";

export type BlogMenuType = {
  title: string;
  href?: string;
  description?: string;
  children?: BlogMenuType[] | undefined;
};

export type DashboardMenuType = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

// export type BreadCrumbType = {
//   title: string;
//   link: string;
// };

// export type BreadCrumbPropsType = {
//   items: BreadCrumbType[];
// };

export type UserType = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};