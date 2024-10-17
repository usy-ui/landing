import { ReactNode } from "react";

export type APIsSectionRowType = {
  propName: string;
  required: boolean;
  type: string | ReactNode;
  defVault: string;
};
