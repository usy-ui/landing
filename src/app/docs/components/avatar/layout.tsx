import { FC, ReactNode, useMemo } from "react";

import {
  MainToCItem,
  SubToCItem,
  ToCItemType,
} from "@/components/docs/docs.constants";
import { SpecLayout } from "@/components/docs/spec-layout";

type AvatarLayoutProps = {
  children: ReactNode;
};

const AvatarLayout: FC<AvatarLayoutProps> = ({ children }) => {
  const toCItems = useMemo(
    () =>
      [
        MainToCItem.overview,
        MainToCItem.apiReference,
        MainToCItem.examples,
        SubToCItem.size,
        SubToCItem.color,
        SubToCItem.radius,
        SubToCItem.fallback,
      ] as ToCItemType[],
    []
  );

  return <SpecLayout toCItems={toCItems}>{children}</SpecLayout>;
};

export default AvatarLayout;
