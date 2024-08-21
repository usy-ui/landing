import { FC, ReactNode, useMemo } from "react";

import {
  MainToCItem,
  SubToCItem,
  ToCItemType,
} from "@/components/docs/_constants/table-of-contents";
import { SpecificationLayout } from "@/components/docs/specification-layout";

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

  return (
    <SpecificationLayout toCItems={toCItems}>{children}</SpecificationLayout>
  );
};

export default AvatarLayout;
