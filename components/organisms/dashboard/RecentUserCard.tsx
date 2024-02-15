import RecentUserHeader from "@/components/molecules/dashboard/RecentUserHeader";
import RecentUserList from "@/components/molecules/dashboard/RecentUserList";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import React from "react";

const RecentUserCard = () => {
  return (
    <Card className="col-span-4 md:col-span-3">
      <RecentUserHeader />
      <CardContent>
        <RecentUserList />
      </CardContent>
    </Card>
  );
};

export default RecentUserCard;
