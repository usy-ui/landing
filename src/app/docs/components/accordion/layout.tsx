import { FC, ReactNode, useMemo } from "react";

import {
  CompQuickNavMainItemConst,
  CompQuickNavSubItemConst,
} from "@/components/docs/component/constants";
import { ContentAndQuickNav } from "@/components/docs/content-and-quick-nav";
import { QuickNavItemType } from "@/components/docs/content-and-quick-nav/types";

type AccordionLayoutProps = {
  children: ReactNode;
};

const AvatarLayout: FC<AccordionLayoutProps> = ({ children }) => {
  const docsQuickNavItemsMemo = useMemo(
    () =>
      [
        CompQuickNavMainItemConst.overview,
        CompQuickNavMainItemConst.apiReference,
        CompQuickNavMainItemConst.examples,
        CompQuickNavSubItemConst.default,
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
