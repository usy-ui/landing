import { FC, ReactNode, useMemo } from "react";

import { ContentAndQuickNav } from "@/components/docs/content-and-quick-nav";
import { QuickNavItemType } from "@/components/docs/content-and-quick-nav/types";

import {
  QuickNavIntroMainItemConst,
  QuickNavIntroSubItemConst,
} from "./layout.constants";

type IntroLayoutProps = {
  children: ReactNode;
};

const IntroLayout: FC<IntroLayoutProps> = ({ children }) => {
  const docsQuickNavItemsMemo = useMemo(
    () =>
      [
        QuickNavIntroMainItemConst.introduction,
        QuickNavIntroMainItemConst.vision,
        QuickNavIntroMainItemConst.keyFeatures,
        QuickNavIntroSubItemConst.fastDevelopment,
        QuickNavIntroSubItemConst.easeOfUse,
        QuickNavIntroSubItemConst.customizationOptions,
        QuickNavIntroSubItemConst.responsiveAccessible,
        QuickNavIntroSubItemConst.modularDesign,
      ] as QuickNavItemType[],
    []
  );

  return (
    <ContentAndQuickNav quickNavItems={docsQuickNavItemsMemo}>
      {children}
    </ContentAndQuickNav>
  );
};

export default IntroLayout;
