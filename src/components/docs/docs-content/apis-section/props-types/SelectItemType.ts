import { ReactNode } from "react";

type SelectItemType<T = any> = {
  id: string | number;
  label: string;
  labelElement?: ReactNode;
  value: T;
};
