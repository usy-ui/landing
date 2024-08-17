"use client";
import { redirect, usePathname } from "next/navigation";

const Docs = () => {
  const pathname = usePathname();
  redirect(`${pathname}/overview`);
};

export default Docs;
