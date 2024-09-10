import { FC, ReactNode, useMemo } from "react";

import {
  CompQuickNavMainItemConst,
  CompQuickNavSubItemConst,
} from "@/components/docs/component/constants";
import { ContentAndQuickNav } from "@/components/docs/content-and-quick-nav";
import { QuickNavItemType } from "@/components/docs/content-and-quick-nav/types";

type AvatarLayoutProps = {
  children: ReactNode;
};

const AvatarLayout: FC<AvatarLayoutProps> = ({ children }) => {
  const docsQuickNavItemsMemo = useMemo(
    () =>
      [
        CompQuickNavMainItemConst.overview,
        CompQuickNavMainItemConst.apiReference,
        CompQuickNavMainItemConst.examples,
        CompQuickNavSubItemConst.size,
        CompQuickNavSubItemConst.radius,
        CompQuickNavSubItemConst.fallback,
      ] as QuickNavItemType[],
    []
  );

  return (
    <ContentAndQuickNav quickNavItems={docsQuickNavItemsMemo}>
      {children}
    </ContentAndQuickNav>
  );
};

export default AvatarLayout;
