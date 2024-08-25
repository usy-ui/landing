import { FC, ReactNode, useMemo } from "react";

import { QuickNavItemType } from "@/@types/quick-nav";
import {
  QuickNavCompMainItemConst,
  QuickNavCompExampleItemConst,
} from "@/components/docs/_constants/comp.constants";
import { SpecLayout } from "@/components/docs/spec-layout";

type AvatarLayoutProps = {
  children: ReactNode;
};

const AvatarLayout: FC<AvatarLayoutProps> = ({ children }) => {
  const docsQuickNavItemsMemo = useMemo(
    () =>
      [
        QuickNavCompMainItemConst.overview,
        QuickNavCompMainItemConst.apiReference,
        QuickNavCompMainItemConst.examples,
        QuickNavCompExampleItemConst.size,
        QuickNavCompExampleItemConst.radius,
        QuickNavCompExampleItemConst.fallback,
      ] as QuickNavItemType[],
    []
  );

  return (
    <SpecLayout quickNavItems={docsQuickNavItemsMemo}>{children}</SpecLayout>
  );
};

export default AvatarLayout;
