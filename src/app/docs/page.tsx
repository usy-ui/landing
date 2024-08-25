"use client";
import { redirect, usePathname } from "next/navigation";

import { DocsRoute } from "./layout.constants";

const Docs = () => {
  const pathname = usePathname();
  redirect(`${pathname}${DocsRoute.OVERVIEW}`);
};

export default Docs;
