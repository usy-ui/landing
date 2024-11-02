import { ReactNode } from "react";

type TabItemType = {
  id: string;
  label: string | ReactNode;
  content: ReactNode;
};
