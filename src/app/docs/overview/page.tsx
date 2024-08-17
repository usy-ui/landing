"use client";
import { redirect, usePathname } from "next/navigation";

const Overview = () => {
  const pathname = usePathname();
  redirect(`${pathname}/introduction`);
};

export default Overview;
