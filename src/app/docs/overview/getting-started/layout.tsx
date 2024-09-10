import { FC, ReactNode, useMemo } from "react";

import { ContentAndQuickNav } from "@/components/docs/content-and-quick-nav";
import { QuickNavItemType } from "@/components/docs/content-and-quick-nav/types";

import {
  QuickNavGetStartMainItemConst,
  QuickNavGetStartSubItemConst,
} from "./constants";

type IntroLayoutProps = {
  children: ReactNode;
};

const GettingStartedLayout: FC<IntroLayoutProps> = ({ children }) => {
  const docsQuickNavItemsMemo = useMemo(
    () =>
      [
        QuickNavGetStartMainItemConst.gettingStarted,
        QuickNavGetStartMainItemConst.installation,
        QuickNavGetStartSubItemConst.installLibrary,
        QuickNavGetStartSubItemConst.importCssFile,
      ] as QuickNavItemType[],
    []
  );

  return (
    <ContentAndQuickNav quickNavItems={docsQuickNavItemsMemo}>
      {children}
    </ContentAndQuickNav>
  );
};

export default GettingStartedLayout;
