import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const RecentUserHeader = () => {
  return (
    <CardHeader>
      <CardTitle>Recent User</CardTitle>
      <CardDescription>got 25 new users this month.</CardDescription>
    </CardHeader>
  );
};

export default RecentUserHeader;
