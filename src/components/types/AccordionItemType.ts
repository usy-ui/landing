import { ReactNode } from "react";

export type AccordionItemType = {
  id: string;
  title: string | ReactNode;
  content: string | ReactNode;
  isOpen?: boolean;
};
