"use client";

import BreadCrumb from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { users } from "@/constants/data";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "@/components/tables/user-tables/columns";
// import { useFetchUsers } from "@/repository/users-repository";
import { useState } from "react";

const breadcrumbItems = [{ title: "User", link: "/dashboard/user" }];
export default function Users() {
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(2);
  const [search, setSearch] = useState("");

  const router = useRouter();
  // const { data } = useFetchUsers({
  //   page: page,
  //   limit: pageLimit,
  //   search: search,
  // });

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading
            title={`Users (${users.length})`}
            description="Manage users (Client side table functionalities.)"
          />
          <Button
            className="text-xs md:text-sm"
            onClick={() => router.push(`/dashboard/user/new`)}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>
        <Separator />
        {/* <DataTable
          searchKey="name"
          columns={columns}
          data={data?.data}
          totalData={data?.pagination?.total}
          page={page}
          pageLimit={pageLimit}
        /> */}
      </div>
    </>
  );
}
